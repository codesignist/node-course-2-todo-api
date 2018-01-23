//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const assert = require('assert');

var obj = new ObjectID();
console.log(obj);

// var user = {name: 'yunus', age:33};
// var {name} = user;
// console.log(name);

// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'TodoApp';

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
   
    const db = client.db(dbName);

    // db.collection('Todos').insertOne({
    //     text: 'Some',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'yunus',
    //     age: 33,
    //     location: 'ist'
    // }, (err, res) => {
    //     if (err) {
    //         return console('error', err);
    //     }

    //     console.log(res.ops[0]._id.getTimestamp());
    //     //console.log(JSON.stringify(res.ops[0]._id), undefined, 2);
    // });
   
    client.close();
});

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//     if (err) {
//         return console.log('Unable to connect to MongoDB server');
//     }
//     console.log('Connected to MongoDB server');

//     db.close();
// });