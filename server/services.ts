import {
  sendUnaryData,
  ServerDuplexStream,
  ServerReadableStream,
  ServerUnaryCall,
  ServerWritableStream,
  ServiceError,
} from "grpc";
import { IGenericServiceServer } from "./proto/recieved_grpc_pb";
import { GenericMessage } from "./proto/recieved_pb";

export class GenericServer implements IGenericServiceServer {
  // unary communication
  unaryGeneric(
    call: ServerUnaryCall<GenericMessage>,
    callback: sendUnaryData<GenericMessage>
  ) {
    const body: string = call.request.getBody();
    const language: string = call.request.getLanguage();

    if (!body) {
      const error: ServiceError = {
        name: "Body Missing",
        message: "Cannot send Empty Body",
      };
      callback(error, null);
      return;
    }
    console.log(`unaryComms: Recieved Data :: \n${body}\n${language}`);
    let response = new GenericMessage();
    response.setBody("A MESSAGE SENT FRON UNARY SERVER");
    response.setLanguage("EU");
    callback(null, response);
  }

  // server Streaming
  serverStreamGeneric(call: ServerWritableStream<GenericMessage>) {
    const body = call.request.getBody();
    const language: string = call.request.getLanguage();
    console.log(`serverStreamComms: Recieved Data :: \n${body}\n${language}`);

    let response = new GenericMessage();
    response.setBody("Mandal");
    response.setLanguage("EU");
    //let responses = [response];

    call.write(response);
    call.end();
  }

  // client Stream
  clientStreamGeneric(
    call: ServerReadableStream<GenericMessage>,
    callback: sendUnaryData<GenericMessage>
  ) {
    call.on("data", (d: GenericMessage) => {
      console.log(
        `clientStreamComms: Recieved Data :: \n${d.getBody()}\n${d.getLanguage()}`
      );
    });

    let response = new GenericMessage();
    response.setBody("Data From Server");
    response.setLanguage("EU");
    call.on("end", () => {
      callback(null, response);
    });
  }
  biDirectionStreamGeneric(
    call: ServerDuplexStream<GenericMessage, GenericMessage>
  ) {
    call.on("data", (d: GenericMessage) => {
      console.log(d.toObject());
    });

    let response = new GenericMessage();
    response.setBody("Data From Server");
    response.setLanguage("EU");
    for (let i = 1; i <= 3; i++) {
      setTimeout(() => {
        call.write(response);
      }, 2000 * i);
    }
    call.on("end", () => {
      call.end();
    });
  }
}
