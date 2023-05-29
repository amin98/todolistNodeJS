const mongoose = require('mongoose');
const slugify = require('slugify');

// mongoose.connect('mongodb://localhost/tasklist');

mongoose.connect(
  'mongodb+srv://amin131199:pV3e6XxWOr38djb6@clustertasklist.i2xic4x.mongodb.net/?retryWrites=true&w=majority'
);
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  priority: {
    type: Number,
    required: true,
  },
  duedate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
});

taskSchema.pre('validate', function (next) {
  if (this.name) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  next();
});

// taskSchema.pre('validate', function (next) {
//   if (this.name) {
//     this.slug = slugify(this.name, { lower: true, strict: true });
//   }

//   next();
// });

module.exports = mongoose.model('Task', taskSchema);
