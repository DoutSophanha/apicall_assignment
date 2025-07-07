import express, { Route } from "express"
import router from "./routes/route.js"
const app = express()
const port = 3000

app.use(express.json());
app.use("/api/v1/test/", router);
app.listen(port,()=>{
    console.log(`app runnning on ${port}`)
})