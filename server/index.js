import express from "express";
import Dotenv from "dotenv";
import Pusher from "pusher";
import cors from 'cors'
Dotenv.config();


export const pusher = new Pusher({
   app_id = "1684987",
   key = "9949f6229dad5d89d720",
   secret = "9798ffc5c219e85cc8ae",
    cluster = "ap2",
  useTLS: true,
});

import ConnectDatabase from "./db/index.js";
import { ChatRoute, MessageRoute } from "./routes/index.js";
import { ErrorResponse } from "./Utills/Responces.js";

ConnectDatabase();
const app = express();
const port = process.env.PORT || 8000;

var corsOptions = {
  origin: ["https://just-chat-it.web.app","http://localhost:3000","https://3000-itsrajatkuma-justchatit-7ne62q3cvdt.ws-us84.gitpod.io"],
  optionsSuccessStatus: 200 // For legacy browser support
}
  
app.use(cors(corsOptions));

app.use(express.json());

// routes
app.use(MessageRoute);
app.use(ChatRoute);


app.all("/*", (req, res) => {
  return ErrorResponse(res, 404, "Route not found");
});

app.listen(port, () => console.log("running on " + port));
