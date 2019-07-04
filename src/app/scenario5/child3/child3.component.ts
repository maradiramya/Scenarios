import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
@Output() public event = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
logMessage(value) {
  this.event.emit(value);
}
}
