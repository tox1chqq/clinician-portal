import "./database/connection.js";
import { config } from "./config /config";
const express = require("express");
const patientsRouter = require("./routers/patients.routers");

export default class Server {
  constructor() {
    this.app = express();
    this.settings();
    this.applyRouters();
  }

  startApp() {
    this.app.listen(config.PORT, () => {
      console.log("The server is listening on port: ", config.PORT);
    });
  }

  settings() {
    this.app.use(express.json());
  }

  applyRouters() {
    this.app.use("/", patientsRouter);
  }
}
