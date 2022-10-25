const express = require("express");
const app = express();

require('dotenv').config()
app.set('view engine', 'ejs')
app.use('/api/', require('./routes/hello'))
/*
app.get('/', (req, res) => {
  res.send('hello ab')
})
*/

const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>{
  const url = `http://localhost:${PORT}/`
  console.log(`Listening on Port: ${PORT}`)

})

/*
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