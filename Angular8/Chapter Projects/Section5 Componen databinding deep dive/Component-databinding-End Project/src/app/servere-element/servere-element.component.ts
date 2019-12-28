import { Component, 
  OnInit,
   Input, 
   ViewEncapsulation, 
   OnChanges, 
   SimpleChanges,
   DoCheck,
   AfterContentInit,
   AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-servere-element',
  templateUrl: './servere-element.component.html',
  styleUrls: ['./servere-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // shadow dom
  
})
export class ServereElementComponent implements 
OnInit,
 OnChanges,
 DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked ,
  OnDestroy{

  @Input('srvElement') element: {type: string, name:string, content:string};

  //We can use it before ngAfterViewInit
  @ViewChild('heading', { static: true }) heading: ElementRef;

  @ContentChild('contentPragraph', { static: true }) Pragraph: ElementRef;
  

  constructor() { 

    console.log('constructor called:');
  }

  ngOnChanges(changes: SimpleChanges) {

    console.log('ngOnChanges called:');
    console.log(changes);
  }

  ngOnInit() {
    
    console.log('ngOnInit called:');

    //can not have value  before ngAfterViewInit
    console.log('TextContent:' + this.heading.nativeElement.textContent);

    //can not have value or access before ngAfterContentInit
    console.log('Paragraph content:' + this.Pragraph.nativeElement.textContent);
    
  }

  ngDoCheck() {

    console.log('ngDoCheck called:');
  }

  ngAfterContentInit() {

    console.log('ngAfterContentInit called:');
    //can not have value or access before ngAfterContentInit
    console.log('Paragraph content:' + this.Pragraph.nativeElement.textContent);
  }

  ngAfterContentChecked () {

    console.log('ngAfterContentChecked called:');
  }

  ngAfterViewInit() {

    console.log('ngAfterViewInit called:');
    console.log('TextContent:' + this.heading.nativeElement);
    
  }

  ngAfterViewChecked() {

    console.log('ngAfterViewChecked called:');
  }

  ngOnDestroy() {

    console.log('ngOnDestroy called:');
  }

  
}
