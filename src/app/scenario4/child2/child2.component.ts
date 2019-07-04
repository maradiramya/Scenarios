import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {

}
toClick(value){
  this.childEvent.emit(value);
}
}
