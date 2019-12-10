const low = require("lowdb");
const faker = require("faker");
const helper = require("./helper");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);
// Set some defaults
db.defaults({ channels: [] }).write();

db.get("channels")
  .remove()
  .write();

for (let i = 1; i <= 100; i++) {
  db.get("channels")
    .push({
      id: helper.mongoObjectId(),
      number: faker.random.number(),
      image: faker.image.avatar(),
      name: faker.name.title(),
      epg: {
        name: faker.name.title(),
        description: faker.name.title(),
        end: faker.date.past(10),
        start: faker.date.past(10),
        image: faker.image.avatar()
      }
    })
    .write();
}
