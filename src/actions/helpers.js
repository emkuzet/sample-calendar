export function getRandomInt(max) {
    const number = Math.floor(Math.random() * Math.floor(max));
    return number;   
}

export function daysInMonth(inputMonth, inputYear) {
  return new Date(inputYear, inputMonth, 0).getDate() + 1;
}

export function createMonthCalendar(inputMonth, inputYear){
  const daysCount = daysInMonth(inputMonth, inputYear);
  let calendarDay = 0;
  let allMonth = [];
  
  do {
      calendarDay = calendarDay + 1;
      let inputDay = calendarDay;
      let dayLength = calendarDay.toString().length;

      if( dayLength  === 1 ){
          inputDay = '0' + inputDay.toString() ;
      }

      allMonth.push({date:  inputDay + '-' + (inputMonth + 1)+  '-2018', note: ''});
  } while (calendarDay < daysCount );
  return allMonth;

}
