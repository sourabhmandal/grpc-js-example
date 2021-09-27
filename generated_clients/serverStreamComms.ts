
  import { StreamNormalMessage } from "../proto/recieved_pb";
  import { Request, Response } from "express";
  import { credentials } from "grpc";
  import { ChatServiceClient } from "../proto/recieved_grpc_pb";
  import ws from "ws";
  
  const streamServerServerStreamComms = (req: Request, res: Response, wsc: ws): any => {
    if (wsc.OPEN === 1) {
      const request = new StreamNormalMessage();
      const recieved = req.body;
      // console.log(recieved);
      request.setBody(recieved.body);
    request.setLanguage(recieved.language);
    

      const client = new ChatServiceClient("localhost:7899", credentials.createInsecure());
      
      // send single message to server
      const stream = client.serverStreamComms(request);
      stream.on("err", (err) => console.log(err));
      
      // read message sent from server
      stream.on("data", (d) => {
        wsc.send(d.toString());
      });
      // close stream on Data transfer completion
      stream.on("end", () => {
        res.json({ msg: "stream closed" });
      });
    }
  };
  module.exports = streamServerServerStreamComms;
