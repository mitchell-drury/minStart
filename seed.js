const db = require('./server/db/db.js');
const {User} = require('./server/db/models/models.js');

const users = [
  {
    email: "Jose@Sabal.com",
    userName: 'NoWayJose',
    password: "jose",
    "isAdmin": true 
  },
  {
    email: "Nick@Plucker.com",
    userName: "NotNicholasNick",
    password: "nick",
    "isAdmin": true 
  },
  {
    email: "Mitchell@Drury.com",
    userName: "MusicalMitchell",
    password: "mitchell",
    "isAdmin": true 
  },
  {
    email: "Anthony@Clausing.com",
    userName: "AnxiousAnthony",
    password: "anthony",
    "isAdmin": true 
  }
]

const seed = () =>
    Promise.all(users.map(user => { 
        return User.create(user)
    }))
    .catch( err => console.log(err))

const main = () => {
  console.log('Syncing db...');
  db.sync({force:true})
    .then(() => {
      console.log('Seeding database...............');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();