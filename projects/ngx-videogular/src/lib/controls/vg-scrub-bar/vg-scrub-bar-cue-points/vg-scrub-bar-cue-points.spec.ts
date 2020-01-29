import { Subscription } from 'rxjs';
import { VgScrubBarCuePoints } from './vg-scrub-bar-cue-points';
import { VgAPI } from '../../../core/services/vg-api';
import { ElementRef, SimpleChange } from '@angular/core';

// tslint:disable:ban-types
describe('Scrub bar current time', () => {
  let scrubBarCuePoints: VgScrubBarCuePoints;
  let ref: ElementRef;
  let api: VgAPI;

  beforeEach(() => {
    ref = {
      nativeElement: {
        getAttribute: (name) => {
          return name;
        },
        subscriptions: {
          loadedMetadata: {
            subscribe: () => {
            }
          }
        }
      }
    };

    api = new VgAPI();

    scrubBarCuePoints = new VgScrubBarCuePoints(ref, api);
  });

  it('Should create cue points when metadata is loaded', () => {
    const cps: Object = {
      length: 3
    };
    const cp1: TextTrackCue = ({ startTime: 1 } as TextTrackCue);
    const cp2: TextTrackCue = ({ startTime: 5, endTime: 10 } as TextTrackCue);
    const cp3: TextTrackCue = ({ startTime: 15, endTime: 20, text: '{value: \'custom params\'}' } as TextTrackCue);

    cps[0] = cp1;
    cps[1] = cp2;
    cps[2] = cp3;

    scrubBarCuePoints.vgCuePoints = (cps as TextTrackCueList);

    scrubBarCuePoints.target = {
      time: {
        total: 100000
      }
    };

    scrubBarCuePoints.ngOnChanges({ vgCuePoints: ({ currentValue: cps } as SimpleChange) });

    expect((scrubBarCuePoints.vgCuePoints[0] as any).$$style).toEqual({ width: '1%', left: '1%' });
    expect((scrubBarCuePoints.vgCuePoints[1] as any).$$style).toEqual({ width: '5%', left: '5%' });
    expect((scrubBarCuePoints.vgCuePoints[2] as any).$$style).toEqual({ width: '5%', left: '15%' });
  });

  it('Should not calculate style position if there is not duration on media', () => {
    const cps: Object = {
      length: 3
    };
    const cp1: TextTrackCue = ({ startTime: 1 } as TextTrackCue);
    const cp2: TextTrackCue = ({ startTime: 5, endTime: 10 } as TextTrackCue);
    const cp3: TextTrackCue = ({ startTime: 15, endTime: 20, text: '{value: \'custom params\'}' } as TextTrackCue);

    cps[0] = cp1;
    cps[1] = cp2;
    cps[2] = cp3;

    scrubBarCuePoints.vgCuePoints = (cps as TextTrackCueList);

    scrubBarCuePoints.target = {
      time: {
        total: 0
      }
    };

    scrubBarCuePoints.ngOnChanges({ vgCuePoints: ({ currentValue: cps } as SimpleChange) });

    expect((scrubBarCuePoints.vgCuePoints[0] as any).$$style).toEqual({ width: '0', left: '0' });
    expect((scrubBarCuePoints.vgCuePoints[1] as any).$$style).toEqual({ width: '0', left: '0' });
    expect((scrubBarCuePoints.vgCuePoints[2] as any).$$style).toEqual({ width: '0', left: '0' });
  });

  it('Should do nothing if there are no cue points', () => {

    const ucspy = spyOn(scrubBarCuePoints, 'updateCuePoints');
    scrubBarCuePoints.vgCuePoints = null;
    scrubBarCuePoints.onLoadedMetadata();
    scrubBarCuePoints.ngOnChanges({ vgCuePoints: ({ currentValue: null } as SimpleChange) });

    expect(ucspy).not.toHaveBeenCalled();
  });

  it('Should handle after view init event', () => {
    spyOn(scrubBarCuePoints.API, 'getMediaById').and.callFake(
      () => {
        return ref.nativeElement;
      }
    );

    spyOn(ref.nativeElement.subscriptions.loadedMetadata, 'subscribe').and.callThrough();

    scrubBarCuePoints.onPlayerReady();

    expect(ref.nativeElement.subscriptions.loadedMetadata.subscribe).toHaveBeenCalled();
  });
});
