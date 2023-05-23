const mongoose = require('mongoose');

// const marked = require('marked');
// const { gfmHeadingId } = require('marked-gfm-heading-id');
// const { mangle } = require('marked-mangle');
// const slugify = require('slugify');
// const createDomPurify = require('dompurify');
// const { JSDOM } = require('jsdom');
// const dompurify = createDomPurify(new JSDOM().window);

// const options = {
//   prefix: 'my-prefix-',
// };

// marked.use(gfmHeadingId(options));
// marked.use(mangle());

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  // priority: {
  //   type: Number,
  //   required: true,
  // },
  dueDate: {
    type: Date,
    required: true,
  },
});

// taskSchema.plugin(autoIncrement.plugin, 'Task');

// taskSchema.pre('validate', function (next) {
//   if (this.name) {
//     this.slug = slugify(this.name, { lower: true, strict: true });
//   }

//   next();
// });

module.exports = mongoose.model('Task', taskSchema);
