import { AbstractControl } from '@angular/forms';
import { convertStringToDate } from '../helpers/convert-date';

export const isCurrentDateGreater = (control: AbstractControl) => {
  const date_release = convertStringToDate(control.value);
  const currentDate = new Date();

  // Hour will not affect the validation
  date_release.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);

  if (date_release >= currentDate) {
    return null; // date release is valid
  } else {
    return { isCurrentDateGreater: true }; // date release is not valid
  }
};
