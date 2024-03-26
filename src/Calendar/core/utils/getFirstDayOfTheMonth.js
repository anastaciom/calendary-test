const getFirstDayOfTheMonth = (date) =>
  new Date(date.getFullYear(), date.getMonth(), 1).getDay();

export { getFirstDayOfTheMonth };
