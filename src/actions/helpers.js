export function getRandomInt(max) {
    const number = Math.floor(Math.random() * Math.floor(max));
    return number;   
}

export function daysInMonth(inputMonth, inputYear) {
  return new Date(inputYear, inputMonth + 1 , 0).getDate();
}

export function createMonthCalendar(inputMonth, inputYear){
  const daysCount = daysInMonth(inputMonth, inputYear);
  let calendarDay = 1;
  let allMonth = [];
  
  do {
      
      let inputDay = new Date(inputYear,inputMonth,calendarDay);
      calendarDay = calendarDay + 1;
      allMonth.push({date:  inputDay , note: ''});

  } while (calendarDay <= daysCount );

  return allMonth;

}
