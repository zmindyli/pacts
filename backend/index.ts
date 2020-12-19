import admin from 'firebase-admin';
import express from 'express';
import bodyParser from 'body-parser';
import { getgroups } from 'process';

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
  admin: string[];
  users: string[];
};

const groups = db.collection('Groups');

type Event = {
  name: string;
  descr: string;
  url: string;
  group: string;
  admin: string[];
  users: string[];
};

const events = db.collection('Events');

  // Add id field to our Post type
  type UserWithID = User & {
    id: string;
  };
  type GroupWithID = Group & {
    id: string;
  };
  type EventWithID = Event & {
    id: string;
  };

  // create a user
app.post('/createUser', function (req, res){
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
  res.send(userlist);
});

//read list of members in a group
app.get('/getMembers/:id', async function (req, res) { //replace group? pass in ID
  const id: string = req.params.id;
  const thisgroup = await groups.doc(id).get();

  const groupdata:GroupWithID = thisgroup.data() as GroupWithID;
  const userlist: UserWithID[] = [];
  for (let userid of groupdata.users) { //user is id number
    let thisuser = await users.doc(userid).get();
    let userdata:UserWithID = thisuser.data() as UserWithID;
    userlist.push(userdata);
  }
  res.send(userlist);
});

//read list of admins in a group
app.get('/getAdmins/:id', async function (req, res) { //replace group? pass in ID
  const id: string = req.params.id;
  const thisgroup = await groups.doc(id).get();
  const groupdata:GroupWithID = thisgroup.data() as GroupWithID;
  const adminlist: UserWithID[] = [];
  for (let userid of groupdata.admin) { //user is id number
    let thisuser = await users.doc(userid).get();
    let userdata:UserWithID = thisuser.data() as UserWithID;
    adminlist.push(userdata);
  }
  res.send(adminlist);
});

//read list of events in a group
app.get('/getEvents/:id', async function (req, res) { 
  const id: string = req.params.id;
  const query = await events.where("group", "==", id).get();
  const eventlist: EventWithID[] = [];
  for (let doc of query.docs) {
    let event: EventWithID = doc.data() as EventWithID;
    event.id = doc.id;
    eventlist.push(event);
  }
  res.send(eventlist);
});


//create event
app.post('/createEvent/:id', function (req, res){ //id is group id
  const id: string = req.params.id; //group id
  const event: Event = req.body;
  event.group = id;
  const myDoc = events.doc();
  myDoc.set(event);
  res.send(myDoc.id);
});

// addusertogroup
app.post('/addUsertoGroup/:userid', async function (req, res) {
  const userid = req.body.userid;
  const groupid = req.body.group; //group id
  const thisgroup = await groups.doc(groupid).get();
  const groupdata:GroupWithID = thisgroup.data() as GroupWithID;
  groupdata.users.push(userid);
  const thisuser = await users.doc(userid).get();
  const userdata:UserWithID = thisuser.data() as UserWithID;
  userdata.groups.push(groupid);
  res.send('ADDED');
});

//Maybe will add...not sure yet
//update event 
//update group

//delete group
//delete event






app.listen(port, () => console.log(`Example app listening on port ${port}!`));