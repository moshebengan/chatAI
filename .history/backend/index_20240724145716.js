import express from "express";

const PORT = process.env.PORT || 3000;
const app = express();


console.log(process.env.NOVE_ENV)

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
