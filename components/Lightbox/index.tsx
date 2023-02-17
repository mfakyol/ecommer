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

  return (
    <div ref={ref} className={classes.lightBox} onClick={handleClose}>
      <div className={classes.lightBoxContent}>
        <div className={classes.imageContainer}>
          <img src={imageUrls[selectedIndex]} alt="" />
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
