import App from "./app.js";
import {db} from "./db.js";
db();
App.listen(3000,() => {
    console.log("server on port 3000");
  });
