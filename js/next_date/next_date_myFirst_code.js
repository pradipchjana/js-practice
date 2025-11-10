function isLeapYear(year) {
  if (year === 0) {
    return false;
  }
  const isDivisibleBy4 = year % 4 === 0;
  const isNotDivisibleBy100 = year % 100 !== 0;
  const isDivisibleBy400 = year % 400 === 0;
  return (isDivisibleBy4 && isNotDivisibleBy100) || isDivisibleBy400;
}

function paddedWithZero(date, lengthOfDate) {
  return date.padStart(lengthOfDate, "0");
}

function formatDate(day, month, year) {
  const dayString = paddedWithZero(day + '', 2);
  const monthString = paddedWithZero(month + '', 2);
  const yearString = paddedWithZero(year + '', 4);
  return `${dayString}-${monthString}-${yearString}`;
}

function isLastDayOfYear(day, month) {
  return day === 31 && month === 12;
}

function isLastDayOfMonth(month, year) {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }
  return 30 + ((1 + ((month - 1) % 7)) % 2);
}

function isNotValidDay(day, month, year) {
  return day <= 0 || day > isLastDayOfMonth(month, year);
}

function isValidMonth(month) {
  return month <= 0 || month > 12;
}

function isNotValidDate(day, month, year) {
  return isNotValidDay(day, month, year) || isValidMonth(month) || year > 9999;
}
function nextDate(date) {
  const day = parseInt(date.slice(0, 2));
  const month = parseInt(date.slice(3, 5));
  const year = parseInt(date.slice(6, 10));
  if (isNotValidDate(day, month, year)) {
    return "Invalid Date";
  }

  if (isLastDayOfYear(day, month)) {
    return formatDate(1, 1, year + 1);
  }

  if (day === isLastDayOfMonth(month, year)) {
    return formatDate(1, month + 1, year);
  }
  return formatDate(day + 1, month, year);
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
  testNextDate("A normal day", '15-03-2021', '16-03-2021');
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
  testNextDate('For 30th july', '30-07-2022', '31-07-2022');
  testNextDate('For 31st June', '31-06-2022', "Invalid Date");
  testNextDate('For 30th August', '30-08-2022', '31-08-2022');
  testNextDate('For 31st August', '31-08-2022 ', '01-09-2022');
  testNextDate('For 30th September', '30-09-2022', '01-10-2022');
  testNextDate('For 31st September', '31-09-2022', "Invalid Date");
  testNextDate('For 30th October', '30-10-2022', '31-10-2022');
  testNextDate('For 31st October', '31-10-2022', '01-11-2022');
  testNextDate('For 30th November', '30-11-2022', '01-12-2022');
  testNextDate('For 31st November', '31-11-2022', "Invalid Date");
  testNextDate('For 30th December', '01-12-2022', '02-12-2022');
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