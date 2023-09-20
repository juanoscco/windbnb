import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'guestFormat'
})
export class GuestFormatPipe implements PipeTransform {

  transform(selectedMaxGuests: number): string {
    if (selectedMaxGuests === 0) {
      return 'Add guests';
    } else {
      return selectedMaxGuests === 1 ? '1 guest' : selectedMaxGuests + ' guests';
    }
  }

}
