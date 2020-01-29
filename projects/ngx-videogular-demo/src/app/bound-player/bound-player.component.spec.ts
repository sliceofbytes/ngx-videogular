import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { VgOverlayPlayModule, VgCoreModule, VgControlsModule } from 'ngx-videogular';
import { BoundPlayerComponent } from './bound-player.component';

describe('BoundPlayerComponent', () => {
  let component: BoundPlayerComponent;
  let fixture: ComponentFixture<BoundPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoundPlayerComponent ],
      imports: [VgOverlayPlayModule, VgCoreModule, VgControlsModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoundPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
