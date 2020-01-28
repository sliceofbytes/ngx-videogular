import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VgCoreModule } from 'ngx-videogular';
import { VgControlsModule } from 'ngx-videogular';
import { SmartPlaylistComponent } from './smart-playlist.component';
import { VgBufferingModule } from 'ngx-videogular';

@NgModule({
    imports: [
        CommonModule,
        VgCoreModule,
        VgControlsModule,
        VgBufferingModule
    ],
    declarations: [ SmartPlaylistComponent ]
})
export class SmartPlaylistModule {
}
