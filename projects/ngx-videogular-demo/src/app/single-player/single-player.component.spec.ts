import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VgOverlayPlayModule, VgCoreModule, VgControlsModule, VgBufferingModule } from 'ngx-videogular';
import { SinglePlayerComponent } from './single-player.component';

describe('SinglePlayerComponent', () => {
  let component: SinglePlayerComponent;
  let fixture: ComponentFixture<SinglePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ VgOverlayPlayModule, VgCoreModule, VgControlsModule, VgBufferingModule ],
      declarations: [ SinglePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
