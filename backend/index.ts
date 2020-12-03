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

type User = {
  name: string;
  password: string;
  groups: Array<Group>;
};

const users = db.collection('Users');

type Group = {
  name: string;
  descr: string;
  url: string;
  admin: number;
  users: number;
};

const groups = db.collection('Groups');

type event = {
  name: string;
  descr: string;
  url: string;
  admin: number;
  users: number;
};

const events = db.collection('Events');

  // Add id field to our Post type
  type UserWithID = User & {
    id: string;
  };
  type GroupWithID = Group & {
    id: string;
  };
  type EventWithID = event & {
    id: string;
  };

  // create a user
app.post('/createSong', function (req, res){
  const user:User = req.body;
  const myDoc = users.doc();
  myDoc.set(user);
  res.send(myDoc.id);
});

//read list of users
app.get('/getUsers', async function (_, res) {
  const sortedUsers = await users.orderBy('name', 'desc').get();
  const userlist: UserWithID[] = [];
  for (let doc of sortedUsers.docs) {
    let user: UserWithID = doc.data() as UserWithID;
    user.id = doc.id;
    userlist.push(user);
  }
  res.send(users);
});


//get list of users in group
//get list of events in groupp
//add event to group
//add user to group
//update event 
//update group
//delete group
//delete event






app.listen(port, () => console.log(`Example app listening on port ${port}!`));