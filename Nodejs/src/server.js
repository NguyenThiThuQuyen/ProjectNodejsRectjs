import express from "express";
import bodyParser from "body-parser";
import viewEngine from './config/viewEngine'
import initWebRoutes from './route/web'
const dotenv = require('dotenv');

dotenv.config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 7070;


app.listen(process.env.PORT, () => {
    console.log("Backend Nodejs is running on the port: " +process.env.PORT)
})