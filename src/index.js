const TargetClient = require("@adobe/target-nodejs-sdk");
var http = require("http");
const express = require("express");
const app = express();

const logger = (req, res, next) => {
  req.timeReceived = new Date();
  next();
};

app.use(logger);

app.get("/", function (req, res) {
  console.log(`Request received at ${req.timeReceived}`);
  res.write("Hello World!");
  res.send();
});

const server = app.listen(8080, function () {
  console.log("Express listening to port 8080");
});

/*
//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
  */
/*
const options = {
  clientId: "adobeintaritrabhatta",
  organizationId: "7125281458A7712A0A495E95@AdobeOrg",
  decisioningMethods: "on-device",
  events: {
    clientReady: () => {
      console.log("Target client is ready..Start Web server");
      process.exit();
    },
    artifactDownloadSucceeded: (event) => {
      console.log(`Artifact downloaded from ${event.artifactLocation}`);
      console.log(`Artifact payload is available in: ${event.artifactPayload}`);
    }
  }
};

console.log("Creating Target client");
TargetClient.create(options);
*/
