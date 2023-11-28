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
    token: 'apify_api_LYREnKRhobR6UIc9hiU2M2q01tpjvq0GZ1aU',
  });

const multer = Multer({
    storage: FirebaseStorage({
      bucketName: 'newproj2-fc003.appspot.com',
      directoryPath:'images',
      credentials: {
    projectId: "newproj2-fc003",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC8bjHzFM3x2OXO\nOSSpgu4TVIbCVHBbNm6Nb2fRl8qe9lrZ7gBWMiXw6LqESlYzBmH4PzvjtlxwMjTR\n6GA/kxvMnmne+KtCUHSI248mZJIy/vWzYIw7IK7LsuXeS1wactDZUXxDVFNDHAcV\nq/inJGbBCCWlI8DdCpodDJmAFhbt6E7EshQog8rHfo8egrvHKBfQJwBhaq2wGDJm\nv+IklETFyx3Nb6eYqMhVwjn6+LW9fjlxEp25BBlbyXu+r/52I5FKClpghqwzwFQz\n5ghGnXNgu99d2/Ik+swCdxOm+Kpg5SM6Vys00gcU8swbLTL7xshcs1IwfmzjaFFM\n77E2A1gBAgMBAAECggEAEfnwTXivYhJ3cApfD0XkqRbwCUONeYIyn08gyCvTQoGN\nrstIIHEF0hsdyieeXB1QhOKhd8qqvHBpvhnNbts9tHJrdsBh9EBhMbpCiJ7hHLja\nn1uHXU+zpU7Co8esOIC6IHVn5bN6gwU+PsjKfsWYAPPiRYQo7t2HUNymG0RgOR99\nxHolipddul/c/xwslj3Zohw+oQp+Ir54HMImWUlDMo3ROcLaTyRuN+Fq+2xYVGD7\nG0eEuOqXyP+ZKpT66MOZ+JfZPF+Hrjk2DhtNIDDbl9H11OZt+wKtcCbvB9dxHUO7\n1AYMoGRBLo8t2P/zC4ihQzT6Ytq2WNm7GTeM6nhHjQKBgQDond2mI3aKAGXuyXJ5\nJrRir0fM4A+RUif9wUsc1MN0GUONWZztaYo1AIrMl8tAiN/StVtfcVXnxnSh9ZqV\n2KwRF2RxT3e+12OPIVvxbNOlm7iII5NLsLXFU/ysmmmAaOnuCGAUgYaRfEa1LXIx\n2NmujVU04YG2Eoe5NHZB6i5aRQKBgQDPXz7i/Zfhb+OonVMtXpA7JNP+LDHsQb5C\nIOKXfyTTQtGKeKGJ9gLu1TIRr9BOqBo1ywOTTjVi/YLdz6t5MByflavdXiB68wj+\noOGZqTJ6nNqS0ahvsT2rFXCzhgZD6Ma+LV/E8gHeE2lNKd3tzPwyjtFcgRHFr8zz\n5aJ8txcgjQKBgGcwIHLiqGLvakhS9ITptntQZflsK3u7hiH67OcNOub1jhHV/tcS\nSkzYwLmhXHh0P1WpPa9JB2KZloOB/+EZDLtINTZOmj/+LBwCIFcof3qnaWR644xg\nB0JRz3SByus7nwoIjRaLnrZK+tLEJjQWjfnwmCutHW03Kx3tN8hlqcpBAoGBAK9G\nQOAZGiOor9LXzvL9B4mF8kzWTAf19XrtUrhb9eM+id+xYFA8iHQX7O74HGgvO6AW\nDNqX8xXNUqxql/Ohj7/vAMnlgiyJeSPHFYgMc6chJrmLzgNB2u7c+1oxwN/rQviB\nX34WUy/CVnGrHnKdnNia0CiQy1W85s2LXZBuLHUNAoGBAL8U979jM7jwkgYaNnrw\n2g4rXK2qltwx86U1N4NsS+AtMRQpZU9MExB+B5RNWtqHYq3bYJr3wHevB5rdTd2l\nVAjhebEVG/CC4veNcljVscYqU7vuAbJvzHRMAgeu8SH9WyDAaMq0mpkbWeSQOOfG\nfu/E5q8TyWvYFEAmrR0lCwV6\n-----END PRIVATE KEY-----\n",
    clientEmail: "firebase-adminsdk-3t5hn@newproj2-fc003.iam.gserviceaccount.com",
    
      }
    })
})
// const firebaseConfig = {
//     apiKey: "AIzaSyD2RpxeHhLOMaqzS8-Vo5WuUqLtUFYilUE",
//     authDomain: "sensor-proj-b3fdb.firebaseapp.com",
//     projectId: "sensor-proj-b3fdb",
//     storageBucket: "sensor-proj-b3fdb.appspot.com",
//     messagingSenderId: "603026668192",
//     appId: "1:603026668192:web:f6eceb438b31e2b60567c5"
//   };
const firebaseConfig = {
  apiKey: "AIzaSyChK5UYG_whbhl5ulftgElEgwOXM2tEp4g",
  authDomain: "newproj2-fc003.firebaseapp.com",
  projectId: "newproj2-fc003",
  storageBucket: "newproj2-fc003.appspot.com",
  messagingSenderId: "918494578722",
  appId: "1:918494578722:web:f12433c8f25bed2c53627b",
  //measurementId: "G-J7ZJCZL7N5"
};
  
  // Initialize Firebase
const app1 = initializeApp(firebaseConfig);
const storage = getStorage(app1);
//setMaxOperationRetryTime (1000);


app.post("/upload", multer.single("img"), (req,res)=>{

   // res.write("Uploaded successfuly!");
   console.log("Uploaded successfuly!");
    
    //storage.setMaxoperationretryTime(1000);
    getDownloadURL(ref(storage , 'images/' +req.file['originalname']) ).
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
         // res.write("PLEASE WAIT UNTIL REDIRECTED!");
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

