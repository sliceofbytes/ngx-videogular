import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SimplePlayerComponent } from './simple-player.component';
import { VgOverlayPlayModule, VgCoreModule, VgControlsModule } from 'ngx-videogular';
describe('SimplePlayerComponent', () => {
    let component: SimplePlayerComponent;
    let fixture: ComponentFixture<SimplePlayerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [VgOverlayPlayModule, VgCoreModule, VgControlsModule],
            declarations: [ SimplePlayerComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SimplePlayerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
