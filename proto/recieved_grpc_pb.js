// GENERATED CODE -- DO NOT EDIT!

"use strict";

var grpc = require("grpc");
var jspb = require("google-protobuf");

//done
function serialize_main_GenericMessage(arg) {
  var writer = new jspb.BinaryWriter();
  let messageLen = arg.array.length;
  let itr = 1;
  while (itr <= messageLen) {
    let f = jspb.Message.getFieldWithDefault(arg, itr, "");
    if (f.length > 0) {
      writer.writeString(itr, f);
    }
    itr++;
  }
  console.log(Buffer.from(writer.getResultBuffer()));
  return Buffer.from(writer.getResultBuffer());
}

//done
function deserialize_main_GenericMessage(buffer_arg) {
  var reader = new jspb.BinaryReader(new Uint8Array(buffer_arg));
  var msg = new GenericMessage();
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = reader.readString();
        jspb.Message.setProto3StringField(msg, field, value);
        break;
      case 2:
        var value = reader.readString();
        jspb.Message.setProto3StringField(msg, field, value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
}

var GenericServiceService = (exports.GenericServiceService = {
  unaryGeneric: {
    path: "/main.GenericService/unaryGeneric",
    requestStream: false,
    responseStream: false,
    requestType: {},
    responseType: {},
    requestSerialize: serialize_main_GenericMessage,
    requestDeserialize: deserialize_main_GenericMessage,
    responseSerialize: serialize_main_GenericMessage,
    responseDeserialize: deserialize_main_GenericMessage,
  },
  serverStreamGeneric: {
    path: "/main.GenericService/serverStreamGeneric",
    requestStream: false,
    responseStream: true,
    requestType: {},
    responseType: {},
    requestSerialize: serialize_main_GenericMessage,
    requestDeserialize: deserialize_main_GenericMessage,
    responseSerialize: serialize_main_GenericMessage,
    responseDeserialize: deserialize_main_GenericMessage,
  },
  clientStreamGeneric: {
    path: "/main.GenericService/clientStreamGeneric",
    requestStream: true,
    responseStream: false,
    requestType: {},
    responseType: {},
    requestSerialize: serialize_main_GenericMessage,
    requestDeserialize: deserialize_main_GenericMessage,
    responseSerialize: serialize_main_GenericMessage,
    responseDeserialize: deserialize_main_GenericMessage,
  },
  biDirectionStreamGeneric: {
    path: "/main.GenericService/biDirectionStreamGeneric",
    requestStream: true,
    responseStream: true,
    requestType: {},
    responseType: {},
    requestSerialize: serialize_main_GenericMessage,
    requestDeserialize: deserialize_main_GenericMessage,
    responseSerialize: serialize_main_GenericMessage,
    responseDeserialize: deserialize_main_GenericMessage,
  },
});

exports.GenericServiceClient = grpc.makeGenericClientConstructor(
  GenericServiceService
);
