import { Component, OnInit, ElementRef, Input, SimpleChanges, OnDestroy, OnChanges } from '@angular/core';
import { IPlayable, IMediaSubscriptions } from 'ngx-videogular';
import { VgStates, VgEvents, VgMediaElement } from 'ngx-videogular';
import { Subscription, Observable, timer } from 'rxjs';
import * as Vivus from 'vivus';


// tslint:disable:no-string-literal
@Component({
    selector: 'app-svg-viewer',
    templateUrl: './svg-viewer.component.html',
    styleUrls: [ './svg-viewer.component.scss' ]
})
export class SvgViewerComponent extends VgMediaElement implements OnInit, OnDestroy, OnChanges, IPlayable {
    time: any = { current: 0, total: 0, left: 0 };
    buffer: any = { end: 0 };
    canPlay = false;
    canPlayThrough = false;
    isMetadataLoaded = false;
    isWaiting = false;
    isCompleted = false;
    isLive = false;
    state: string = VgStates.VG_PAUSED;
    subscriptions: IMediaSubscriptions;

    @Input() duration: number;
    @Input() src: string;

    vivus: any;
    svgtimer: Observable<number>;
    timerSubs: Subscription;

    constructor(private ref: ElementRef) {
        super();

        this.elem = ref.nativeElement;
        this.id = this.elem.id;
    }

    ngOnInit() {
        this.svgtimer = timer(0, 10);
        this.vivus = new Vivus(
            'container',
            {
                duration: this.duration * 100,
                file: this.src,
                start: 'manual'
            }
        );
    }

    ngOnChanges(changes: SimpleChanges) {

        if (changes['duration'].currentValue !== changes['duration'].previousValue) {
            if (this.timerSubs) {
                this.pause();
            }

            this.time.current = 0;
            this.time.total = this.duration;
            this.buffer.end = this.duration;

            this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_LOADED_METADATA));
            this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_CAN_PLAY));
            this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_CAN_PLAY_THROUGH));
        }
    }

    onComplete() {
        this.state = VgStates.VG_ENDED;
        this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_ENDED));
        this.timerSubs.unsubscribe();
    }

    onProgress() {
        this.time.current += 0.01;
        this.currentTime = this.time.current;
        this.state = VgStates.VG_PLAYING;
        this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_TIME_UPDATE));

        if (this.time.current >= this.time.total) {
            this.onComplete();
        }
    }

    play() {
        if (this.state === VgStates.VG_ENDED) {
            this.time.current = 0;
            this.currentTime = 0;
        }

        this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_PLAY));
        this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_PLAYING));
        this.timerSubs = this.svgtimer.subscribe(this.onProgress.bind(this));

        return null;
    }

    set currentTime(seconds) {
        let vivusFrameProgress: number;

        vivusFrameProgress = (seconds * 100 / this.duration) / 100;

        this.time.current = seconds;
        this.vivus.setFrameProgress(vivusFrameProgress);
        this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_TIME_UPDATE));
    }

    get currentTime() {
        return this.time.current;
    }

    pause() {
        this.unsubscribe();
        this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_PAUSE));
        this.state = VgStates.VG_PAUSED;
    }

    unsubscribe() {
        if (this.timerSubs) {
            this.timerSubs.unsubscribe();
        }
    }

    ngOnDestroy() {
        this.unsubscribe();
    }
}
