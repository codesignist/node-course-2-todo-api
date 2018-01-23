//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'TodoApp';

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
   
    const db = client.db(dbName);

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5a6797360bf51ecc2dd91bd8")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then( res => {
    //     console.log(res);
    // });

    db.collection('Users').findOneAndUpdate({
        name: 'yunus'
    }, {
        $set: {
            name: 'yunus'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then( res => {
        console.log(res);
    });

    // db.collection('Users').findOneAndDelete({_id:new ObjectID("5a6780863232bc1bd02d40b0")}).then(res => {
    //     console.log(JSON.stringify(res, undefined, 2));
    // });

    //client.close();
});