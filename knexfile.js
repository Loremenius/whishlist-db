// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault:true,
    connection: {
      filename: './data/wishlist.db3'
    },
    pool:{
      afterCreate:(conn, done)=>{
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    },
    migrations:{
      directory:'./data/migrations'
    },
    seeds:{
      directory:'./data/seeds'
    }
  },
  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
<<<<<<< HEAD
      ssl: { rejectUnauthorized: false},
=======
      ssl: { rejectedUnauthorized: false }
>>>>>>> 8188b282cd44da83be62d901ff5fa2a19a0d2521
    },
    migrations: { directory: "./data/migrations" },
    seeds: { directory: "./data/seeds" }
  },

 
};
