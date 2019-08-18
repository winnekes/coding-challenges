// definition of a leap year:
// every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, but these centurial years are leap years if they are exactly divisible by 400. for example, the years 1700, 1800, and 1900 are not leap years, but the years 1600 and 2000 are.

let leapYears = [];
let dt = new Date;
let currentYear = dt.getFullYear();

while(leapYears.length < 20) {
  if(currentYear % 4 === 0 && (currentYear % 100 !== 0 ||vcurrentYear % 400 === 0)) {
    leapYears.push(currentYear);
    currentYear++;
 }
 
  else {
    currentYear++;
  }
}

console.log(leapYears);