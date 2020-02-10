import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-backround-image',
  templateUrl: './backround-image.component.html',
  styleUrls: ['./backround-image.component.css']
})
export class BackroundImageComponent implements OnInit {
  @Input() mainImage;

  constructor() { }

  ngOnInit() {}
}
