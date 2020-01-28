import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoundPlayerComponent } from './bound-player.component';
import { FormsModule } from '@angular/forms';
import { VgCoreModule } from 'ngx-videogular';
import { VgControlsModule } from 'ngx-videogular';
import { VgOverlayPlayModule } from 'ngx-videogular';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule
    ],
    declarations: [ BoundPlayerComponent ]
})
export class BoundPlayerModule {
}
