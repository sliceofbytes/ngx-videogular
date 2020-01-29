import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CuePointsPlayerComponent } from './cue-points-player.component';
import { VgOverlayPlayModule, VgCoreModule, VgControlsModule } from 'ngx-videogular';
describe('CuePointsPlayerComponent', () => {
  let component: CuePointsPlayerComponent;
  let fixture: ComponentFixture<CuePointsPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, VgOverlayPlayModule, VgCoreModule, VgControlsModule],
      declarations: [ CuePointsPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuePointsPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
