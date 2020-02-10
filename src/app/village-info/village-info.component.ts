import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-village-info',
  templateUrl: './village-info.component.html',
  styleUrls: ['./village-info.component.css']
})
export class VillageInfoComponent implements OnInit {
  @Input() private villages;
  @Output() public selectedVillage: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectVillage (name) {
    this.selectedVillage.emit(name);
  }
}
