
import app from "./app.js";
import { connectDb } from "./db/db.js";


//db
connectDb();

//settings
app.set('port', 3000)


//listen
app.listen(app.get('port'), () => {
    console.log(`Server on port`, app.get('port'))
})