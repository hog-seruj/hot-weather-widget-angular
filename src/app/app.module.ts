import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BackroundImageComponent } from './backround-image/backround-image.component';
import { VillageInfoComponent } from './village-info/village-info.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TeddyBearComponent } from './teddy-bear/teddy-bear.component';
import { VillageComponent } from './village-info/village/village.component';

@NgModule({
  declarations: [
    AppComponent,
    BackroundImageComponent,
    VillageInfoComponent,
    TemperatureComponent,
    TeddyBearComponent,
    VillageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
