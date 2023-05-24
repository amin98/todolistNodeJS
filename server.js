const express = require('express');
const mongoose = require('mongoose');
const Task = require('./models/task');
const taskRouter = require('./routes/tasks');
const methodOverride = require('method-override');
mongoose.connect('mongodb://localhost/tasklist');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.use(express.static('public'));
// app.use(express.json());
app.set(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  const tasks = [
    {
      name: 'Stretching',
      description:
        'Improve your flexibility and loosen up your muscles with these stretching exercises that target everything from your back to your chest to.',
      priority: 2,
      duedate: Date.now(),
    },
    {
      name: 'Cooking',
      description:
        'Improve your flexibility and loosen up your muscles with these stretching exercises that target everything from your back to your chest to.',
      priority: 2,
      duedate: Date.now(),
    },
  ];
  res.render('tasks/index', { tasks: tasks });
});

app.use('/tasks', taskRouter);

app.listen(5000);
