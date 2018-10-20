import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {
      if(elem.nativeElement.classList.length > 2) {
        elem.nativeElement.style.backgroundColor = "#D4E6F1";
      }
    
   }

}
