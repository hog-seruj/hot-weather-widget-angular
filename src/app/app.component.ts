import {Component, OnInit} from '@angular/core';
import * as  villagesData from './weather-app.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Et harum quidem';
  private villages: any = (villagesData as any).default;
  protected currentVillage;

  ngOnInit() {
    this.currentVillage = this.villages[0]
  }

  getVillageName(name) {
    this.currentVillage = this.villages[name];
  }
}
