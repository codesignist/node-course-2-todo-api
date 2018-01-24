const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var userid = '5a67a5883c2c4419acb8368d';

User.findById(userid).then((user) => {
    if (!user) {
        return console.log('User not found!');
    }
    console.log('User by ID', user);
}).catch((e) => console.log(e));

// var id = '5a68e511ca5ef22d9461c0c81';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo)
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By ID', todo)
// }).catch((e) => console.log(e));