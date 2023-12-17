const { ApifyClient}= require("apify-client");
const {ref } = require('firebase/storage');
const { setMaxoperationretryTime} = require('firebase/storage');
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
    token: 'apify_api_54paiLbnz3WdBLZUkCPhNiEqGIkLjo4FQZFq',
  });

const multer = Multer({
    storage: FirebaseStorage({
      bucketName: 'sensor-proj-b3fdb.appspot.com', 
      directoryPath:'imgs',
      credentials: {
    projectId: "sensor-proj-b3fdb",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCY4tJw8TX5nrw8\nGHgdtuXHuKReFFG7gSXjUfVPp/wA/JpzaYu/QH9H4l1aG7Q1JGN16r7fp9oBowgF\nwdUjYvs2NOCvF5HjohDCYe6lB1isIwbChT32PnIUUNPDsa15WsOMNCLfjiaZh9AW\nNz4p5JekWKdWbZlseAtehskLE6fLcrdxjMyurLY060hXT19a98Rl6ac5j5WbKxNs\nZEOGrIi9VEBzWzBW1KAdkUSfi32EKrGc4NgAaLz5PjbARNDiaY/pngQWaQkizi51\nfDgQzIt+btR9+WM1Z/+ByozANmlDnJw2HnaE1mYTSicPxh/y0dHKxPmmMjxgCK8N\noUEPf1HlAgMBAAECggEAE2VJOdNcG94vtrcK/AgRSCBsV9Qfl1hX0Go8Ix4mWhCx\n3nzwIfQCgcHdwnn7x3clmBbPHswqW+VNNf/EdLAQuyyDqarlkvmjQynN7wlKzlHG\nQITLWtNKwTmM2AmRPrFNWBrgJrjfvEAO3dal0AZEV7D4j74pRenH1Xbnh/x3H9fs\nTr6QFZltJSHtSyvKdKwnBFJO5EnbBHjKEBBNSTcZe/puF6dO1KYkVZyuN/AE5CXk\nN8wcyv4hqFAnB3+jPY+f68ODy4UA3CrgpfrMk65+EXftcL9pOw6H2Rf9IzGQaDI8\n3qE4J9YP5upFr0fQojI4BKy1OaUDZq5wfW3U7FZwmQKBgQDTojMRefb9nPIiUY1/\n6EhMgy5v9DNqa89aDf/437JpDoAHOsfgOGYLN4lVHF01X1qT9iXhyhF+p541V8iV\nQeNOrdUY+Fw295Xs4AbU/OyKbdhZ7G4NBSXEBwoqcM5SYlTFrTOlN2pSDjVioU08\nyw42+1Wt7xeTGPZ5AhRmDk/AHQKBgQC478zM+Ye4YFUjL86N/DFIcDQlkjSd1rnf\najgwV1s3Kn54QxIEMtDtUjKV7naHgWoWgIg/PIY5ofiUSiTPsUdTx9JyP4iEkkyP\nfPtQ+TFiK+wWP2ZXsMcobI3tOUEbAW/VNwT7EWuQFU1nQ/k/dwX9e1TJyKmsjvrG\nNdiycsS+aQKBgC3XkKBUfv/oozpz1+bA9gg80i5GA20l9UBYj/3k1syS64ClZu5W\nySPc386j2jzZbtFmHEaQcsGwpUCAx14ta4N7fBFwmuj9MGijDlfMgaBqstantB71\n4nxX2gffb5HA4wP+xJUhL9KeaUn4DrcAdQ/L2X9Xrw+Z9Km5nZmNuBCxAoGACo3E\nxj3HPQJiWWu1Ae1Ocq/UigBZ+Ff0q4dIRZn2nqNSLFLHiG3N9n0mXeAJ65m7ECWt\noM43arqPkQbaKvAW/fT9UX/GrqoarGWZgfl2k/+lrW9Yy9BOzUPEpbEKwhvG4ggN\nxLYtyT8t96Ktaq3ELb8IC6vj4vEV5pHUF/rst2ECgYBhipZ71RamBcU11j8f2sh5\nzQ+OIQkWb9S0Z8o8WeFVhazsEq4waV20Ba0I/ZE5QBYZlgM8dzT7tBHkWCfwIhFA\ndR3jdmoNXEycF3Cvc0dX2eJXIQVPYgpotZ3Op256Q6uF343KYmpDqGcvWSUpf6ke\nKjuAUFPG982DmBqjFDkdoA==\n-----END PRIVATE KEY-----\n",
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
// const firebaseConfig = {
//   apiKey: "AIzaSyChK5UYG_whbhl5ulftgElEgwOXM2tEp4g",
//   authDomain: "newproj2-fc003.firebaseapp.com",
//   projectId: "newproj2-fc003",
//   storageBucket: "newproj2-fc003.appspot.com",
//   messagingSenderId: "918494578722",
//   appId: "1:918494578722:web:f12433c8f25bed2c53627b",
//   //measurementId: "G-J7ZJCZL7N5"
// };
  
  // Initialize Firebase
const app1 = initializeApp(firebaseConfig);
const storage = getStorage(app1);
//setMaxOperationRetryTime (1000);

app.get("/hi" , (req,res)=>{
    console.log("inside hi");
    res.send("hello");
})


app.post("/upload", multer.single("img"), (req,res)=>{

   // res.write("Uploaded successfuly!");
   console.log("Uploaded successfuly!");
    
    //storage.setMaxoperationretryTime(1000);
    getDownloadURL(ref(storage , 'imgs/' +req.file['originalname']) ).
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
          "maxRequestRetries": 1000,
          "debugLog": false
        };
        
        (async () => {
          // Run the Actor and wait for it to finish
          const run = await client.actor("RA7fg2mqciGjZM7hM").call(input);
      
          const { items } = await client.dataset(run.defaultDatasetId).listItems();
         // res.write("PLEASE WAIT UNTIL REDIRECTED!");
          items.forEach((item) => {

              let len_arr = item.ocrText.length;

              for(let i=0 ; i<len_arr ;i++) {
                

                if(item.ocrText[i].toLowerCase().includes('exp')){

                let str1 = item.ocrText[i].toLowerCase();
                let start =0;
                for(let i=0 ; i<str1.length ; i++){
                  if(str1[i]=='e' && str1[i+1]=='x'  && str1[i+2]=='p'){
                    start=i;
                    break;

                  }
                }
                let str2="";
                for(let i=start ; i<str1.length ; i++){
                  str2+= str1[i];

                }
                const input = {
                    "query":str2,
                    "lang": "en-US"
                };
                
                (async () => {
                    
                    const run = await client.actor("S84ymCuDy3DPGojAH").call(input);
                    console.log('Results from dataset');
                    const { items } = await client.dataset(run.defaultDatasetId).listItems();
                    items.forEach((item) => {
                        console.dir(item);
                        res.redirect(item["file"])
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
});

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
module.exports = app;
