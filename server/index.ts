import { Server, ServerCredentials } from "grpc";
import { GenericServiceService } from "./proto/recieved_grpc_pb";
import { GenericServer } from "./services";

const server = new Server();
server.addService(GenericServiceService, new GenericServer());
const port = 7899;
const uri = `localhost:${port}`;
console.log(`Chat Service Running on : ${uri}`);
server.bind(uri, ServerCredentials.createInsecure());
server.start();
