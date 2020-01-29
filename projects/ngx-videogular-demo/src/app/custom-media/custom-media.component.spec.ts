import { SvgViewerComponent } from './svg-viewer/svg-viewer.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VgControlsModule, VgCoreModule } from 'ngx-videogular';
import { CustomMediaComponent } from './custom-media.component';

describe('CustomMediaComponent', () => {
  let component: CustomMediaComponent;
  let fixture: ComponentFixture<CustomMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomMediaComponent, SvgViewerComponent ],
      imports: [VgControlsModule, VgCoreModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
