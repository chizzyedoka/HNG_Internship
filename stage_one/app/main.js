const express = require("express");
const app = express();
const PORT = 3000;
const today = new Date();
console.log(today);
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
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get("/api", (req, res) => {
  const { track, slack_name } = req.query;
  if (!track || !slack_name) {
    res.send("Give a track and slack_name as parameters");
    return;
  }
  const query = req.query;
  res.status(200).send({
    slack_name,
    current_day: days[dayOfWeekIndex],
    utc_time: today,
    track,
    github_file_url:
      "https://github.com/chizzyedoka/HNG_Internship/blob/master/stage_one/app/main.js",
    github_repo_url: "https://github.com/chizzyedoka/HNG_Internship",
    status_code: "200",
  });
});
