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

    // deleteMany
    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then(result => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then(result => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then(result => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name:'yunus'});

    db.collection('Users').findOneAndDelete({_id:new ObjectID("5a6780863232bc1bd02d40b0")}).then(res => {
        console.log(JSON.stringify(res, undefined, 2));
    });

    //client.close();
});