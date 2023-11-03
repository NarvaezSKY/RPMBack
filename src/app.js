import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import Usersrouter from "./routes/User.routes.js";
const App = express();

App.use(express.json());
App.use(morgan("dev"));
App.use(cookieParser());

App.use('/',Usersrouter)

export default App;
