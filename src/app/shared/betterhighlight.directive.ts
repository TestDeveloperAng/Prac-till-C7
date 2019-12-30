import { Directive,ElementRef,Renderer2,OnInit,HostListener,HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit {


  constructor(private elementref : ElementRef, private renderer : Renderer2) {}

  @Input() default: string;
  @Input() highlight: string;
  @HostBinding('style.color') color;

  ngOnInit(){
    // this.renderer.setStyle(this.elementref.nativeElement,'color','red');
    this.color = this.default;
  }

  

  @HostListener('mouseenter') mouseEnter(){
    // this.renderer.setStyle(this.elementref.nativeElement,'color','#000');
    this.color = this.highlight;
  }

  @HostListener('mouseleave') mouseLeave(){
    // this.renderer.setStyle(this.elementref.nativeElement,'color','lightgreen');
    this.color = this.default;
  }

}