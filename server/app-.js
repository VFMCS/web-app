const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`)
})

/*const cors = require('cors');
//app.use(cors());

require('dotenv').config()
app.set('view engine', 'ejs')
app.use('/api/', require('./routes/hello'))
app.use('/farmers/', require('./routes/data'))
/*
app.get('/', (req, res) => {
  res.send('hello ab')
})




app.get('/', (req, res) => {
  console.log(hi);
  res.status(200).json('start');
})

app.get('/farmers', cors(), (req, res) => {
  let data = {};

  const { Client } = require('pg')

  const client = new Client({
    host: "34.134.101.113",
    user: "guest",
    port: 5432,
    password: "guestpass",
    database: "vfmcs1"

  })

  client.connect();

  client.query("SELECT username FROM users WHERE is_vendor = true", (err, res) => {
    if (!err) {
      console.log(res.rows);
      data = res.rows;
    }
    else {
      console.log(err.message);
    }

    client.end;
  })

  res.json(data);
})

app.listen(PORT, () => {
  const url = `http://localhost:${PORT}/`
  console.log(`Listening on Port: ${PORT}`)

})


const playersRouter = require("./routes/players");




app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/players", playersRouter);
app.listen(port, function() {
  console.log("Runnning on " + port);
});
module.exports = app;
*/
