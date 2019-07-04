import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child42',
  templateUrl: './child42.component.html',
  styleUrls: ['./child42.component.css']
})
export class Child42Component implements OnInit {
@Output() public eventlog = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
toMessage(value){
  this.eventlog.emit(value);
}
}
