const express = require("express");
const app = express();
import { Ping } from "./controllers/PingMessage";
import { uploadProto } from "./controllers/uploadProto";
import multer from "multer";
import { CodeGenerator } from "./controllers/CodeGenerator";
import { Request, Response } from "express";
import fs from "fs";
import ws from "ws";
import { unaryUnaryComms } from "./generated_clients/unaryComms";

const port = 8080;

//  Allow body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "/proto");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = "recieved" + ".proto";
    cb(null, uniqueSuffix);
  },
});
const upload = multer({
  dest: "proto/",
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype !== "application/octet-stream") {
      cb(null, false);
      return;
    }
    let requiredDir = "./proto";

    // remove proto folder if exist
    if (fs.existsSync(requiredDir))
      fs.rmdirSync(requiredDir, { recursive: true });

    // create proto folder if not exist
    if (!fs.existsSync(requiredDir)) fs.mkdirSync(requiredDir);

    cb(null, true);
  },
});

const wss = new ws.Server({ host: "localhost", port: 8000 });
let wsClient: any;

app.get("/", Ping);
app.post("/grpc/upload", upload.single("proto_file"), uploadProto);
app.post("/grpc/client_gen", CodeGenerator);

wss.on("connection", (ws) => {
  console.log("A new Client connected");
  wsClient = ws;
});
app.post("/test/unary", (req: Request, res: Response) => {
  unaryUnaryComms(req, res);
  //unaryUnaryCommsCustom(req, res);
});

app.post("/test/serverstream", (req: Request, res: Response) => {
  const { query } = req;
  const func = require(`./generated_clients/${query.func}`);
  if (func) func(req, res);
  else res.json({ msg: "RPC not implemented" });
});

app.post("/test/clientstream", (req: Request, res: Response) => {
  const { query } = req;
  const func = require(`./generated_clients/${query.func}`);
  if (func) func(req, res);
  else res.json({ msg: "RPC not implemented" });
});

app.get("/test/bidirstream", (req: Request, res: Response) => {
  const { query } = req;
  const func = require(`./generated_clients/${query.func}`);
  if (func) func(req, res);
  else res.json({ msg: "RPC not implemented" });
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
