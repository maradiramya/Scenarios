import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child41',
  templateUrl: './child41.component.html',
  styleUrls: ['./child41.component.css']
})
export class Child41Component implements OnInit {
@Input() public parentdata;
  constructor() { }

  ngOnInit() {
  }

}
