// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59fbe64a8f7a6a629e750881')
  }, {
    $inc: {
      age: 10
    }, {
      returnOriginal: false
    }.then((result) => {
      console.log(result);
  });

  // db.close();
});
