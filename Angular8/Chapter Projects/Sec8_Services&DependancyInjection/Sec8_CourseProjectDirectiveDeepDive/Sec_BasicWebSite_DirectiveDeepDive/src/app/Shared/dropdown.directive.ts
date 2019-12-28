
import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})



export class DropDownDirective {

    
    constructor(private elRef: ElementRef) {

    }

    //this will bind class.open property to our isOpen property
    @HostBinding('class.open') isOpen = false;

    //toggle open is function name we can anyname we want
    //out method get called when use click on element
    @HostListener('click') toggleOpen() {

        this.isOpen = !this.isOpen;
    }

    //close drowdown on click anywhere in screen.
    /* @HostListener('document:click', ['$event']) toggleOpen(event: Event) {

        this.isOpen = this.elRef.nativeElement.contains(event.target)? !this.isOpen : false;
     }*/

    

}