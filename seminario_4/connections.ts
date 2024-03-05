const mongoose = require('mongoose');
const uri = 'mongodb://127.0.0.1:27017/Seminario4';
const db= mongoose.connection;
main().catch(err => console.log(err));


    async function main() {
        await mongoose.connect(uri);
      }

//Events, relacionados con la conexión, buscar a web
 db.once('open', _ => {
    console.log('Database is connected to', uri);
 })

 db.on('error', err => {
    console.log(err);
 })