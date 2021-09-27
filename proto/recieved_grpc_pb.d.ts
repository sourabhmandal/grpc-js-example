// package: main
// file: recieved.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as recieved_pb from "./recieved_pb";

interface IGenericServiceService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  unaryGeneric: IGenericServiceService_IunaryGeneric;
  serverStreamGeneric: IGenericServiceService_IserverStreamGeneric;
  clientStreamGeneric: IGenericServiceService_IclientStreamGeneric;
  biDirectionStreamGeneric: IGenericServiceService_IbiDirectionStreamGeneric;
}

interface IGenericServiceService_IunaryGeneric
  extends grpc.MethodDefinition<{}, {}> {
  path: "/main.GenericService/unaryGeneric";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<any>;
  requestDeserialize: grpc.deserialize<any>;
  responseSerialize: grpc.serialize<any>;
  responseDeserialize: grpc.deserialize<any>;
}
interface IGenericServiceService_IserverStreamGeneric
  extends grpc.MethodDefinition<{}, {}> {
  path: "/main.GenericService/serverStreamGeneric";
  requestStream: false;
  responseStream: true;
  requestSerialize: grpc.serialize<any>;
  requestDeserialize: grpc.deserialize<any>;
  responseSerialize: grpc.serialize<any>;
  responseDeserialize: grpc.deserialize<any>;
}
interface IGenericServiceService_IclientStreamGeneric
  extends grpc.MethodDefinition<{}, {}> {
  path: "/main.GenericService/clientStreamGeneric";
  requestStream: true;
  responseStream: false;
  requestSerialize: grpc.serialize<any>;
  requestDeserialize: grpc.deserialize<any>;
  responseSerialize: grpc.serialize<any>;
  responseDeserialize: grpc.deserialize<any>;
}
interface IGenericServiceService_IbiDirectionStreamGeneric
  extends grpc.MethodDefinition<{}, {}> {
  path: "/main.GenericService/biDirectionStreamGeneric";
  requestStream: true;
  responseStream: true;
  requestSerialize: grpc.serialize<any>;
  requestDeserialize: grpc.deserialize<any>;
  responseSerialize: grpc.serialize<any>;
  responseDeserialize: grpc.deserialize<any>;
}

export const GenericServiceService: IGenericServiceService;

export interface IGenericServiceServer {
  unaryGeneric: grpc.handleUnaryCall<{}, {}>;
  serverStreamGeneric: grpc.handleServerStreamingCall<{}, {}>;
  clientStreamGeneric: grpc.handleClientStreamingCall<{}, {}>;
  biDirectionStreamGeneric: grpc.handleBidiStreamingCall<{}, {}>;
}

export interface IGenericServiceClient {
  unaryGeneric(
    request: {},
    callback: (error: grpc.ServiceError | null, response: {}) => void
  ): grpc.ClientUnaryCall;
  unaryGeneric(
    request: {},
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: {}) => void
  ): grpc.ClientUnaryCall;
  unaryGeneric(
    request: {},
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: {}) => void
  ): grpc.ClientUnaryCall;
  serverStreamGeneric(
    request: {},
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientReadableStream<{}>;
  serverStreamGeneric(
    request: {},
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientReadableStream<{}>;
  clientStreamGeneric(
    callback: (error: grpc.ServiceError | null, response: {}) => void
  ): grpc.ClientWritableStream<{}>;
  clientStreamGeneric(
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: {}) => void
  ): grpc.ClientWritableStream<{}>;
  clientStreamGeneric(
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: {}) => void
  ): grpc.ClientWritableStream<{}>;
  clientStreamGeneric(
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: {}) => void
  ): grpc.ClientWritableStream<{}>;
  biDirectionStreamGeneric(): grpc.ClientDuplexStream<{}, {}>;
  biDirectionStreamGeneric(
    options: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<{}, {}>;
  biDirectionStreamGeneric(
    metadata: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<{}, {}>;
}

export class GenericServiceClient
  extends grpc.Client
  implements IGenericServiceClient
{
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: object
  );
  public unaryGeneric(
    request: {},
    callback: (error: grpc.ServiceError | null, response: {}) => void
  ): grpc.ClientUnaryCall;
  public unaryGeneric(
    request: {},
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: {}) => void
  ): grpc.ClientUnaryCall;
  public unaryGeneric(
    request: {},
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: {}) => void
  ): grpc.ClientUnaryCall;
  public serverStreamGeneric(
    request: {},
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientReadableStream<{}>;
  public serverStreamGeneric(
    request: {},
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientReadableStream<{}>;
  public clientStreamGeneric(
    callback: (error: grpc.ServiceError | null, response: {}) => void
  ): grpc.ClientWritableStream<{}>;
  public clientStreamGeneric(
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: {}) => void
  ): grpc.ClientWritableStream<{}>;
  public clientStreamGeneric(
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: {}) => void
  ): grpc.ClientWritableStream<{}>;
  public clientStreamGeneric(
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: {}) => void
  ): grpc.ClientWritableStream<{}>;
  public biDirectionStreamGeneric(
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<{}, {}>;
  public biDirectionStreamGeneric(
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<{}, {}>;
}
