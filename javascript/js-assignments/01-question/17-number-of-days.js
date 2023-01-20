let month =prompt('Enter the month (Numeric): ')
let year = prompt('Enter the year: ')

function daysInMonth(month, year) {
  alert(new Date(year, month, 0).getDate());
}
daysInMonth(month, year)