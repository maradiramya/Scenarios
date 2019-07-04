import { Component, OnInit, Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-parent31',
  templateUrl: './parent31.component.html',
  styleUrls: ['./parent31.component.css']
})
export class Parent31Component implements OnInit {
@Output() public eventchild = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
message(value){
  this.eventchild.emit(value);
}
}
