const fs = require('fs');

// const conf = { encoding: 'utf8' };
//
// console.log('Read from file...');
//
// fs.readFile('./hello.txt', conf, (err, content) => {
//   if (err) return console.error(err);
//
//   console.log('Content:');
//   console.log(content);
//   console.log('File has been read');
// });

function mkdir(dirname) {
  return new Promise((done, fail) => {
    fs.mkdir(dirname, err => {
      if (err) {
        fail(err);
      } else {
        done(dirname);
      }
    })
  })
}

function writeFile(filepath, data) {
  return new Promise((done, fail) => {
    fs.writeFile(filepath, data, '', err => {
      if (err) {
        fail(err);
      } else {
        done(`Data saved to file ${filepath}`);
      }
    })
  })
}

mkdir('./data')
.then(path => mkdir(`${path}/file`))
.then(path => writeFile(`${path}/my.txt`, 'Hello!'))
.then(result => console.log(result))
.catch(error => console.log(error))
