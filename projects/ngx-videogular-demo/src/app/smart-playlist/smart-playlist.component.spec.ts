import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartPlaylistComponent } from './smart-playlist.component';
import { VgBufferingModule, VgOverlayPlayModule, VgCoreModule, VgControlsModule } from 'ngx-videogular';

describe('SmartPlaylistComponent', () => {
  let component: SmartPlaylistComponent;
  let fixture: ComponentFixture<SmartPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartPlaylistComponent ],
      imports: [ VgBufferingModule, VgOverlayPlayModule, VgCoreModule, VgControlsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
