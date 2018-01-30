const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id:'5a706146b0447d16ffc92b25'}).then((todo) => {

});


Todo.findByIdAndRemove('5a706146b0447d16ffc92b25').then((todo) => {
    console.log(todo);
});