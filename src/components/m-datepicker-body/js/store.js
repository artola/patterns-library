import { CurrentMonth, LastMonth, NextMonth } from './cells';

export default class Store {
  constructor(locale, date) {
    this.cells = [];
    this.today = new Date();
    this.locale = locale;
    this.init(date);
  }

  update(date) {
    this.init(date);
  }

  getMonthInformation(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    // exmpale year: 2019: month: 01
    const startDate = new Date(year, month, 1); // Tue 01 2019 00:00:00 GMT+0100
    const endDate = new Date(year, month + 1, 0); // // Thu 31 2019 00:00:00 GMT+0100

    const startDay = startDate.getDay(); // 2 (Tuesday) 0 is Sunday and 6 is Saturday
    const currentMonthTotalDays = endDate.getDate(); // 31 // Day of the current month.

    const prevMonthEndDate = new Date(year, month, 0); // 31. Dec. 2019
    const prevMontLastDay = prevMonthEndDate.getDate(); // ie. 31
    let nextMonthDay = 1;

    prevMonthEndDate.setDate(prevMontLastDay - (startDay - 2)); // rewind as many days to the start of the current day of month

    let prevMonthDay = prevMonthEndDate.getDate();

    const today = new Date();
    const dates = [];
    for (let i = 0; i < 42; i += 1) {
      const dateCell = {};
      const dayToStart = startDay - 1;

      // Careful! We are calculating and working with standard ISO-dates. They might not show the same date as the local one in the given timezone.
      // So for the user we are converting it back to the locale via .toLocaleDateString('de-CH|this.locale', options)
      // Proof! -> new Date(Date.parse('2020-01-22T23:00:00.000Z')).toLocaleDateString('de-CH', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      // ------> "Donnerstag, 23. Januar 2020" (the iso date has it's day on the 22. of January)

      // Previous month dates (if month does not start on Sunday)
      if (i < dayToStart) {
        dateCell.date = new Date(year, month - 1, prevMonthDay);
        dateCell.isToday = false;
        dateCell.cell = new LastMonth(dateCell.date.getDate(), dateCell.date.toISOString(), i, false, false);
        prevMonthDay += 1;

      // Next month dates (if month does not end on Saturday)
      } else if (i > currentMonthTotalDays + (dayToStart - 1)) {
        dateCell.date = new Date(year, month + 1, nextMonthDay);
        dateCell.isToday = false;
        dateCell.cell = new NextMonth(dateCell.date.getDate(), dateCell.date.toISOString(), i, false, false);
        nextMonthDay += 1;

      // Current month dates. */
      } else {
        const currentDate = new Date(year, month, (i - dayToStart) + 1);
        const isToday = currentDate.toDateString() === today.toDateString();
        const isSelected = currentDate.toDateString() === date.toDateString();
        dateCell.date = currentDate;
        dateCell.isToday = isToday;
        dateCell.cell = new CurrentMonth(currentDate.getDate(), currentDate.toISOString(), i, isToday, isSelected);
      }

      dates.push(dateCell);
    }

    return dates;
  }

  init(date) {
    const daysOfMonth = this.getMonthInformation(date);
    this.cells = [];

    // TODO:: Combine legacy with refactored code. Remove the double loop.
    daysOfMonth.forEach((day) => {
      this.cells.push(day.cell);
    });
  }

  setCell(index, cell) {
    this.cells[index] = cell;
  }

  getCell(index) {
    return this.cells[index];
  }

  getCells() {
    return this.cells;
  }
}
