export interface MSMediaKeyNeededEvent extends Event {
    readonly initData: Uint8Array | null;
  }
  
  declare var MSMediaKeyNeededEvent: {
    prototype: MSMediaKeyNeededEvent;
    new (): MSMediaKeyNeededEvent;
  };

export interface MSGraphicsTrust {
    readonly constrictionActive: boolean;
    readonly status: string;
}

declare var MSGraphicsTrust: {
    prototype: MSGraphicsTrust;
    new(): MSGraphicsTrust;
};


export interface MSMediaKeys {
  readonly keySystem: string;
  createSession(type: string, initData: Uint8Array, cdmData?: Uint8Array | null): MSMediaKeySession;
}

declare var MSMediaKeys: {
  prototype: MSMediaKeys;
  new(keySystem: string): MSMediaKeys;
  isTypeSupported(keySystem: string, type?: string | null): boolean;
  isTypeSupportedWithFeatures(keySystem: string, type?: string | null): string;
};


export interface MSMediaKeySession extends EventTarget {
  readonly error: MSMediaKeyError | null;
  readonly keySystem: string;
  readonly sessionId: string;
  close(): void;
  update(key: Uint8Array): void;
}

declare var MSMediaKeySession: {
  prototype: MSMediaKeySession;
  new(): MSMediaKeySession;
};


export interface MSMediaKeyError {
  readonly code: number;
  readonly systemCode: number;
  readonly MS_MEDIA_KEYERR_CLIENT: number;
  readonly MS_MEDIA_KEYERR_DOMAIN: number;
  readonly MS_MEDIA_KEYERR_HARDWARECHANGE: number;
  readonly MS_MEDIA_KEYERR_OUTPUT: number;
  readonly MS_MEDIA_KEYERR_SERVICE: number;
  readonly MS_MEDIA_KEYERR_UNKNOWN: number;
}

declare var MSMediaKeyError: {
  prototype: MSMediaKeyError;
  new(): MSMediaKeyError;
  readonly MS_MEDIA_KEYERR_CLIENT: number;
  readonly MS_MEDIA_KEYERR_DOMAIN: number;
  readonly MS_MEDIA_KEYERR_HARDWARECHANGE: number;
  readonly MS_MEDIA_KEYERR_OUTPUT: number;
  readonly MS_MEDIA_KEYERR_SERVICE: number;
  readonly MS_MEDIA_KEYERR_UNKNOWN: number;
};