// mkdir('./data')
// .then(path => mkdir(`${path}/file`))
// .then(path => writeFile(`${path}/my.txt`, 'Hello!'))
// .then(result => console.log(result))
// .catch(error => console.log(error))

// function mkdir(dirname) {
//   return new Promise((done, fail) => {
//     fs.mkdir(dirname, err => {
//       if (err) {
//         fail(err);
//       } else {
//         done(dirname);
//       }
//     })
//   })
// }
//
// function writeFile(filepath, data) {
//   return new Promise((done, fail) => {
//     fs.writeFile(filepath, data, '', err => {
//       if (err) {
//         fail(err);
//       } else {
//         done(`Data saved to file ${filepath}`);
//       }
//     })
//   })
// }
const fs = require('fs');

function read(filepath) {
  return new Promise((done, fail) => {
    fs.readFile(filepath, { encoding: 'utf8' }, (err, content) => {
      if (err) {
        fail(err);
      } else {
        done(content);
      }
    })
  })
}

function write(file, data) {
  return new Promise((done, fail) => {
    fs.writeFile(file, data, { encoding: 'utf8' }, err => {
      if (err) {
        fail(err);
      } else {
        done(file);
      }
    })
  })
}

module.exports = {
  read,
  write
};
