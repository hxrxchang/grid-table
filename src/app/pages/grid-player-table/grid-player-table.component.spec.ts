import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPlayerTableComponent } from './grid-player-table.component';

describe('GridPlayerTableComponent', () => {
  let component: GridPlayerTableComponent;
  let fixture: ComponentFixture<GridPlayerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPlayerTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPlayerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
