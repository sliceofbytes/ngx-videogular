import { VgMediaElement } from './vg-media/vg-media-element';
import { NgModule } from '@angular/core';
import { VgControlsHidden } from './services/vg-controls-hidden';
import { VgFullscreenAPI } from './services/vg-fullscreen-api';
import { VgUtils } from './services/vg-utils';
import { VgAPI } from './services/vg-api';
import { VgMedia } from './vg-media/vg-media';
import { VgCuePoints } from './vg-cue-points/vg-cue-points';
import { VgPlayer } from './vg-player/vg-player';
import { VgStates } from './states/vg-states';
import { VgEvents } from './events/vg-events';


export * from './vg-media/i-media-element';
export * from './vg-media/i-playable';
export * from './vg-media/vg-media-element';
export * from './services/vg-api';
export * from './services/vg-fullscreen-api';
export * from './services/vg-utils';
export * from './services/vg-controls-hidden';
export * from './events/vg-events';
export * from './states/vg-states';



export interface BitrateOption {
  qualityIndex: number;
  width: number;
  height: number;
  bitrate: number;
  mediaType: string;
  label?: string;
}



@NgModule({
  declarations: [VgMedia, VgCuePoints, VgPlayer],
  exports: [VgMedia, VgCuePoints, VgPlayer],
  providers: [VgAPI, VgFullscreenAPI, VgUtils, VgControlsHidden, VgStates, VgEvents]
})
export class VgCoreModule { }
