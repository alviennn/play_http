import express from 'express';
import bodyParser from 'body-parser';
import mobilRoute from "./routes/mobil.js";

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.use("/mobil", mobilRoute);
app.get("/", (req, res) => {
    console.log(["Get Route"]);
    res.send("Selamat Pagii");
});

app.use(bodyParser.json());
app.listen(port, () => 
    console.log(
        `Server berjalan di post : http://localhost:${port}`)
);