import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgControlsModule } from 'ngx-videogular';
import { VgCoreModule } from 'ngx-videogular';
import { CustomMediaComponent } from './custom-media.component';
import { FormsModule } from '@angular/forms';
import { SvgViewerComponent } from './svg-viewer/svg-viewer.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        VgCoreModule,
        VgControlsModule
    ],
    declarations: [
        CustomMediaComponent,
        SvgViewerComponent
    ]
})
export class CustomMediaModule {
}
