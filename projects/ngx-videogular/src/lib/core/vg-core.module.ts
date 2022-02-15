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
export * from './vg-media/vg-media';
export * from '../buffering/vg-buffering';
export * from '../controls/vg-controls';
export * from '../controls/vg-fullscreen/vg-fullscreen';
export * from '../controls/vg-mute/vg-mute';
export * from '../controls/vg-volume/vg-volume';
export * from '../controls/vg-play-pause/vg-play-pause';
export * from '../controls/vg-playback-button/vg-playback-button';
export * from '../controls/vg-scrub-bar/vg-scrub-bar';
export * from '../controls/vg-scrub-bar/vg-scrub-bar-buffering-time/vg-scrub-bar-buffering-time';
export * from '../controls/vg-scrub-bar/vg-scrub-bar-cue-points/vg-scrub-bar-cue-points';
export * from '../controls/vg-scrub-bar/vg-scrub-bar-current-time/vg-scrub-bar-current-time';
export * from '../controls/vg-time-display/vg-time-display';
export * from '../controls/vg-track-selector/vg-track-selector';
export * from '../controls/vg-quality-selector/vg-quality-selector';
export * from '../ima-ads/vg-ima-ads';
export * from '../overlay-play/vg-overlay-play';
export * from './vg-cue-points/vg-cue-points';
export * from './vg-player/vg-player';



export interface BitrateOption {
  qualityIndex: number;
  width: number;
  height: number;
  bitrate: number;
  mediaType: string;
  label?: string;
}
export interface AudioTrack {
  enabled: boolean;
  readonly id: string;
  kind: string;
  readonly label: string;
  language: string;
  readonly sourceBuffer: SourceBuffer | null;
}

declare var AudioTrack: {
  prototype: AudioTrack;
  new (): AudioTrack;
};

export interface AudioTrackListEventMap {
  addtrack: TrackEvent;
  change: Event;
  removetrack: TrackEvent;
}

/** Used to represent a list of the audio tracks contained within a given HTML media element, with each track represented by a separate AudioTrack object in the list. */
export interface AudioTrackList extends EventTarget {
  readonly length: number;
  onaddtrack: ((this: AudioTrackList, ev: TrackEvent) => any) | null;
  onchange: ((this: AudioTrackList, ev: Event) => any) | null;
  onremovetrack: ((this: AudioTrackList, ev: TrackEvent) => any) | null;
  getTrackById(id: string): AudioTrack | null;
  item(index: number): AudioTrack;
  addEventListener<K extends keyof AudioTrackListEventMap>(
    type: K,
    listener: (this: AudioTrackList, ev: AudioTrackListEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof AudioTrackListEventMap>(
    type: K,
    listener: (this: AudioTrackList, ev: AudioTrackListEventMap[K]) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;
  [index: number]: AudioTrack;
}

declare var AudioTrackList: {
  prototype: AudioTrackList;
  new (): AudioTrackList;
};

/** A single video track from a <video> element. */
export interface VideoTrack {
  readonly id: string;
  kind: string;
  readonly label: string;
  language: string;
  selected: boolean;
  readonly sourceBuffer: SourceBuffer | null;
}

declare var VideoTrack: {
  prototype: VideoTrack;
  new (): VideoTrack;
};

export interface VideoTrackListEventMap {
  addtrack: TrackEvent;
  change: Event;
  removetrack: TrackEvent;
}

/** Used to represent a list of the video tracks contained within a <video> element, with each track represented by a separate VideoTrack object in the list. */
export interface VideoTrackList extends EventTarget {
  readonly length: number;
  onaddtrack: ((this: VideoTrackList, ev: TrackEvent) => any) | null;
  onchange: ((this: VideoTrackList, ev: Event) => any) | null;
  onremovetrack: ((this: VideoTrackList, ev: TrackEvent) => any) | null;
  readonly selectedIndex: number;
  getTrackById(id: string): VideoTrack | null;
  item(index: number): VideoTrack;
  addEventListener<K extends keyof VideoTrackListEventMap>(
    type: K,
    listener: (this: VideoTrackList, ev: VideoTrackListEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof VideoTrackListEventMap>(
    type: K,
    listener: (this: VideoTrackList, ev: VideoTrackListEventMap[K]) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;
  [index: number]: VideoTrack;
}

declare var VideoTrackList: {
  prototype: VideoTrackList;
  new (): VideoTrackList;
};



@NgModule({
  declarations: [VgMedia, VgCuePoints, VgPlayer],
  exports: [VgMedia, VgCuePoints, VgPlayer],
  providers: [VgAPI, VgFullscreenAPI, VgUtils, VgControlsHidden, VgStates, VgEvents]
})
export class VgCoreModule { }
