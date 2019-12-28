import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})


/* Using render is better approach because  accessing the DOM.

Angular is not limite to browser only, it also works for webservice worker
These are enviornment you  might not access of the DOM, so in those cases you might get access error.

So it is better practice to use renderer to provide DOM.

*/

export class BetterHighlightDirective implements OnInit {

  

  constructor(private renderer: Renderer2, private elref: ElementRef) { 
     
  }

  ngOnInit () {

    // this.renderer.setStyle(this.elref.nativeElement,'background-color', 'blue')

      //setting Default color on onInit
      this.backgroundColor = this.defaultColor;
  }

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';

  //should set initial value to avoid error.
  //Host binding you can bind any property of the element you setting on.
  //@HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  //Decorator
  //mouseenter is event, it needs to pass an argument
  @HostListener('mouseenter') mouseover(eventData: Event) {

  
    this.backgroundColor = this.highlightColor

    //this.renderer.setStyle(this.elref.nativeElement, 'background-color', 'blue')
    //this.backgroundColor = this.highlightColor;

  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {

    //this.renderer.setStyle(this.elref.nativeElement, 'background-color', 'transparent')
    //this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;

  }

 

}
