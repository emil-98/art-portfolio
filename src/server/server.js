import express from "express";
import {initializeApp} from "firebase/app"
import {getStorage, ref, getDownloadURL} from "firebase/storage"
import {getAuth} from "firebase/auth"
import firebaseConfig from "./firebaseConfig.js";
import cors from 'cors'

console.log("starting server...");

const PORT = 5000;

const firebaseApp = initializeApp(firebaseConfig)
//const firebaseAuth = getAuth(firebaseApp)
let imgUrl = ""

const firebaseStorage = getStorage()
const selfieRef = ref(firebaseStorage, "SelfPhotos/IMG_3404.jpg")

getDownloadURL(selfieRef)
  .then((url) => {
    imgUrl = url
    console.log(imgUrl)
  })
  .catch((error) => {
    console.log(error)
  })


export const app = express();

app.use(cors())

app.get("/api/artpics", (req, res) => {

})

app.get("/api/selfpics", (req, res) => {
  res.json({"url": imgUrl})
})

app.get("/api/hello", (req,res) => {
  res.json({"message": imgUrl})
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))