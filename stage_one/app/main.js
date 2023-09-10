const express = require("express");
const moment = require("moment");
const app = express();

// Middleware to parse query parameters
app.use(express.urlencoded({ extended: false }));

require("dotenv").config();

const currentDay = moment().utc().format("dddd");
const currentUtcTime = moment().utcOffset(0).format("YYYY-MM-DDTHH:mm:ss[Z]");
console.log({ currentUtcTime });

const today = new Date();

const utcTime =
  new Date(today.getTime() + today.getTimezoneOffset() * 60000)
    .toISOString()
    .split(".")[0] + "Z";
console.log({ utcTime });

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

const currentDate = new Date();
const year = currentDate.getUTCFullYear();
const month = String(currentDate.getUTCMonth() + 1).padStart(2, "0");
const day = String(currentDate.getUTCDate()).padStart(2, "0");
const hours = String(currentDate.getUTCHours()).padStart(2, "0");
const minutes = String(currentDate.getUTCMinutes()).padStart(2, "0");
const seconds = String(currentDate.getUTCSeconds()).padStart(2, "0");
const utcDami = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
console.log({ utcDami });

app.get("/api", (req, res) => {
  const { track, slack_name } = req.query;
  if (!track || !slack_name) {
    res.send("Enter track and slack_name as query parameters");
    return;
  }
  const query = req.query;
  res.status(200).json({
    slack_name,
    current_day: currentDay,
    utc_time: currentUtcTime,
    track,
    github_file_url:
      "https://github.com/chizzyedoka/HNG_Internship/blob/master/stage_one/app/main.js",
    github_repo_url: "https://github.com/chizzyedoka/HNG_Internship",
    status_code: 200,
  });
});
