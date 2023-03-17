import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLettersOnly]'
})
export class LettersOnlyDirective {

  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const key = event.key;
    const regex = /^[a-z A-Z]*$/;

    if (!regex.test(key)) {
      event.preventDefault();    
    }
  }
}
