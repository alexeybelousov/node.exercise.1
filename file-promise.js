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
