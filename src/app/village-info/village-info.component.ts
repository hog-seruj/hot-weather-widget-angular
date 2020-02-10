import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-village-info',
  templateUrl: './village-info.component.html',
  styleUrls: ['./village-info.component.css']
})
export class VillageInfoComponent implements OnInit {
  public selectedVillage;
  @Input() private villages;
  @Input() public villageName;

  constructor() { }

  ngOnInit() {
    this.villageName = this.selectedVillage;
  }
}
