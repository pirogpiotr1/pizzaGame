import { Component, OnInit,EventEmitter,ElementRef,HostListener} from '@angular/core';




@Component({
  selector: '[drag-element]',
  template: ''
})
export class DragElementsComponent implements OnInit {
  
  topStart:number=0;
  leftStart:number=0;
  _allowDrag:boolean = true;
  md:boolean; // check move
  class:string;// class of element 

  constructor(public element: ElementRef) { }

  ngOnInit(): void {
    if(this._allowDrag){
      this.element.nativeElement.style.position = 'relative';
      this.element.nativeElement.style.cursor = 'grab';
    }
  }
 

  @HostListener('mousedown', ['$event'])
  onMouseDown(event) {
    console.log('mousedown')
    event.preventDefault();
    if(event.button === 2) // prevents right click drag
    return; 
    
    this.element.nativeElement.style.position = 'relative';
    this.class = event.target.className;
    this.element.nativeElement.className += ' dragged';
    this.md = true;
    this.topStart = event.clientY - this.element.nativeElement.style.top.replace('px','');
    this.leftStart = event.clientX - this.element.nativeElement.style.left.replace('px','');
  }
   

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event) {
    if(this.md && this._allowDrag){
      this.element.nativeElement.style.top = (event.clientY - this.topStart) + 'px';
      this.element.nativeElement.style.left = (event.clientX - this.leftStart) + 'px';
    }
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event) {
    console.log('mouse up');
    const stageRect =  document.getElementById('stage').getBoundingClientRect();
    const {top, left,right, height, bottom, width} = stageRect;
    const {clientX, clientY} = event;
  
    if( 
      clientY > top &&
      clientY < bottom &&
      clientX > left &&
      clientX < right
    )
    {
      console.log('inside')
      //TODO handle it
    }
    
    this.element.nativeElement.style.position = 'initial';
    this.element.nativeElement.style.top = 0;
    this.element.nativeElement.style.left = 0;
    this.element.nativeElement.className = this.class;
    this.md = false;
  
    
    
  }
}



