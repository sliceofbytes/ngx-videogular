import { TestBed } from '@angular/core/testing';
import { VgAPI } from './vg-api';
import { IPlayable } from '../vg-media/i-playable';
import { VgStates } from '../states/vg-states';

describe('Videogular Player', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  let api: VgAPI;

  beforeEach(() => {
    api = new VgAPI();
  });

  it('Should get the default media', () => {
    api.medias = {
      main: { id: 'main' },
      secondary: { id: 'secondary' }
    };

    expect(api.getDefaultMedia()).toEqual({ id: 'main' } as IPlayable);
  });

  describe('getMasterMedia', () => {
    it('Should get the master media', () => {
      api.medias = {
        main: { id: 'main' },
        secondary: { id: 'secondary', vgMaster: true }
      };

      expect(api.getMasterMedia()).toEqual({ id: 'secondary', vgMaster: true } as any);
    });
    it('Should get the default media when no master is defined', () => {
      api.medias = {
        main: { id: 'main' },
        secondary: { id: 'secondary' }
      };

      expect(api.getMasterMedia()).toEqual(api.getDefaultMedia());
    });
  });

  it('Should get the api if we do not pass an id', () => {
    api.medias = {
      main: { id: 'main' },
      secondary: { id: 'secondary' }
    };

    expect(api.getMediaById()).toEqual(api as any);
  });

  it('Should get the api if we pass an *', () => {
    api.medias = {
      main: { id: 'main' },
      secondary: { id: 'secondary' }
    };

    expect(api.getMediaById('*')).toEqual(api as any);
  });

  it('Should get a media object if we pass an id', () => {
    api.medias = {
      main: { id: 'main' },
      secondary: { id: 'secondary' }
    };

    expect(api.getMediaById('main')).toEqual({ id: 'main' } as IPlayable);
  });

  it('Should play all medias', () => {
    api.medias = {
      main: { id: 'main', play: () => { } },
      secondary: { id: 'secondary', play: () => { } }
    };

    spyOn((api.medias as any).main, 'play').and.callThrough();
    spyOn((api.medias as any).secondary, 'play').and.callThrough();

    api.play();

    expect((api.medias as any).main.play).toHaveBeenCalled();
    expect((api.medias as any).secondary.play).toHaveBeenCalled();
  });

  it('Should pause all medias', () => {
    api.medias = {
      main: { id: 'main', pause: () => { } },
      secondary: { id: 'secondary', pause: () => { } }
    };

    spyOn((api.medias as any).main, 'pause').and.callThrough();
    spyOn((api.medias as any).secondary, 'pause').and.callThrough();

    api.pause();

    expect((api.medias as any).main.pause).toHaveBeenCalled();
    expect((api.medias as any).secondary.pause).toHaveBeenCalled();
  });

  it('Should get duration', () => {
    spyOn(api, '$$getAllProperties').and.callFake(() => { });
    // @ts-ignore
    const duration = api.duration;

    expect(api.$$getAllProperties).toHaveBeenCalledWith('duration');
  });

  it('Should set a state', () => {
    spyOn(api, '$$setAllProperties').and.callFake(() => { });

    api.state = 'pause';

    expect(api.$$setAllProperties).toHaveBeenCalledWith('state', 'pause');
  });

  it('Should get state', () => {
    spyOn(api, '$$getAllProperties').and.callFake(() => { });
    // @ts-ignore
    const state = api.state;

    expect(api.$$getAllProperties).toHaveBeenCalledWith('state');
  });

  it('Should set a currentTime', () => {
    spyOn(api, '$$setAllProperties').and.callFake(() => { });

    api.currentTime = 50;

    expect(api.$$setAllProperties).toHaveBeenCalledWith('currentTime', 50);
  });

  it('Should get currentTime', () => {
    spyOn(api, '$$getAllProperties').and.callFake(() => { });
    // @ts-ignore
    const currentTime = api.currentTime;

    expect(api.$$getAllProperties).toHaveBeenCalledWith('currentTime');
  });

  it('Should set a volume', () => {
    spyOn(api, '$$setAllProperties').and.callFake(() => { });

    api.volume = 0.5;

    expect(api.$$setAllProperties).toHaveBeenCalledWith('volume', 0.5);
  });

  it('Should get volume', () => {
    spyOn(api, '$$getAllProperties').and.callFake(() => { });
    // @ts-ignore
    const volume = api.volume;

    expect(api.$$getAllProperties).toHaveBeenCalledWith('volume');
  });

  it('Should set a playback rate', () => {
    spyOn(api, '$$setAllProperties').and.callFake(() => { });

    api.playbackRate = 0.5;

    expect(api.$$setAllProperties).toHaveBeenCalledWith('playbackRate', 0.5);
  });

  it('Should get playbackRate', () => {
    spyOn(api, '$$getAllProperties').and.callFake(() => { });
    // @ts-ignore
    const playbackRate = api.playbackRate;

    expect(api.$$getAllProperties).toHaveBeenCalledWith('playbackRate');
  });

  it('Should get canPlay', () => {
    spyOn(api, '$$getAllProperties').and.callFake(() => { });
    // @ts-ignore
    const canPlay = api.canPlay;

    expect(api.$$getAllProperties).toHaveBeenCalledWith('canPlay');
  });

  it('Should get canPlayThrough', () => {
    spyOn(api, '$$getAllProperties').and.callFake(() => { });
    // @ts-ignore
    const canPlayThrough = api.canPlayThrough;

    expect(api.$$getAllProperties).toHaveBeenCalledWith('canPlayThrough');
  });

  it('Should get isMetadataLoaded', () => {
    spyOn(api, '$$getAllProperties').and.callFake(() => { });
    // @ts-ignore
    const isMetadataLoaded = api.isMetadataLoaded;

    expect(api.$$getAllProperties).toHaveBeenCalledWith('isMetadataLoaded');
  });

  it('Should get isWaiting', () => {
    spyOn(api, '$$getAllProperties').and.callFake(() => { });
    // @ts-ignore
    const isWaiting = api.isWaiting;

    expect(api.$$getAllProperties).toHaveBeenCalledWith('isWaiting');
  });

  it('Should get isCompleted', () => {
    spyOn(api, '$$getAllProperties').and.callFake(() => { });
    // @ts-ignore
    const isCompleted = api.isCompleted;

    expect(api.$$getAllProperties).toHaveBeenCalledWith('isCompleted');
  });

  it('Should get time', () => {
    spyOn(api, '$$getAllProperties').and.callFake(() => { });
    // @ts-ignore
    const time = api.time;

    expect(api.$$getAllProperties).toHaveBeenCalledWith('time');
  });

  it('Should get buffer', () => {
    spyOn(api, '$$getAllProperties').and.callFake(() => { });
    // @ts-ignore
    const time = api.buffer;

    expect(api.$$getAllProperties).toHaveBeenCalledWith('buffer');
  });

  it('Should get buffered', () => {
    spyOn(api, '$$getAllProperties').and.callFake(() => { });
    // @ts-ignore
    const buffered = api.buffered;

    expect(api.$$getAllProperties).toHaveBeenCalledWith('buffered');
  });

  it('Should get subscriptions', () => {
    spyOn(api, '$$getAllProperties').and.callFake(() => { });
    // @ts-ignore
    const subscriptions = api.subscriptions;

    expect(api.$$getAllProperties).toHaveBeenCalledWith('subscriptions');
  });

  it('Should seek to a specified time by second', () => {
    api.medias = {
      main: { id: 'main' },
      secondary: { id: 'secondary' }
    };

    spyOn(api, '$$seek').and.callFake(() => { });

    api.seekTime(10);

    expect(api.$$seek).toHaveBeenCalledWith({ id: 'main' } as IPlayable, 10, false);
    expect(api.$$seek).toHaveBeenCalledWith({ id: 'secondary' } as IPlayable, 10, false);
  });

  it('Should seek to a specified time by percentage', () => {
    api.medias = {
      main: { id: 'main' },
      secondary: { id: 'secondary' }
    };

    spyOn(api, '$$seek').and.callFake(() => { });

    api.seekTime(10, true);

    expect(api.$$seek).toHaveBeenCalledWith({ id: 'main' } as IPlayable, 10, true);
    expect(api.$$seek).toHaveBeenCalledWith({ id: 'secondary' } as IPlayable, 10, true);
  });

  it('Should seek media files to a specified time by second', () => {
    const media = {
      currentTime: 0
    };

    api.$$seek(media as IPlayable, 10);

    expect(media.currentTime).toBe(10);
  });

  it('Should seek media files to a specified time by percentage', () => {
    const media = {
      duration: 200,
      currentTime: 0,
      subscriptions: {}
    };

    api.$$seek(media as any, 10, true);

    expect(media.currentTime).toBe(20);
  });

  it('Should get a property from all media objects and return an object', () => {
    api.medias = {
      main: { id: 'main', state: VgStates.VG_PLAYING },
      secondary: { id: 'secondary', state: VgStates.VG_PAUSED }
    };

    const states = api.$$getAllProperties('state');

    expect(states).toEqual(VgStates.VG_PLAYING);
  });

  it('Should get a property from all media objects and return a plain value if there is only one media object', () => {
    api.medias = {
      main: { id: 'main', state: VgStates.VG_PLAYING }
    };

    const states = api.$$getAllProperties('state');

    expect(states).toEqual(VgStates.VG_PLAYING);
  });

  it('Should set a property to all media objects', () => {
    api.medias = {
      main: { id: 'main', state: 'stop' },
      secondary: { id: 'secondary', state: 'stop' }
    };

    api.$$setAllProperties('state', VgStates.VG_PLAYING);

    expect((api.medias as any).main.state).toBe(VgStates.VG_PLAYING);
    expect((api.medias as any).secondary.state).toBe(VgStates.VG_PLAYING);
  });

  it('Should register a new media object', () => {
    const media = { id: 'main' };

    api.registerMedia(media as IPlayable);

   // tslint:disable:no-string-literal
    expect(api.medias['main']).toBe(media);
  });

  it('Should register a new media object', () => {
    const media = { id: 'main' };
    // tslint:disable:no-string-literal
    api['main'] = {};

    api.unregisterMedia(media as IPlayable);

    expect(api.medias['main']).toBe(undefined);
  });
});
