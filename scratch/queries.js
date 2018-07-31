const data = require('../db/notes');
const simDB = require('../db/simDB');
const notes = simDB.initialize(data);

// GET Notes with search
notes.filter('lady gaga', (err, list) => {
  if (err) {
    console.error(err);
  }
  console.log(list);
});

// GET Notes by ID
notes.find('1009', (err, item) => {
  if (err) {
    console.error(err);
  }
  if (item) {
    console.log(item);
  } else {
    console.log('not found');
  }
});
  
// PUT (Update) Notes by ID
const updateObj = {
  title: 'A New Title All About Cats and Lady Gaga',
  content: 'Blah blah blah'
};

notes.update(1005, updateObj, (err, item) => {
  if (err) {
    console.error(err);
  }
  if (item) {
    console.log(item);
  } else {
    console.log('not found');
  }
});
const createObj = {
    title: 'A World Without Cats',
    content: 'woof woof woof'
  };

notes.create(createObj, (err, item) => {
    if (err) {
      console.error(err);
    }
});
// notes.delete(1005, createObj, (err, item) => {
//     if (err) {
//       console.error(err);
//     }
// });
notes.update(1005, updateObj, (err, item) => {
  if (err) {
    console.error(err);
  }
  if (item) {
    console.log(item);
  } else {
    console.log('not found');
  } 
});