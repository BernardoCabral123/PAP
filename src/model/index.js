const srcLocation = require("../srcLocation");

const express = require(`express`);
const app = express();
require(`dotenv`).config();

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: false }))

const port = process.env.SERVERPORT || 3030;

console.log(Math.random().toString(36).substring(2, 15)); // gerador de passe

app.use("/",require("./routes/mainRouter"));

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
});