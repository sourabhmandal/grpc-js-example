
  import { StreamNormalMessage } from "../proto/recieved_pb";
  import { Request, Response } from "express";
  import { credentials } from "grpc";
  import { ChatServiceClient } from "../proto/recieved_grpc_pb";
  import ws from "ws";
  
  const streamServerClientStreamComms = (req: Request, res: Response, wsc: ws): any => {
    if (wsc.OPEN === 1) {
      const client = new ChatServiceClient("localhost:7899", credentials.createInsecure());
      // Send Server response as json
      const stream = client.clientStreamComms((error, data) => {
        res.json(data.toObject());
      });
      // send websocket data to server
      wsc.on("message", (msg: string) => {
        let recieved = JSON.parse(msg);
        let request = new StreamNormalMessage();
        request.setBody(recieved.body);
    request.setLanguage(recieved.language);
    
        stream.write(request);
      });
  
      setTimeout(() => {
        stream.end();
        wsc.close();
      }, 5000);
    }
  };
  module.exports = streamServerClientStreamComms;
