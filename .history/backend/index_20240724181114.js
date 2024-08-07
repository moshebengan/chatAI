import express from "express";
import cors from "cors";
import ImageKit from "imagekit";
import mongoose from "mongoose";


const PORT = process.env.PORT || 3000;
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.json())

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log('Connect to mongoDB')
  } catch (err) {
    console.log(err)
    
  }
}

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

// app.get("/api/test", (req,res) => {
//     console.log(process.env.CLIENT_URL)
// })


app.get("/api/upload", (req, res) => {
    console.log('entered the endpoint')
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
});

app.post("/api/chats", (req, res) => {
 const {text} = req.body;
});

app.listen(PORT, () => {
  connect()
  console.log(`Server is running on ${PORT}`);
});
