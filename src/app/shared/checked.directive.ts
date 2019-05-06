import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const element = this.el.nativeElement;
    this.renderer.setStyle(element, 'list-style-image', 'url(/assets/checked.png)');
  }

}
