import React from 'react';
import shaka from 'shaka-player';
import muxjs from 'mux.js';

/* TODO: move to Documentation
- muxjs transfer hls format to mp4, because chrome for example,
didnt support that format
- also, in development VIDEO WILL NOT WORK, because of CORS policy of video sorce
If video didint work, you have to disable CORS in you browser!!
For example:
linux:$ google-chrome --disable-web-security --user-data-dir="[some path]"
 */

// This is needed for proper working of muxjs with shaka player
window.muxjs = muxjs;

// Copied solution from documentation

class VideoPlayer extends React.PureComponent {
  videoComponent = React.createRef();

  componentDidMount() {
    // video URL
    // TODO: hardcoded for now, in real case add props for URL
    const manifestUri = 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8';

    // Reference to our video component on DOM
    const video = this.videoComponent.current;

    // Initializing our shaka player
    const player = new shaka.Player(video);

    // Listen for error events.
    player.addEventListener('error', this.onErrorEvent);

    // Try to load a manifest.
    // This is an asynchronous process.
    player.load(manifestUri).then(() => {
    }).catch(this.onError); // onError is executed if the asynchronous load fails.
  }

  // eslint-disable-next-line class-methods-use-this
  onErrorEvent() {
    // Extract the shaka.util.Error object from the event.
  }

  // eslint-disable-next-line class-methods-use-this
  onError(error) {
    // eslint-disable-next-line no-console
    console.error('Error code', error.code, 'object', error);
  }

  render() {
    return (

    // eslint-disable-next-line jsx-a11y/media-has-caption
      <video
        id="videoPlayer"
        width="100%"
        ref={this.videoComponent}
        poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
        controls
        autoPlay
      >
      </video>

    );
  }
}

export default VideoPlayer;
