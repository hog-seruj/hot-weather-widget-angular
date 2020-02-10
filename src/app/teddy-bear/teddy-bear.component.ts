import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-teddy-bear',
  templateUrl: './teddy-bear.component.html',
  styleUrls: ['./teddy-bear.component.css']
})
export class TeddyBearComponent implements OnInit {
  @Input() socialInfo;

  constructor() { }

  ngOnInit() {
  }

}
