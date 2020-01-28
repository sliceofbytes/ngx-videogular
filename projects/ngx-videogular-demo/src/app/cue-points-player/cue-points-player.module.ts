import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuePointsPlayerComponent } from './cue-points-player.component';
import { VgCoreModule } from 'ngx-videogular';
import { VgOverlayPlayModule } from 'ngx-videogular';
import { VgControlsModule } from 'ngx-videogular';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        VgCoreModule,
        VgOverlayPlayModule,
        VgControlsModule
    ],
    declarations: [ CuePointsPlayerComponent ]
})
export class CuePointsPlayerModule {
}
