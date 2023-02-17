import { useRef, useState } from "react";
import classes from "./style.module.scss";
import useOnClickOutside from "@/hooks/useOnClickOutside";

const cartLength = 3;
const cartItems = [
  {
    imageUrl: "/images/image-product-1-thumbnail.jpg",
    quantity: 1,
    title: "Fall Limited Edition Sneakers",
    price: 125,
  },
  {
    imageUrl: "/images/image-product-1-thumbnail.jpg",
    quantity: 1,
    title: "Fall Limited Edition Sneakers",
    price: 125,
  },
  {
    imageUrl: "/images/image-product-1-thumbnail.jpg",
    quantity: 1,
    title: "Fall Limited Edition Sneakers",
    price: 125,
  },
];

function Cart() {
  const cartContainerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const x = useOnClickOutside(cartContainerRef, () => setIsOpen(false), isOpen);

  return (
    <div ref={cartContainerRef} className={classes.cartWrapper}>
      {cartLength > 0 && <span className={classes.cartCount}>{cartLength}</span>}
      <img className={classes.cartIcon} src="/images/icon-cart.svg" alt="" onClick={() => setIsOpen((prev) => !prev)} />
      {isOpen && (
        <div className={classes.cartContainer}>
          <div className={classes.cartTitle}>Cart</div>
          <ul className={classes.cartList}>
            {cartItems.map((cartItem, index) => (
              <li key={index} className={classes.cartItem}>
                <img className={classes.cartItemImage} src={cartItem.imageUrl} alt="" />
                <div className={classes.cartItemInfo}>
                  <div className={classes.cartItemTitle}>{cartItem.title}</div>
                  <div className={classes.cartItemPrice}>
                    {`$${cartItem.price} x ${cartItem.quantity}`} <b>{cartItem.price * cartItem.quantity}</b>
                  </div>
                </div>
                <img className={classes.cartItemDelete} src="/images/icon-delete.svg" alt="" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Cart;
