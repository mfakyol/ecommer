import { useState } from "react";
import classes from "./style.module.scss";
import LightBox from "@/components/Lightbox";

const previewImages = [
  "/images/image-product-1.jpg",
  "/images/image-product-2.jpg",
  "/images/image-product-3.jpg",
  "/images/image-product-4.jpg",
  "/images/image-product-1.jpg",
  "/images/image-product-2.jpg",
  "/images/image-product-3.jpg",
  "/images/image-product-4.jpg",
];

function ProductView() {
  const [showLightBox, setShowLightBox] = useState(false);
  const [selectedPreviewImageIndex, setSelectedPreviewImageIndex] = useState(0);

  return (
    <>
      <div className={classes.productView}>
        <div className={classes.productContainer}>
          <div className={classes.productImageContainer}>
            <img
              className={classes.productImage}
              src={previewImages[selectedPreviewImageIndex]}
              alt=""
              onClick={() => setShowLightBox(true)}
            />
            <ul className={classes.previewList}>
              {previewImages.map((previewImage, index) => (
                <li key={index} className={classes.previewItem} onClick={() => setSelectedPreviewImageIndex(index)}>
                  <img src={previewImage} alt="" />
                </li>
              ))}
            </ul>
          </div>
          <div className={classes.productInfoContainer}></div>
        </div>
      </div>

      {showLightBox && (
        <LightBox
          startedIndex={selectedPreviewImageIndex}
          imageUrls={previewImages}
          onClose={() => setShowLightBox(false)}
        />
      )}
    </>
  );
}

export default ProductView;
