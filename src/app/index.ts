import * as express from "express";
import {Application} from "express";
import {getHelloMessageForRequest} from "./services/hello-message-service";
const app: Application = express();


app.get("/", (req, res) => {
    res.send(getHelloMessageForRequest(req))
});

app.listen(8080, () => {
    console.log("Example app listening on port 8080!");
});