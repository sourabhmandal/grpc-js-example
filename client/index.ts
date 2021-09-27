import { credentials } from "grpc";
import { ChatServiceClient } from "../proto/recieved_grpc_pb";
import {
  StreamNormalMessage,
  StreamServerMessage,
  UnaryNormalMessage,
} from "../proto/recieved_pb";

const port = 7899;
const uri = `localhost:${port}`;
console.log(`Chat Service Running on : ${uri}`);

const client = new ChatServiceClient(uri, credentials.createInsecure());

let id = 4;

switch (id) {
  case 1:
    break;
  case 2:
    break;
  case 3:
    {
      const stream = client.clientStreamComms((error, data) => {
        console.log(data.getBody(), data.getLanguage());
      });
      let request = new StreamNormalMessage();
      request.setBody("client");
      request.setLanguage("EN-US");
      stream.write(request);
      stream.write(request);
      stream.write(request);
      stream.write(request);
      stream.end();
    }
    break;
  case 4:
    const stream = client.biDirectionStreamComms();

    // send data through ws
    let response = new StreamNormalMessage();
    response.setBody("Data From Client");
    response.setLanguage("EU");
    stream.write(response);
    stream.write(response);

    // get data through ws
    stream.on("data", (data: StreamServerMessage) => {
      console.log(data.toObject());
    });
    stream.write(response);

    stream.end();
    break;
  default:
    console.log("NO RPC FOUND");
}
