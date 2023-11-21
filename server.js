import express from "express";
import { handler } from "./build/handler.js"

const app = express();
const PORT = 8080;

app.get("/health-check", (req, res) => {
    res.send({
        message: "server up an running",
        status: 200
    });
})

app.use(handler)

app.listen(PORT, () => {
    console.log("Server Running di Port ", PORT)
})