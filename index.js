const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to HNG Stage 1");
});

app.get("/api", (req, res) => {
  const slack_name = req.query.slack_name;
  const track = req.query.track;

  if(!slack_name && !track){
    res.status(400).send("Query parameters not provided");
  }

  res.status(200).send({
    slack_name,
    current_day: new Date().getDay(),
    current_utc_time: new Date().getTime(), // update this to include 1-2 mins window
    track: track,
    github_file_url: 
  })

});

app.all("/*", (req, res, next) => {
  next(new Error("Resource unavailable"));
});

app.listen(PORT, (err) => {
  console.log(err || `Listening on ${PORT}`);
});

module.exports = app;