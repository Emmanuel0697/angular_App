import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegMotComponent } from './reg-mot.component';

describe('RegMotComponent', () => {
  let component: RegMotComponent;
  let fixture: ComponentFixture<RegMotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegMotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegMotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
