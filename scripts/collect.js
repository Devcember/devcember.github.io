const fs = require('fs');

const fetch = require('node-fetch');

// remove `scripts` add `_data`
const data_dir = __dirname.slice(0, -7) + '_data/';

fs.readFile(data_dir + 'celebrants.json', (err, data) => {
  let celebrants = JSON.parse(data);
  for (let i = 0; i < celebrants.length; i++) {
    collectHacktivity(celebrants[i]['github']);
  }
});

function collectHacktivity(username) {
  const url = `https://api.github.com/users/${username}/events/public`;

  fetch(url)
    .then(function(res) {
      return res.text();
    }).then(function(body) {
      let file_path = data_dir + 'hacktivity/' + username + '.json';
      fs.writeFile(file_path, body, (err) => {
        if (err) throw err;
        console.log(`Wrote ${username}'s hacktivity file!`);
      });
    });
};
