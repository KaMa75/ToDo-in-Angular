import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input() private date: Date;

  private paragraph;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph = this.renderer.createElement('p');
  }

  @HostListener('mouseenter')
  mouseenter(eventDate: Event) {
    const year = this.date.getFullYear();
    const month = this.date.getMonth();
    const day = this.date.getDay();
    const monthNames = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];
    this.paragraph.innerText = `${day} ${monthNames[month]} ${year}`;
    this.paragraph.className = 'task-date';
    this.renderer.appendChild(this.el.nativeElement, this.paragraph);
  }

  @HostListener('mouseleave')
  mouseleave(eventDate: Event) {
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);
  }

}
