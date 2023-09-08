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

app.get("/", (req, res) => {
  res.status(200).send({
    slack_name: "Chisom Edoka",
    current_day: days[dayOfWeekIndex],
    utc_time: today,
    track: "backend",
    github_file_url:
      "https://github.com/chizzyedoka/HNG_Internship/blob/master/stage_one/main.js",
    github_repo_url: "https://github.com/chizzyedoka/HNG_Internship",
    status_code: "200",
  });
});
