import { plugin } from 'mongoose';
import React from 'react';
const VideoPlayer = () => {
  return (
    <div>
      <video
        src="/videos/home.mp4"  // Put your .mp4 file inside public/videos/
        autoPlay
        loop
        muted
        playsInline
        controlsList="nodownload"
        disablePictureInPicture
        style={{ width: '100%', borderRadius: '12px' }}
      />
    </div>
  );
};

export default VideoPlayer;