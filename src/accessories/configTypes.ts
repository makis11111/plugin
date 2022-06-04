export type CameraConfig = {
  name?: string;
  manufacturer?: string;
  model?: string;
  serialNumber?: string;
  firmwareRevision?: string;
  motion?: boolean;
  doorbell?: boolean;
  switches?: boolean;
  motionTimeout?: number;
  motionDoorbell?: boolean;
  unbridge?: boolean;
  videoConfig?: VideoConfig;
  enableButton: boolean;
  motionButton: boolean;
  rtsp: boolean;
  videoConfigEna: boolean;
  enableCamera: boolean;
  forcerefreshsnap: boolean;
  useCachedLocalLivestream: boolean;
  useEnhancedSnapshotBehaviour?: boolean;
  refreshSnapshotIntervalMinutes?: number;
  snapshotHandlingMethod?: number;
  immediateRingNotificationWithoutSnapshot?: boolean;
  delayCameraSnapshot?:boolean;
};

export type VideoConfig = {
  source?: string;
  stillImageSource?: string;
  returnAudioTarget?: string;
  analyzeDuration?: number;
  probeSize?: number;
  reorderQueueSize?: number;
  maxDelay?: number;
  maxStreams?: number;
  maxWidth?: number;
  maxHeight?: number;
  maxFPS?: number;
  maxBitrate?: number;
  readRate?: boolean;
  forceMax?: boolean;
  vcodec?: string;
  acodec?: string;
  packetSize?: number;
  stimeout?: number;
  videoFilter?: string;
  encoderOptions?: string;
  mapvideo?: string;
  mapaudio?: string;
  audio?: boolean;
  debug?: boolean;
  debugReturn?: boolean;
};