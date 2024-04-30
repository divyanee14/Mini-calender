const dateElement = document.getElementById("date");
const dayElement = document.getElementById("day");
const monthElement = document.getElementById("month");
const yearElement = document.getElementById("year");

const today = new Date();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

dateElement.textContent = (today.getDate()) < 10 ? "0" + today.getDate() : today.getDate();
dayElement.textContent = weekDays[today.getDay()];
monthElement.textContent = allMonths[today.getMonth()];
yearElement.textContent = today.getFullYear();