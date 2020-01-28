import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamingPlayerComponent } from './streaming-player.component';

import { VgCoreModule } from 'ngx-videogular';
import { VgControlsModule } from 'ngx-videogular';
import { VgOverlayPlayModule } from 'ngx-videogular';
import { VgBufferingModule } from 'ngx-videogular';
import { VgStreamingModule } from 'ngx-videogular';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule,
        VgStreamingModule
    ],
    declarations: [ StreamingPlayerComponent ]
})
export class StreamingPlayerModule {
}
