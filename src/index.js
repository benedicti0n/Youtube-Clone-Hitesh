// require('dotenv').config({ path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ 
    path: './env'
});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at ${process.env.PORT}`);
        
    });
})
.catch((err) => {
    console.log("MongoDB Connection Failed!!! ", err);
})

/* 
// this approach is for directly connecting db from index.js. Another approach is just calling the fuction in indejx.js where as the function is written in DB/index.js. Later approach is more modular and porfessional
//ifis
;( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", () => {
            console.error("Error", error);
            throw err;
        })

        app.listen(process.env.PORT, () => {
            console.log(`Listening on ${process.env.PORT}`);
        })
    }catch(error){
        console.error("ERROR", error);
        throw err;
    }
})()

*/