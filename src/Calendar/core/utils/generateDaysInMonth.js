const generateDaysOfTheMonth = (date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

export { generateDaysOfTheMonth };
