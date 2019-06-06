const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27088/permissor', {useNewUrlParser: true});

var schema = new mongoose.Schema({ name: 'string', size: 'string' });

var Tank = mongoose.model('Tank', schema);

var small = new Tank({ size: 'small' });
small.save(function (err) {
  if (err) return handleError(err);
  // saved!
});

// or

Tank.create({ size: 'small' }, function (err, small) {
  if (err) return handleError(err);
  // saved!
});

// or, for inserting large batches of documents
Tank.insertMany([{ size: 'small' }], function(err) {

});