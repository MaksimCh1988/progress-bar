import styles from './ProgressBar.module.css';

const ProgressBar = ({ thresholds, value }) => {
  function findProrgessWidth(thresholdsArray, number) {
    const WIDTH_OF_ONEDIVISION = 16.6;
    let closestThresholdIndex;
    for (let i = 0; i < thresholdsArray.length; i++) {
      if (i === 0 && number <= thresholdsArray[i]) {
        closestThresholdIndex = i;
        break;
      } else if (number > thresholdsArray[i - 1] && number <= thresholdsArray[i]) {
        closestThresholdIndex = i;
        break;
      } else if (i === thresholdsArray.length && number > thresholdsArray[i]) {
        closestThresholdIndex = i;
      }
    }

    let width;

    if (number >= thresholdsArray.at(-1)) {
      return (width = 100);
    }

    if (closestThresholdIndex === 0) {
      return (width = (number * WIDTH_OF_ONEDIVISION) / thresholdsArray[0]);
    }

    let remainingPercent =
      ((value - thresholds[closestThresholdIndex - 1]) * WIDTH_OF_ONEDIVISION) /
      (thresholds[closestThresholdIndex] - thresholds[closestThresholdIndex - 1]);

    width = WIDTH_OF_ONEDIVISION * closestThresholdIndex + remainingPercent;

    return width;
  }

  const prorgessWidth = findProrgessWidth(thresholds, value);

  return (
    <div className={styles['container']}>
      <div className={styles['main-scale']}>
        <div
          className={styles['progress-section-fill']}
          style={{
            width: prorgessWidth + '%',
            borderRadius: prorgessWidth < 100 ? '30px 0 0 30px' : '30px',
          }}
        ></div>
        {/* first section start */}
        <div
          className={`${styles['progress-section']} ${
            value >= thresholds[0] ? styles['progress-section-full'] : ''
          }`}
        >
          <span className={`${styles['label-scale']} ${styles['first-label-scale']}`}>0</span>
          <span className={styles['label-scale']}>{`${
            value > thresholds[0] ? thresholds[0] : value + '/' + thresholds[0]
          }`}</span>
        </div>
        {/* first section end */}
        <div
          className={`${styles['progress-section']} ${
            value >= thresholds[1] ? styles['progress-section-full'] : ''
          }`}
        >
          <span className={styles['label-scale']}>{`${
            value > thresholds[0] && value <= thresholds[1]
              ? value + '/' + thresholds[1]
              : thresholds[1]
          }`}</span>
        </div>
        <div
          className={`${styles['progress-section']} ${
            value >= thresholds[2] ? styles['progress-section-full'] : ''
          }`}
        >
          <span className={styles['label-scale']}>{`${
            value > thresholds[1] && value <= thresholds[2]
              ? value + '/' + thresholds[2]
              : thresholds[2]
          }`}</span>
        </div>
        <div
          className={`${styles['progress-section']} ${
            value >= thresholds[3] ? styles['progress-section-full'] : ''
          }`}
        >
          <span className={styles['label-scale']}>{`${
            value > thresholds[2] && value <= thresholds[3]
              ? value + '/' + thresholds[3]
              : thresholds[3]
          }`}</span>
        </div>
        <div
          className={`${styles['progress-section']} ${
            value >= thresholds[4] ? styles['progress-section-full'] : ''
          }`}
        >
          <span className={styles['label-scale']}>{`${
            value > thresholds[3] && value <= thresholds[4]
              ? value + '/' + thresholds[4]
              : thresholds[4]
          }`}</span>
        </div>
        {/* last section start */}
        <div
          className={`${styles['progress-section']} ${
            value >= thresholds[5] ? styles['progress-section-full-last'] : ''
          }`}
        >
          <span className={`${styles['label-scale']} ${styles['last-label-scale']}`}>{`${
            value > thresholds[4] && value <= thresholds[5]
              ? value + '/' + thresholds[5]
              : thresholds[5]
          }`}</span>
        </div>
        {/* last section end */}
      </div>
    </div>
  );
};

export default ProgressBar;
