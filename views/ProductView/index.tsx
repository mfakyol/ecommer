import { useState } from "react";
import classes from "./style.module.scss";
import LightBox from "@/components/Lightbox";
import AddCartButton from "@/components/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

const previewImages = [
  "/images/image-product-1.jpg",
  "/images/image-product-2.jpg",
  "/images/image-product-3.jpg",
  "/images/image-product-4.jpg",
];

const productName = "Fall Limited Edition Sneakers";
const price = 125.0;
const image = "/images/image-product-1.jpg";

const maxQuantity = 10;

function ProductView() {
  const dispatch = useDispatch();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [showLightBox, setShowLightBox] = useState(false);
  const [selectedPreviewImageIndex, setSelectedPreviewImageIndex] = useState(0);

  function handleAddCartClick() {
    dispatch(
      addToCart({
        itemId: 1,
        title: productName,
        price: price,
        quantity: selectedQuantity,
        imageUrl: image,
      })
    );
  }

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
                <li
                  key={index}
                  className={`${classes.previewItem} ${selectedPreviewImageIndex == index ? classes.active : ""}`}
                  onClick={() => setSelectedPreviewImageIndex(index)}
                >
                  <img className={classes.previewItemImage} src={previewImage} alt="" />
                </li>
              ))}
            </ul>
          </div>
          <div className={classes.infoContainer}>
            <div className={classes.companyName}>SNEAKER COMPANY</div>
            <h1 className={classes.name}>{productName}</h1>
            <p className={classes.description}>
              These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
              they will withstand everything the weather can offer.
            </p>
            <div className={classes.priceContainer}>
              <div className={classes.priceRow}>
                <span className={classes.price}>{price}</span>
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
                  onClick={() => setSelectedQuantity((prev) => (prev <= maxQuantity - 1 ? ++prev : maxQuantity))}
                >
                  +
                </span>
              </div>
              <AddCartButton className={classes.addCartButton}  onClick={handleAddCartClick} >
                <img className={classes.cartIcon} src="/images/icon-cart.svg" alt=""/>
                Add to cart
              </AddCartButton>
            </div>
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
