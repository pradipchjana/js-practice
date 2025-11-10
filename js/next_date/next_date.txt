
/**
 * Implement the `nextDate` function below. Given a date in the format dd-mm-yyyy, 
 * it should return the next date in the same format.
 * 
 * The input date will always follow the dd-mm-yyyy format. 
 * This means the first two characters will be digits for the day (e.g., 01, 23), 
 * followed by a hyphen (-), the next two characters will be digits for the month (e.g., 01, 12), 
 * followed by another hyphen, and the remaining four characters will be digits for the year 
 * (any year between 0000 and 9999).
 * 
 * In case of an invalid date (with correct format dd-mm-yyyy), for example, "32-02-2025", 
 * return "Invalid Date".
 */

function isLeapYear(year) {
  if (year === 0) {
    return false;
  }
  const isDivisibleBy4 = year % 4 === 0;
  const isNotDivisibleBy100 = year % 100 !== 0;
  const isDivisibleBy400 = year % 400 === 0;
  return (isDivisibleBy4 && isNotDivisibleBy100) || isDivisibleBy400;
}

function addDate(date) {
  let nextDate = parseInt(date) + 1 + "";
  if (nextDate.length === 1) {
    return '0' + nextDate;
  }
  return nextDate;
}

function decideDate(date) {
  const monthOf31Days = '01030507081012';
  const monthOf30Days = '04060911';
  const day = date.slice(0, 2);
  const month = date.slice(3, 5);
  const year = date.slice(6, 10);

  if (monthOf30Days.includes(month) && parseInt(day) === 30) {
    return "01-" + addDate(month) + "-" + year;
  } else if (monthOf30Days.includes(month) && parseInt(day) === 31) {
    return "Invalid Date";
  }

  if (monthOf31Days.includes(month) && parseInt(day) === 31) {
    return "01-" + addDate(month) + "-" + year;
  }

  if (parseInt(month) === 2) {
    if (isLeapYear(parseInt(year)) && parseInt(day) === 29) {
      return "01-" + addDate(month) + "-" + year;
    } else if (!isLeapYear(parseInt(year)) && parseInt(day) === 28) {
      return "01-" + addDate(month) + "-" + year;
    } else if (parseInt(day) >= 29) {
      return "Invalid Date";
    }
  }
  return addDate(day) + "-" + month + "-" + year;
}

function nextDate(date) {
  const day = date.slice(0, 2);
  const month = date.slice(3, 5);
  const year = date.slice(6, 10);
  if (parseInt(day) === 0 || parseInt(day) > 31) {
    return "Invalid Date";
  }
  if (parseInt(month) === 0 || parseInt(month) > 12) {
    return "Invalid Date";
  }
  if (date.includes('31-12')) {
    return "01-01-" + (parseInt(year) + 1 + '').padStart(4, '0');
  }
  if (parseInt(year) > 9999) {
    return "Invalid Date";
  }
  if (parseInt(day) >= 28 && parseInt(day) <= 31) {
    return decideDate(date);
  }
  return addDate(day) + "-" + month + "-" + year;
}

function composeMessage(type, date, result, expected) {
  const isPass = result === expected;
  const checkValue = isPass ? '✅' : '❌';
  const inputSection = "\n[" + date + "]";
  const actualSection = "\nAnswer: " + result;
  const outputSection = " \nExpected: " + expected;
  let message = checkValue + " " + type;
  message += isPass ? "" : inputSection;
  message += isPass ? "" : actualSection;
  message += isPass ? "" : outputSection;
  console.log(message);
}

function testNextDate(type, date, expected) {
  const result = nextDate(date);
  composeMessage(type, date, result, expected);
}

function testAll() {
  testNextDate("Simple increment of a normal day", '15-03-2021', '16-03-2021');
  testNextDate('For 30th January', '30-01-2022 ', '31-01-2022');
  testNextDate('For 31st January', '31-01-2022', '01-02-2022');
  testNextDate('For 01-02-0000', '01-02-0000', '02-02-0000');
  testNextDate('For 28-02-2025', '28-02-2025', '01-03-2025');
  testNextDate('For 28-02-0000', '28-02-0000', '01-03-0000');
  testNextDate('For one digit date or month', '01-01-2022', '02-01-2022');
  testNextDate('Simple last day of february', '28-02-2024', '29-02-2024');
  testNextDate('29th febuary in leap year', '29-02-2024', '01-03-2024');
  testNextDate('29th febuary in normal year', '29-02-2025', "Invalid Date");
  testNextDate('For 31st February', '31-02-2022', "Invalid Date");
  testNextDate('For 31st March', '31-03-2022', '01-04-2022');
  testNextDate('For 32nd March', '32-03-2024', "Invalid Date");
  testNextDate('For 31st April', '31-04-2022', "Invalid Date");
  testNextDate('For 30th April', '30-04-2022', '01-05-2022');
  testNextDate("For last 9 in year", '31-12-1999', '01-01-2000');
  testNextDate("For Checking 28day of leap year", '28-03-2025', '29-03-2025');
  testNextDate('For 30th May', '30-05-2022', '31-05-2022');
  testNextDate('For 31st May', '31-05-2022', '01-06-2022');
  testNextDate('For 30th June', '30-06-2022', '01-07-2022');
  testNextDate('For 31st June', '31-06-2022', "Invalid Date");
  testNextDate('For 30th August', '30-08-2022', '31-08-2022');
  testNextDate('For 31st August', '31-08-2022 ', '01-09-2022');
  testNextDate('For 30th September', '30-09-2022', '01-10-2022');
  testNextDate('For 31st September', '31-09-2022', "Invalid Date");
  testNextDate('For 30th October', '30-10-2022', '31-10-2022');
  testNextDate('For 31st October', '31-10-2022', '01-11-2022');
  testNextDate('For 30th November', '30-11-2022', '01-12-2022');
  testNextDate('For 31st November', '31-11-2022', "Invalid Date");
  testNextDate('For 30th December', '30-12-2022', '31-12-2022');
  testNextDate('For last date of year', '31-12-2024', '01-01-2025');
  testNextDate('For last Day of 19', '31-12-0019', '01-01-0020');
  testNextDate('For month greater than 12', '12-13-1523', "Invalid Date");
  testNextDate('For day 00', '00-01-2025', "Invalid Date");
  testNextDate('For 32nd january', '32-01-2024', "Invalid Date");
  testNextDate('For month 00', '05-00-2026', "Invalid Date");
  testNextDate('28th february leap year', '28-02-2000', '29-02-2000');
  testNextDate('For 30th february', '30-02-2024', "Invalid Date");
}

testAll();