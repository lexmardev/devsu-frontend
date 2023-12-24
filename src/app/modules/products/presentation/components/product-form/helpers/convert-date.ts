export const convertStringToDate = (date: string): Date => {
  let newDate = new Date(0, 0, 0);

  try {
    const dateParts = date.split('/');

    const day = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1;
    const year = parseInt(dateParts[2]);

    newDate = new Date(year, month, day);
  } catch (error) {
    // TODO: Send error log to dev api
  }

  return newDate;
};

export const addOneYear = (date: string): Date => {
  const dateParts = date.split('/');

  const day = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1;
  const year = parseInt(dateParts[2]);

  const newDate = new Date(year, month, day);

  newDate.setFullYear(year + 1);

  return newDate;
};
