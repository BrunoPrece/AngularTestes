import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleraComponent } from './galera.component';

describe('GaleraComponent', () => {
  let component: GaleraComponent;
  let fixture: ComponentFixture<GaleraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
