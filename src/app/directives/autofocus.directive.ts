import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[app-autofocus]',
})
export class AutofocusDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.focus();
  }
}
