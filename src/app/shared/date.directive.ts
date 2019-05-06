import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  // @Input() private date: Date;

  // constructor() { }

  // @HostListener('mouseenter');
  // mouseenter(eventDate: Event) {
  //   console.log(this.date);
  // }

  // @HostListener('mouseleave');
  // mouseleave(eventDate: Event) {
  //   console.log('mouseleave');
  // }

}
