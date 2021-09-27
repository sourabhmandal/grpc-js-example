import { StreamNormalMessage, StreamServerMessage } from "../proto/recieved_pb";
import { Request, Response } from "express";
import { credentials } from "grpc";
import { ChatServiceClient } from "../proto/recieved_grpc_pb";
import ws from "ws";

const streamServerBiDirectionStreamComms = (
  req: Request,
  res: Response,
  wsc: ws
): any => {
  if (wsc.OPEN === 1) {
    const client = new ChatServiceClient(
      "localhost:7899",
      credentials.createInsecure()
    );

    const stream = client.biDirectionStreamComms();
    // send websocket data to server
    wsc.on("message", (msg: string) => {
      let recieved = JSON.parse(msg);
      let request = new StreamNormalMessage();
      request.setBody(recieved.body);
      request.setLanguage(recieved.language);

      stream.write(request);
    });

    // get data through ws
    stream.on("data", (data: StreamServerMessage) => {
      wsc.send(data.toString());
    });

    // close stream on Data transfer completion
    stream.on("end", () => {
      res.json({ msg: "stream closed" });
    });

    setTimeout(() => {
      stream.end();
      if (wsc.CLOSED) wsc.close();
    }, 5000);
  }
};
module.exports = streamServerBiDirectionStreamComms;
