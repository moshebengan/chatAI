import express from "express";

const PORT = process.env.PORT || 3000;
const app = express();
const ImageKit = require('imagekit');

const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY
  });


// console.log(process.env.NODE_ENV)

app.get("/api/upload", (req, res) => {
    result = imagekit.getAuthenticationParameters();
  res.send(result);
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
