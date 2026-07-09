import { useState } from 'react';
import styles from './LoadingAnimation.module.css';

import portalVideo from '../../assets/videos/efeitoPortal.mp4';

function LoadingAnimation({ onComplete }) {
  const [isFading, setIsFading] = useState(false);

  const handleVideoEnd = () => {
    setIsFading(true);

    setTimeout(() => {
      onComplete();
    }, 800);
  };

  return (
    <div
      className={`${styles.container} ${
        isFading ? styles.fadeOut : ''
      }`}
    >
      <video
        className={styles.video}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      >
        <source src={portalVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default LoadingAnimation;