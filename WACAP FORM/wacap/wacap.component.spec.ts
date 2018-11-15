import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WacapComponent } from './wacap.component';

describe('WacapComponent', () => {
  let component: WacapComponent;
  let fixture: ComponentFixture<WacapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WacapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WacapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
