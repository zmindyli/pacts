import admin from 'firebase-admin';
import express from 'express';
import bodyParser from 'body-parser';

// Path to wherever you put your service-account.json
const serviceAccount = require('../service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pacts-8b10f.firebaseio.com",
});

const db = admin.firestore();

const app = express();
const port = 8080;
app.use(bodyParser.json());
app.use(express.json());

app.get('/', (_, res) => res.send('Hello World!'));



app.listen(port, () => console.log(`Example app listening on port ${port}!`));