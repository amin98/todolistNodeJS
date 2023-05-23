const express = require('express');
const mongoose = require('mongoose');
const taskRouter = require('./routes/tasks');
const methodOverride = require('method-override');

// const path = require('path');
const app = express();
// var autoIncrement = require('mongoose-auto-increment');

mongoose.connect('mongodb://localhost/tasklist');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.set(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
// app.use(express.static(path.join(__dirname, 'public')));

// var connection = mongoose.createConnection('mongodb://localhost/tasklist');
// autoIncrement.initialize(connection);

app.get('/', (req, res) => {
  const tasks = [
    {
      name: 'Stretching',
      description:
        'Improve your flexibility and loosen up your muscles with these stretching exercises that target everything from your back to your chest to.',
      priority: 2,
      dueDate: Date.now(),
    },
    {
      name: 'Cooking',
      description:
        'Improve your flexibility and loosen up your muscles with these stretching exercises that target everything from your back to your chest to.',
      priority: 2,
      dueDate: Date.now(),
    },
  ];
  res.render('tasks/index', { tasks: tasks });
});

app.use('/tasks', taskRouter);

app.listen(5000);
