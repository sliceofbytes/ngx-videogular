import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterPlayerComponent } from './master-player.component';

import { VgCoreModule } from 'ngx-videogular';
import { VgControlsModule } from 'ngx-videogular';
import { VgBufferingModule } from 'ngx-videogular';
import { VgPipComponent } from './vg-pip/vg-pip.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        VgCoreModule,
        VgControlsModule,
        VgBufferingModule
    ],
    declarations: [ MasterPlayerComponent, VgPipComponent ]
})
export class MasterPlayerModule {
}
