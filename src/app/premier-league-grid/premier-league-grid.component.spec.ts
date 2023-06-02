import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierLeagueGridComponent } from './premier-league-grid.component';

describe('PremierLeagueGridComponent', () => {
  let component: PremierLeagueGridComponent;
  let fixture: ComponentFixture<PremierLeagueGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremierLeagueGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremierLeagueGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
