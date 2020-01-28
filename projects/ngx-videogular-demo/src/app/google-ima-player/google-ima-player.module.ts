import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleImaPlayerComponent } from './google-ima-player.component';
import { VgCoreModule } from 'ngx-videogular';
import { VgControlsModule } from 'ngx-videogular';
import { VgOverlayPlayModule } from 'ngx-videogular';
import { VgImaAdsModule } from 'ngx-videogular';

@NgModule({
    imports: [
        CommonModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgImaAdsModule
    ],
    declarations: [ GoogleImaPlayerComponent ]
})
export class GoogleImaPlayerModule {
}
