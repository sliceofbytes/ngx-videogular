import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VgOverlayPlayModule, VgCoreModule, VgControlsModule, VgBufferingModule } from 'ngx-videogular';
import { MultiplePlayersComponent } from './multiple-players.component';

describe('MultiplePlayersComponent', () => {
  let component: MultiplePlayersComponent;
  let fixture: ComponentFixture<MultiplePlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VgOverlayPlayModule, VgCoreModule, VgControlsModule, VgBufferingModule],
      declarations: [ MultiplePlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
