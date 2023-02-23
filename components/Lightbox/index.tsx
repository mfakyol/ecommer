import { useCallback, useRef, useState } from "react";
import classes from "./style.module.scss";

interface LightBoxComponentProps {
  imageUrls: Array<string>;
  startedIndex: number;
  onClose(): void;
}

function LightBox({ imageUrls = [], startedIndex = 0, onClose }: LightBoxComponentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(startedIndex);

  const handleClose = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === ref.current) onClose?.();
    },
    [onClose]
  );

  const handleClickArrow = useCallback(
    (isNext = false) => {
      if (isNext) setSelectedIndex((prev) => (prev >= imageUrls.length - 1 ? 0 : prev + 1));
      else setSelectedIndex((prev) => (prev <= 0 ? imageUrls.length - 1 : prev - 1));
    },
    [imageUrls]
  );

  return (
    <div ref={ref} className={classes.lightBox} onClick={handleClose}>
      <div className={classes.lightBoxContent}>
        <img className={classes.iconClose} src="/images/icon-close.svg" alt="" onClick={onClose} />
        <div className={classes.imageContainer}>
          <div className={`${classes.arrow} ${classes.leftArrow}`} onClick={() => handleClickArrow()}>
            <img className={classes.arrowIcon} src="/images/icon-previous.svg" alt="" />
          </div>
          <div className={`${classes.arrow} ${classes.rightArrow}`} onClick={() => handleClickArrow(true)}>
            <img className={classes.arrowIcon} src="/images/icon-previous.svg" alt="" />
          </div>

          <img className={classes.image} src={imageUrls[selectedIndex]} alt="" />
        </div>
        <ul className={classes.previewList}>
          {imageUrls.map((imageUrl, index) => (
            <li key={index} className={classes.previewItem} onClick={() => setSelectedIndex(index)}>
              <img src={imageUrl} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LightBox;
