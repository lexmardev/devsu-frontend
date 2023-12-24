import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
  standalone: true,
})
export class FormatDatePipe implements PipeTransform {
  transform(value: Date, ...args: unknown[]): string {
    const date = new Date(value);

    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Months start from 0
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
  }
}
