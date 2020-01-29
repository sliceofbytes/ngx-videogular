import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { VgControlsModule, VgCoreModule, VgBufferingModule, VgOverlayPlayModule, VgStreamingModule } from 'ngx-videogular';
import { StreamingPlayerComponent } from './streaming-player.component';

describe('StreamingPlayerComponent', () => {
  let component: StreamingPlayerComponent;
  let fixture: ComponentFixture<StreamingPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamingPlayerComponent ],
      imports: [ VgControlsModule, VgCoreModule, VgBufferingModule, VgOverlayPlayModule, VgStreamingModule, FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamingPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
