import { GenericMessage } from "../proto/recieved_pb";
import { Request, Response } from "express";
import { credentials } from "grpc";
import { GenericServiceClient } from "../proto/recieved_grpc_pb";
var jspb = require("google-protobuf");

// need data definition
// need data to send
// need server rpc url

export const unaryUnaryComms = (req: Request, res: Response): any => {
  const request = new GenericMessage();
  jspb.Message.setProto3StringField(request, 1, req.body.body);
  jspb.Message.setProto3StringField(request, 2, req.body.language);
  jspb.Message.setProto3StringField(request, 3, req.body.bye);

  const client = new GenericServiceClient(
    "localhost:7899",
    credentials.createInsecure()
  );
  client.unaryGeneric(request, function (err: any, data: any) {
    if (err) {
      console.log(err);
      return;
    }
    // to send data as object
    res.json(data.toObject());
  });
};
