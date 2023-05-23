const express = require('express');
const Task = require('./../models/task');
const router = express.Router();
const path = require('path');

router.get('/new', (req, res) => {
  res.render('tasks/new', { task: new Task() });
  // res.send('hello world');
});

router.get('/:id', async (req, res) => {});

router.post('/', async (req, res) => {
  const task = new Task({
    name: req.body.name,
    description: req.body.description,
    dueDate: req.body.duedate,
  });
  try {
    task = await task.save();
    res.redirect(`/tasks/${task.id}`);
  } catch (e) {
    res.render('tasks/new', { task: task });
  }
});

module.exports = router;
