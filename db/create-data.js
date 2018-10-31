const mongoose = require('mongoose');
const Handmade = require('../models/handmade');
const User = require('../models/user');
mongoose.connect('mongodb://localhost/handmades');

// Delete existing data first
Handmade.collection.drop();
User.collection.drop();

const userData = [{
  username: 'Doris',
  email: 'd@d.com',
  password: 'd'
}, {
  username: 'Fu ying',
  email: 'f@f.com',
  password: 'f'
}, {
  username: 'Cua cua',
  email: 'c@c.com',
  password: 'c'
}
];

User
  .create(userData)
  .then(users => {
    console.log(`${users.length} users created`);
    Handmade
      .create([
        {
          name: 'Sweets in the forest',
          tools: [ 'crochet (4mm)'],
          materials: ['cotton yarn purple 100g', 'cotton yarn yellow 100g','cotton yarn white 30g','cotton grean 100g','cotton 50g'],
          image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t31.0-8/10924177_1522118381448470_356671844929452791_o.jpg?_nc_cat=102&_nc_ht=scontent-lhr3-1.xx&oh=60a3150ec486e5667922748174d9d83e&oe=5C3DBDD9',
          concept: 'I want it forever. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          addedBy: users[0]
        },
        {
          name: 'Tiny Tiny',
          tools: [ 'crochet (5mm)'],
          materials: [ 'hemp rope 200g', 'cotton yarn white 100g', 'brown leather rope 50cm'],
          image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t31.0-8/11754383_1438118433181799_3642149608190208505_o.jpg?_nc_cat=110&_nc_ht=scontent-lhr3-1.xx&oh=7c07e562005fb4c7c3672a1e6fdc54e3&oe=5C7E52A6',
          concept: 'Useless is the best. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          addedBy: users[1]
        },
        {
          name: 'Elephant Web',
          tools: [ 'crochet (4mm)'],
          materials: [ 'crochrt (4mm)', 'purple lace yarn 150g'],
          image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t31.0-8/11412059_1430092863984356_8925411828553317105_o.jpg?_nc_cat=105&_nc_ht=scontent-lhr3-1.xx&oh=ce026de544151be1755fbf65f9f471d0&oe=5C4D4BEB',
          concept: 'The luxurist bed in the world!!! Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          addedBy: users[1]
        },
        {
          name: 'Let\'s Go Picnic',
          tools: [ 'crochet (7mm)'],
          materials: [ 'Raffia mixed green 250g', 'wooden button x 1'],
          image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t31.0-8/11212616_1425049907821985_5054781303753966539_o.jpg?_nc_cat=100&_nc_ht=scontent-lhr3-1.xx&oh=fa7187946d19a73e01f8709d1cf3aeac&oe=5C835571',
          concept: 'Picnic time!!! Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          addedBy: users[2]
        },
        {
          name: 'Smell My Socks',
          tools: [ 'rod needle (8mm) x 4','wheel needle (10mm)'],
          materials: [ 'merino wool yarn mixed brown color 500g'],
          image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t31.0-8/12029819_1485411005119208_8345006872718668448_o.jpg?_nc_cat=106&_nc_ht=scontent-lhr3-1.xx&oh=6e0b223c068145f9d32a6b50c94f31fb&oe=5C3F646E',
          concept: 'Christmas is coming!!!',
          addedBy: users[0]
        },
        {
          name: 'Halloween',
          tools: [ 'crochet (6mm)'],
          materials: [ 'orange merino wool yarn 300g', 'green merino wool yarn 100g'],
          image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t31.0-8/12194785_1498675603792748_1654328398930223287_o.jpg?_nc_cat=101&_nc_ht=scontent-lhr3-1.xx&oh=78a60dc80920b9fcd2c229969149405c&oe=5C7D977D',
          concept: 'I wear pumpkin!!!',
          addedBy: users[1]
        },

        {
          name: 'Para Totoro',
          tools: [ 'crochet (4mm)'],
          materials: [ 'merino wool dark puprple 20g', 'merino wool spotted bedge 10g'],
          image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t31.0-8/11782324_1446546092339033_8248034298653248867_o.jpg?_nc_cat=108&_nc_ht=scontent-lhr3-1.xx&oh=c48a572da1a2fb0e8228661f29e75485&oe=5C5209A2',
          concept: 'OMG!!!Super Giant',
          addedBy: users[2]
        },
        {
          name: 'Fuji Mountain ',
          tools: [ 'crochet (4mm)'],
          materials: [ 'blue wool yarn 80g','white cotton yarn 40g' ],
          image: 'https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/12185426_1504421616551480_602440101276934445_o.jpg?_nc_cat=107&_nc_ht=scontent-lht6-1.xx&oh=a4ca81143b9595656701c3301dc66601&oe=5C4009E0',
          concept: 'Holiday, I miss you.....',
          addedBy: users[2]
        },
        {
          name: 'A Pair of Purple',
          tools: [ 'rod needle (8mm) x 2'],
          materials: [ 'purple wool yarn 200g'],
          image: 'https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/12473520_1534266820233626_2103542678007377958_o.jpg?_nc_cat=109&_nc_ht=scontent-lht6-1.xx&oh=92f386292c45215ae7d17b5b07c28f22&oe=5C43DFF4',
          concept: 'Ces\'s moi, télégant...',
          addedBy: users[1]
        },
        {
          name: '8 Wonders in the World',
          tools: [ 'crochet (10mm)'],
          materials: [ 'crochet (10mm)', 'grey fabric yarn 100g', 'fabric yarn spotted bedge 50g'],
          image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t31.0-8/12513531_1535786233415018_438026075782027639_o.jpg?_nc_cat=109&_nc_ht=scontent-lhr3-1.xx&oh=4d220f1502521d55c0c9893a1c636826&oe=5C85E250',
          concept: 'OMG!!!Super Giant',
          addedBy: users[0]
        },
        {
          name: 'Early Bird',
          tools: [ 'crochet (2mm)'],
          materials: [ 'purple lace yarn 50g'],
          image: 'https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/11717399_1433380953655547_5951976735750951252_o.jpg?_nc_cat=109&_nc_ht=scontent-lht6-1.xx&oh=bca43cb899b1fdccf0438ec2a90fbe77&oe=5C4A8A22',
          concept: 'Early bird gets the worm',
          addedBy: users[0]
        },
        {
          name: 'Banoffee ',
          tools: [ 'crochet (2mm & 3mm)'],
          materials: [ 'bedige wool yarn 50g','black wool yarn 20g' ],
          image: 'https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/887500_1494996957493946_8173999794712803818_o.jpg?_nc_cat=107&_nc_ht=scontent-lht6-1.xx&oh=e9601b0f9db8fe0f71822ed25b49d8d7&oe=5C4512B1',
          concept: 'Hmmmmm...so yummy.....',
          addedBy: users[1]
        },
        {
          name: 'I got you... ',
          tools: [ 'crochet (5mm)'],
          materials: [ 'brown wool yarn 30g','dark brown wool yarn 10g', 'black ponytailer x 1 ' ],
          image: 'https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/11893974_1454586101535032_8760412356355386936_o.jpg?_nc_cat=111&_nc_ht=scontent-lht6-1.xx&oh=fa4f4efe43a82c5600b60e648b13f97d&oe=5C43039C',
          concept: 'Holiday, I miss you.....',
          addedBy: users[2]
        },
        {
          name: 'Candy House',
          tools: [ 'crochet (7mm)'],
          materials: [ 'cotton yarn pink 100g', 'cotton yarn tiffiny green 150g'],
          image: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/12417639_1543615409298767_3411523855612750212_n.jpg?_nc_cat=104&_nc_ht=scontent-lht6-1.xx&oh=043e642181495a369565099231099bb1&oe=5C4CB207',
          concept: 'Give me all the sweets...',
          addedBy: users[0]
        },
        {
          name: 'Bunny',
          tools: [ 'crochet (2mm)'],
          materials: [ 'white lace yarn 80g'],
          image: 'https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/11741039_1432684390391870_3445971236997689435_o.jpg?_nc_cat=107&_nc_ht=scontent-lht6-1.xx&oh=51d7c07f3c8dd13f01c42681e896d9f3&oe=5C40E854',
          concept: 'Ces\'s moi, télégant...',
          addedBy: users[0]
        },
        {
          name: 'Old Fashion',
          tools: [ 'crochet (5mm)', 'metal chain (gold) 2 meter', 'clasp frame x 1'],
          materials: [ 'Raffia light brown 300g'],
          image: 'https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/11728899_1430089987317977_5008629555564786269_o.jpg?_nc_cat=104&_nc_ht=scontent-lht6-1.xx&oh=d0830ef15f00df1628275b4ec51c1dc6&oe=5C77BC82',
          concept: 'Grandma\'s bag...',
          addedBy: users[1]
        }
      ])
      .then(result => {
        console.log(`Created ${result.length} handmades!`);
        mongoose.connection.close();
      });
  });
