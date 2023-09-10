const express = require("express");
const app = express();

// Middleware to parse query parameters
app.use(express.urlencoded({ extended: false }));

require("dotenv").config();
const today = new Date();
// const todayFormatted =
//   new Date(today.getTime() + today.getTimezoneOffset() * 60000)
//     .toISOString()
//     .split(".")[0] + "Z";
const todayFormatted =
  new Date(today.getTime() + today.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, -5) + "Z";
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayOfWeekIndex = today.getDay();
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

app.get("/api", (req, res) => {
  const { track, slack_name } = req.query;
  if (!track || !slack_name) {
    res.send("Enter track and slack_name as query parameters");
    return;
  }
  const query = req.query;
  res.status(200).send({
    slack_name,
    current_day: days[dayOfWeekIndex],
    utc_time: todayFormatted,
    track,
    github_file_url:
      "https://github.com/chizzyedoka/HNG_Internship/blob/master/stage_one/app/main.js",
    github_repo_url: "https://github.com/chizzyedoka/HNG_Internship",
    status_code: "200",
    trial: "me",
  });
});
