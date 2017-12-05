const fs = require('fs');

const hacktivity = {};

// remove `scripts` add `_data`
const hacktivity_dir = __dirname.slice(0, -7) + '_data/hacktivity/';

fs.readdir(hacktivity_dir, (err, files) => {
  for (let file of files) {
    if (file === '__all__.json') continue;
    console.log('reading ', hacktivity_dir + file);
    let data = fs.readFileSync(hacktivity_dir + file);
    let events = JSON.parse(data);
    events.forEach((ev) => {
      let [year, month, day] = ev.created_at.split('-');
      day = Number(day.split('T')[0]);
      if (year === '2017' && month === '12' && ev.type === 'PushEvent') {
        if (!(day in hacktivity)) hacktivity[day] = {};
        if (!(ev.actor.login in hacktivity[day])) hacktivity[day][ev.actor.login] = {};
        // TODO: keep a count of hacktivity and links to repos?
        hacktivity[day][ev.actor.login] = {
          login: ev.actor.login,
          avatar_url: ev.actor.avatar_url
        };
      }
    });
  }
  console.log('hacktivity', JSON.stringify(hacktivity, null, '  '));
  fs.writeFile(hacktivity_dir + '__all__.json', JSON.stringify(hacktivity, null, '  '), (err) => {
    if (err) console.error(err);
    console.log('Hacktivity summary written!');
  });
});
