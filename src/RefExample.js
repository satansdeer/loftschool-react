import React, { Component } from 'react';

const videoSource =
  'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4';

export class RefExample extends Component {
  render() {
    return (
      <div>
        <video width="320" height="240">
          <source src={videoSource} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default RefExample;
