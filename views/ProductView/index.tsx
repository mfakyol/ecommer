import { useState } from "react";
import classes from "./style.module.scss";
import LightBox from "@/components/Lightbox";
import AddCartButton from "@/components/Button";

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

const maxQuantity = 10;

function ProductView() {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
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
          <div className={classes.infoContainer}>
            <div className={classes.companyName}>SNEAKER COMPANY</div>
            <h1 className={classes.name}>Fall Limited Edition Sneakers</h1>
            <p className={classes.description}>
              These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
              they will withstand everything the weather can offer.
            </p>
            <div className={classes.priceContainer}>
              <div className={classes.priceRow}>
                <span className={classes.price}>$125.00</span>
                <span className={classes.discount}>50%</span>
              </div>
              <span className={classes.oldPrice}>$250.00</span>
            </div>

            <div className={classes.cartRow}>
            <div className={classes.quantityBox}>
              <span
              tabIndex={0}
                className={`${classes.minus} ${selectedQuantity == 1 ? classes.disabled : ""}`}
                onClick={() => setSelectedQuantity((prev) => (prev > 1 ? --prev : 1))}
              >
                -
              </span>
              <span className={classes.quantity}>{selectedQuantity}</span>
              <span
                 tabIndex={0}
                className={`${classes.plus} ${selectedQuantity == maxQuantity ? classes.disabled : ""}`}
                onClick={() => setSelectedQuantity((prev) => (prev <= maxQuantity -1 ? ++prev : maxQuantity))}
              >
                +
              </span>
            </div>
            <AddCartButton className={classes.addCartButton}>
              <img className={classes.cartIcon} src="/images/icon-cart.svg" alt="" />
              Add to cart
            </AddCartButton></div>   
          </div>
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
