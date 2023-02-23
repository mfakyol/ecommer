import { useRef, useState } from "react";
import classes from "./style.module.scss";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";
import { CartItem } from "@/types";
import { useDispatch } from "react-redux";
import { clearCartItem } from "@/store/cartSlice";

 
 

function Cart() {
  const dispatch = useDispatch();
  const cartContainerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const cartItems = useSelector<IRootState,Array<CartItem>>(state => state.cart.cartItems)

  useOnClickOutside(cartContainerRef, () => setIsOpen(false), isOpen);

  return (
    <div ref={cartContainerRef} className={classes.cartWrapper}>
      {cartItems.length > 0 && <span className={classes.cartCount}>{cartItems.reduce((acc, cartItem) => acc+= cartItem.quantity,0)}</span>}
      <img className={classes.cartIcon} src="/images/icon-cart.svg" alt="" onClick={() => setIsOpen((prev) => !prev)} />
      {cartItems.length > 0 && isOpen && (
        <div className={classes.cartContainer}>
          <div className={classes.cartTitle}>Cart</div>
          <ul className={classes.cartList}>
            {cartItems.map((cartItem, index) => (
              <li key={index} className={classes.cartItem}>
                <img className={classes.cartItemImage} src={cartItem.imageUrl} alt="" />
                <div className={classes.cartItemInfo}>
                  <div className={classes.cartItemTitle}>{cartItem.title}</div>
                  <div className={classes.cartItemPrice}>
                    {`$${cartItem.price} x ${cartItem.quantity}`} <b>${cartItem.price * cartItem.quantity}</b>
                  </div>
                </div>
                <img className={classes.cartItemDelete} src="/images/icon-delete.svg" alt="" onClick={() => dispatch(clearCartItem(cartItem.itemId))}/>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Cart;
