import express from "express"

const app = express();

app.get("/", (request, response) => {
    response.json({message: "Primeira rota get"})
})

app.listen(3333, () => console.log("🐱‍🏍 API is working ✔"));