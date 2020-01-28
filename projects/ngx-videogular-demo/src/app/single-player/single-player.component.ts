import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

// tslint:disable:ban-types
@Component({
    selector: 'app-single-player',
    templateUrl: './single-player.component.html',
    styleUrls: [ './single-player.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SinglePlayerComponent implements OnInit {
    sources: Array<Object>;

    constructor() {
        this.sources = [
            {
                src: 'http://static.videogular.com/assets/videos/videogular.mp4',
                type: 'video/mp4'
            },
            {
                src: 'http://static.videogular.com/assets/videos/videogular.ogg',
                type: 'video/ogg'
            },
            {
                src: 'http://static.videogular.com/assets/videos/videogular.webm',
                type: 'video/webm'
            }
        ];
    }

    ngOnInit() {
    }
}
