function updateTimeAndDay() {
  const now = new Date();

  // Get the current time in UTC
  const utcHours = now.getUTCHours().toString().padStart(2, "0");
  const utcMinutes = now.getUTCMinutes().toString().padStart(2, "0");
  const utcSeconds = now.getUTCSeconds().toString().padStart(2, "0");
  const currentTimeUTC = `${utcHours}:${utcMinutes}:${utcSeconds}`;

  // Get the current day of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = daysOfWeek[now.getUTCDay()];

  // Update the elements with the current time and day
  document.querySelector(
    '[data-testid="currentTimeUTC"]'
  ).textContent = `Current Time in UTC: ${currentTimeUTC}`;
  document.querySelector(
    '[data-testid="currentDay"]'
  ).textContent = `Current Day of the Week: ${currentDay}`;
}

// Initial call to set the time and day
updateTimeAndDay();

// Update the time and day every second
setInterval(updateTimeAndDay, 1000);
