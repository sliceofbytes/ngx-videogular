import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VgOverlayPlayModule, VgCoreModule, VgControlsModule, VgImaAdsModule } from 'ngx-videogular';
import { GoogleImaPlayerComponent } from './google-ima-player.component';

describe('GoogleImaPlayerComponent', () => {
  let component: GoogleImaPlayerComponent;
  let fixture: ComponentFixture<GoogleImaPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VgOverlayPlayModule, VgCoreModule, VgControlsModule, VgImaAdsModule],
      declarations: [ GoogleImaPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleImaPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
