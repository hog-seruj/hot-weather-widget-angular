import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackroundImageComponent } from './backround-image.component';

describe('BackroundImageComponent', () => {
  let component: BackroundImageComponent;
  let fixture: ComponentFixture<BackroundImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackroundImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackroundImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
