import {Component, OnInit, Output} from '@angular/core';
import * as  villagesData from './weather-app.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Et harum quidem';
  private villages: any = (villagesData as any).default;
  private villageName = Object.keys(this.villages)[0];
  protected mainImage = this.villages[this.villageName].img;
  protected info = this.villages[this.villageName].info;
  protected socialInfo = this.villages[this.villageName].social_info;
  protected weather = this.villages[this.villageName].weather;

  ngOnInit() {
  }

  getVillageName(name) {
    this.villageName = name;
    this.mainImage = this.villages[name].img;
    this.info = this.villages[name].info;
    this.socialInfo = this.villages[name].social_info;
    this.weather = this.villages[name].weather;
  }
}
