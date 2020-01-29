import { VgPipComponent } from './vg-pip/vg-pip.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { VgOverlayPlayModule, VgCoreModule, VgControlsModule } from 'ngx-videogular';
import { MasterPlayerComponent } from './master-player.component';

describe('MasterPlayerComponent', () => {
  let component: MasterPlayerComponent;
  let fixture: ComponentFixture<MasterPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ VgOverlayPlayModule, VgCoreModule, VgControlsModule, FormsModule ],
      declarations: [ MasterPlayerComponent , VgPipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
