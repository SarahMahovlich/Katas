// //takes in a string of numbers and outputs a string date

const talkingCalendar = function(date) {
  date = date.split("/");
  return (`${monthConv(date[1])} ${dayConv(date[2])}, ${date[0]}`);
};


//Month Function - works for month as a number input
const monthConv = function(monthNum) {
  let month = "";
  if (monthNum === "01") {
    month = "January";
  } else if (monthNum === "02") {
    month = "February";
  } else if (monthNum === "03") {
    month = "March";
  } else if (monthNum === "04") {
    month = "April";
  } else if (monthNum === "05") {
    month = "May";
  } else if (monthNum === "06") {
    month = "June";
  } else if (monthNum === "07") {
    month = "July";
  } else if (monthNum === "08") {
    month = "August";
  } else if (monthNum === "09") {
    month = "September";
  } else if (monthNum === "10") {
    month = "October";
  } else if (monthNum === "11") {
    month = "November";
  } else if (monthNum === "12") {
    month = "December";
  } else {
    month = "_";
  }
  return month;
};

// Day Function
const dayConv = function(dayNum) {
  let day = "_";
  dayNum = parseInt(dayNum, 10);
  dayNum = dayNum.toString();
  if (dayNum === "11") {
    day = dayNum + "th";
  } else if (dayNum.charAt(dayNum.length - 1) === "1") {
    day = dayNum + "st";
  } else if (dayNum.charAt(dayNum.length - 1) === "2") {
    day = dayNum + "nd";
  } else if (dayNum.charAt(dayNum.length - 1) === "3") {
    day = dayNum + "rd";
  } else {
    day = dayNum + "th";
  }
  return day;
};

console.log(talkingCalendar("2017/12/03"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

