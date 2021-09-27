import { capitalizeFirstLetter } from "../utils";
import fs from "fs";
import { IStreamRpcTemplate } from "../types/rpc";

const template = (populate: IStreamRpcTemplate): string => {
  let request_code = "";
  let funcName = `streamServer${capitalizeFirstLetter(populate.rpcName)}`;
  populate.clientMessageBody.map(
    (key: IStreamRpcTemplate["clientMessageBody"]) => {
      let keyCaptitalised = capitalizeFirstLetter(key.name);
      request_code += `request.set${keyCaptitalised}(recieved.${key.name});\n`;
      request_code += "    ";
    }
  );

  // TODO : make client data sent on ws too

  return `
  import { ${populate.clientMessageType} } from "../proto/recieved_pb";
  import { Request, Response } from "express";
  import { credentials } from "grpc";
  import { ${populate.serviceName}Client } from "../proto/recieved_grpc_pb";
  import ws from "ws";
  
  const ${funcName} = (req: Request, res: Response, wsc: ws): any => {
    if (wsc.OPEN === 1) {
      const request = new ${populate.clientMessageType}();
      const recieved = req.body;
      // console.log(recieved);
      ${request_code}

      const client = new ${populate.serviceName}Client("${populate.uri}", credentials.createInsecure());
      
      // send single message to server
      const stream = client.${populate.rpcName}(request);
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
  module.exports = ${funcName};
`;
};

export function generateServerStreamFunction(rpc: IStreamRpcTemplate) {
  const data: string = template(rpc);
  const dir = __dirname + `/../generated_clients`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, 0o744);
  }
  console.log(`${dir}/${rpc.rpcName}.ts`);
  fs.writeFileSync(`${dir}/${rpc.rpcName}.ts`, data);
}
