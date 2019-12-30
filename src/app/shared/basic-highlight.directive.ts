import { Directive,ElementRef } from '@angular/core';

@Directive ({
  selector : '[appBasicHighlight]'
})

export class BasicHighlightDirective{

  constructor(private elementref : ElementRef){}

  ngOnInit(){
    this.elementref.nativeElement.style.backgroundColor = 'lightgreen';
  }

}