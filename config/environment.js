const port = process.env.PORT || 4000;
const dbUri = process.env.MONGODB_URI ||
'mongodb://localhost:27017/blogger';


// const dbUri = 'mongodb://localhost/handmades';
// const port = 4000;
module.exports = {
  dbUri: dbUri,
  port: port
};
