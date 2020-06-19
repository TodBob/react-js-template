import React, { useEffect } from 'react';
import shaka from 'shaka-player';
import muxjs from 'mux.js';
import { BASE_VIDEO_URL } from '../../../../http/api';

/*
- mux.js transfer hls format to mp4
- If video wont play, It may be problem with CORS
  - try to disabled for local development
  - linux command:
    $ google-chrome --disable-web-security --user-data-dir="[some path]"
 */

// This is needed for proper working of mux.js with shaka-player
window.muxjs = muxjs;

const VideoPlayer = () => {
  const videoComponent = React.createRef();

  useEffect(() => {
    // video URL
    const manifestUri = BASE_VIDEO_URL;
    const video = videoComponent.current;

    // Initializing our shaka player
    const player = new shaka.Player(video);

    // Listen for error events.
    player.addEventListener('error', onErrorEvent);

    // Try to load a manifest.
    // This is an asynchronous process.
    player.load(manifestUri).then(() => {
    }).catch(onError); // onError is executed if the asynchronous load fails.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line class-methods-use-this
  const onErrorEvent = () => {
    // Extract the shaka.util.Error object from the event.
  };

  // eslint-disable-next-line class-methods-use-this
  const onError = (error) => {
    // eslint-disable-next-line no-console
    console.error('Error code', error.code, 'object', error);
  };

  return (
  // eslint-disable-next-line jsx-a11y/media-has-caption
    <video
      id="videoPlayer"
      width="100%"
      ref={videoComponent}
      poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
      controls
      autoPlay
    >
    </video>
  );
};

export default VideoPlayer;
