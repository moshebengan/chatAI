import express from "express";
import cors from "cors";
import ImageKit from "imagekit";
import mongoose from "mongoose";

import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import UserChats from "./models/userChats.js";
import Chat from "./models/chat.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connect to mongoDB");
  } catch (err) {
    console.log(err);
  }
};

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

// app.get("/api/test", (req,res) => {
//     console.log(process.env.CLIENT_URL)
// })

app.get("/api/upload", (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
});

// app.get("/api/test", ClerkExpressRequireAuth(), (req, res) => {
//   const userId = req.auth.userId
//   console.log(userId)
//   res.send("success!")
// })

app.post("/api/chats", ClerkExpressRequireAuth(), async (req, res) => {
  const { text } = req.body;
  const userId = req.auth.userId;

  try {
    // CREATE A NEW CHAT
    const newChat = new Chat({
      userId: userId,
      history: [{ role: "user", parts: [{ text }] }],
    });

    const savedChat = await newChat.save();

    // CHECK IF USER CHATS EXISTS
    const userChats = await UserChats.find({ userId: userId });

    // IF DOESNT EXIST CREATE A NEW ONE AND ADD THE CHAT IN THE CHATS ARRAY
    if (!userChats.length) {
      const newUserChats = new UserChats({
        userId: userId,
        chats: [
          {
            _id: savedChat._id,
            title: text.substring(0, 40),
          },
        ],
      });

      await newUserChats.save();
    } else {
      // IF EXIST PUSH THE CHAT TO THE EXISTING ARRAY
      await UserChats.updateOne(
        {
          userId: userId,
        },
        {
          $push: {
            chats: {
              _id: savedChat._id,
              title: text.substring(0, 40),
            },
          },
        }
      );

      res.status(201).send(newChat._id);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating chat" });
  }
});

app.get("/api/userchats", ClerkExpressRequireAuth(), async (req, res) => {
  const userId = req.auth.userId;

  try {
    const userchats = await UserChats.findOne({userId})
    if (userchats)

    res.status(200).json(userchats.chats)
  } catch (err) {
    console.log(err)
    res.status(500).json({message:"Error fetching userchats!"})
  }
})

app.get("/api/chats/:id", ClerkExpressRequireAuth(), async (req, res) => {
  const userId = req.auth.userId;

  try {
    const chat = await Chat.findOne({_id: req.params.id, userId})

    res.status(200).json(chat)
  } catch (err) {
    console.log(err)
    res.status(500).json({message:"Error fetching chat!"})
  }
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(401).send("Unauthenticated!");
});

app.listen(PORT, () => {
  connect();
  console.log(`Server is running on ${PORT}`);
});
