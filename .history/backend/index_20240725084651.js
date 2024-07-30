import express from "express";
import cors from "cors";
import ImageKit from "imagekit";
import mongoose from "mongoose";
import Chat from "./models/chat.js";
import userchats from "./models/userChats.js";

import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';



const PORT = process.env.PORT || 3000;
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
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

app.get("/api/test", ClerkExpressRequireAuth(), (req, res) => {
  res.send("success!")
})

app.post("/api/chats", ClerkExpressRequireAuth(),  async (req, res) => {
 const {userId, text} = req.body;
 
 try {
  // CREATE A NEW CHAT
  const newChat = new Chat({
    userId:userId,
    history:[{role:"user", parts:[{text}]}]
  })
  
  const savedChat = await newChat.save()

  // CHECK IF USER CHATS EXISTS
  const userChats = await userchats.find({userId: userId})

  // IF DOESNT EXIST CREATE A NEW ONE AND ADD THE CHAT IN THE CHATS ARRAY
  if (!userChats.length) {
    const newUserChats = new userchats({
      userId:userId,
      chats: [
        {
          _id: savedChat._id,
          title: text.substring(0,40),
        }
      ]
    })

    await newUserChats.save();
  } else {
    // IF EXIST PUSH THE CHAT TO THE EXISTING ARRAY
    await userchats.updateOne({
      userId:userId
    }, {
      $push: {
        chats: {
          _id:savedChat._id,
          title:text.substring(0,40)
        }
      }
    })

    res.status(201).json(newChat._id)
  }
 } catch (err) {
  console.log(err)
  res.status(500).json({message:"Error creating chat"})
 }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(401).send('Unauthenticated!');
});

app.listen(PORT, () => {
  connect()
  console.log(`Server is running on ${PORT}`);
});
