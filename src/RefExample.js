import React, { Component } from 'react';

const videoSource =
  'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4';

export class RefExample extends Component {
  video = React.createRef();

  playVideo = () => {
    this.video.current.play();
  };

  stopVideo = () => {
    this.video.current.stop();
  };

  render() {
    return (
      <div>
        <button onClick={this.playVideo}>Play</button>
        <button onClick={this.stopVideo}>Stop</button>
        <video width="320" height="240" ref={this.video}>
          <source src={videoSource} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default RefExample;
