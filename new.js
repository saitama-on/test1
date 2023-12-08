const { ApifyClient}= require("apify-client");
const {ref } = require('firebase/storage');
const {getStorage } = require('firebase/storage');
const {getDownloadURL } = require('firebase/storage');
const FirebaseStorage = require('multer-firebase-storage');
const {initializeApp} = require('firebase/app');
const Multer = require('multer');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const client = new ApifyClient({
    token: 'apify_api_LYREnKRhobR6UIc9hiU2M2q01tpjvq0GZ1aU',
  });

const multer = Multer({
    storage: FirebaseStorage({
      bucketName: 'sensor-proj-b3fdb.appspot.com',
      directoryPath:'images',
      credentials: {
    projectId: "sensor-proj-b3fdb",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDGQuqTeceRIEMB\n/wKU7ktnYKTAZlVgJBYA+rgk52ct6OcRftUnMfyC7d0xTAfvbPHY3ZAL/b4c03Lm\noJh8ROd+6f3HmZNJ1df2VIxao0DSHitYz5hWM1Toas24DK87wVuOf4ugzJOap2HZ\ntvHk6+QenPl9DIa/OI15s022HYLtWZljnLtmpm7NqvaMpFqRw+DZP8h+fxEc+mfE\nUwT5f9WU/BNgLacR6E5sjfQhIcfM1GnBHKqUB3yOOUG3+xE1fyQhTD3AKuHryPZ7\nQr/2ejAufwKtcV5WrS6U8XD6TENJLd9H3HGzfNp04YzLN/UggvwmFLxZtHBOg3jy\n/1C3/bP3AgMBAAECggEAPECn44vV/5/rXVbvpO1Kky9GwoYXGjG9Uizf+68rp0Mp\nviJqiw/g6rV5THsLylK0qTCkj1BdD4ufVsGltdaG+AYKrzdYEM9hY6ZMRVtp3rF2\ngPYOGNxeyId036NTOfjIZ2URvRuPHCgUT8MOfoDGAhu4oq1E4iZAsKSyUE9ls9XG\nJtmk+s567NqMbXlETxwDLaERhwPJa4hrVzaJea3r5tcrbf30FRb6MI1AjTie/A40\nIYGsI5xgjHKoGjVH7BQZCxNRBIf9Y5gTthm4pMrSoQ5MNEln6wxrr4i/5HxJEr+u\nSwoiWv5oczDK7NZPnvq8bvA7/ZSRPqB9G8jvjrlRUQKBgQD9qYpiE2yKgINRSqSz\nKGc3zwVRj4kJVHm4UBCybbWHFawQbd3sm9FxCOYGyYmzEOIiuAW9bCVnOtSoQ3kR\nNDIjm2hji1XJ8vQ/sbNDZni6cWC83W4/NLWjxDS2nkY+ZFrL4xR+gYPf3UGfP2DN\ndj7IoRXaOTmvSQJIoBvMlWG6+QKBgQDIFqt1yhnM6rfHf7LYXXfucJOMkIYFUvlK\nNo0/otF/PYClJAk9W/Hh1GmjdH+/OZxwwtyGfhV4CqqHAyY2bzJUbWmkQAB5hXdX\n6iATvKb3i9Od/edUfnFBAxdMy2iFGwEnidg3nKU/GxKd5hs+/Xy5lYQ2QR6sxmXu\nI28CUiEybwKBgD9JcHQ9wmPf4mOCywrD9tSuuvX5aMhCIkhA+Zl608KLPq2uq6Lf\n0WZxQOrKl6dse+8LmKsE82QJAoukoe0P576IhIfpeJL1IclObZpQU6i4ptkYKext\nGzBrwHcbkAz6/shFtJRHff55dmjj6CP673kg75HNmz3HamFySN1HG+YJAoGAeK2r\nlixhqUT7uPhc/sBJAGenpkTYgEeOEWObh4EFB9ApUfDNHdPhrEn3uN0f2068+wmc\nBgXvnuoX9bxBhN1GJsOizqzHXIPR+hU8aYsDzRPpe0XTCxQD7KkXmXqpPHaQGK+7\n17bDt671aISLdE9gtXHnPu3BuYUjnyCB6I1udkMCgYEAowoCI8fVnVrY2UNBzyKy\nxJFIVq7P5hwYL6IjRNILmohkzWOp3Ndy8Y67ofjPIkeLHTvDZzoFtI/rzYiAuLf3\n8vpBaGbLKpgGapgWMoVcMhV59jAwafo6Yzn0U8hTGxBs/P7FZ/TjaIuVJfektUa4\nQcRyZJcKnEm4XTP7G/WfGQ4=\n-----END PRIVATE KEY-----\n",
    clientEmail: "firebase-adminsdk-osb4y@sensor-proj-b3fdb.iam.gserviceaccount.com",
      }
    })
})
const firebaseConfig = {
    apiKey: "AIzaSyD2RpxeHhLOMaqzS8-Vo5WuUqLtUFYilUE",
    authDomain: "sensor-proj-b3fdb.firebaseapp.com",
    projectId: "sensor-proj-b3fdb",
    storageBucket: "sensor-proj-b3fdb.appspot.com",
    messagingSenderId: "603026668192",
    appId: "1:603026668192:web:f6eceb438b31e2b60567c5"
  };

  // Initialize Firebase
const app1 = initializeApp(firebaseConfig);
const storage = getStorage(app1);

app.post("/upload", multer.single("img"), (req,res)=>{

    console.log("Uploaded successfuly!");

    getDownloadURL(ref(storage , 'images/' +req.file['originalname'])).
    then((url)=>{
      const input = {
          "startUrls": [
              {
                  "url":url,
              }
            ],
            "proxy": {
              "useApifyProxy": true
          },
          "maxRequestRetries": 10,
          "debugLog": false
        };

        (async () => {
          // Run the Actor and wait for it to finish
          const run = await client.actor("RA7fg2mqciGjZM7hM").call(input);

          const { items } = await client.dataset(run.defaultDatasetId).listItems();
          items.forEach((item) => {

              let len_arr = item.ocrText.length;

              for(let i=0 ; i<len_arr ;i++) {


                if(item.ocrText[i].toLowerCase().includes('exp')){

                let str1 = item.ocrText[i].toLowerCase();
                const input = {
                    "query":str1,
                    "lang": "en-US"
                };

                (async () => {

                    const run = await client.actor("S84ymCuDy3DPGojAH").call(input);
                    console.log('Results from dataset');
                    const { items } = await client.dataset(run.defaultDatasetId).listItems();
                    items.forEach((item) => {
                        console.dir(item);
                        res.redirect(item["file"]);
                    });
                })();

                 //console.log(str1);



                }
              }
          });
        })();


    })


})

// app.post('/test' , (req,res)=>{
//     //res.type('url')
//     let a="";
//     const input = {
//         "query":req.body["text"],
//         "lang": "en-US"
//     };

//     (async () => {

//         const run = await client.actor("S84ymCuDy3DPGojAH").call(input);
//         console.log('Results from dataset');
//         const { items } = await client.dataset(run.defaultDatasetId).listItems();
//         items.forEach((item) => {
//             console.dir(item);
//             res.redirect(item["file"])
//         });
//     })();

// });

const server = app.listen(port ,()=>{
    console.log(`listining on ${port}`);
