import express from "express";

const PORT = process.env.PORT || 3000;
const app = express();


// console.log(process.env.NODE_ENV)

app.get("/test", (req, res) => {
    res.send("iT WORKS!")
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
