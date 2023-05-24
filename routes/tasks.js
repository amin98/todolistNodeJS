const express = require('express');
const Task = require('./../models/task');
const router = express.Router();
var app = express();

router.get('/new', (req, res) => {
  res.render('tasks/new', { task: new Task() });
});

router.get('/:id', async (req, res) => {
  // res.send(req.params.id);
  const task = await Task.findById(req.params.id);
  
  if (task == null) res.redirect('/') 
  res.render('tasks/show', { task: task });
});

router.post('/', async (req, res) => {
  // console.log(req.body);

  let task = new Task({
    name: req.body.name,
    description: req.body.description,
    priority: req.body.priority,
    duedate: req.body.duedate,
  });
  try {
    task = await task.save();
    res.redirect(`/tasks/${task.id}`);
  } catch (e) {
    console.log(e);
    res.render('tasks/new', { task: task });
  }
});

module.exports = router;
