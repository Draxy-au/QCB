import Navbar from "@components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

import styles from "./Cart.module.scss";

export default function Cart() {
  const [cartItems, setCartItems] = useState();
  const [cartItemsTotal, setCartItemsTotal] = useState(0);

  const { items, cartTotal, removeItem, updateItemQuantity } = useCart();

  const removeCartItem = (id) => {
    removeItem(id);
  };

  const increaseQty = (id, qty) => {
    updateItemQuantity(id, qty + 1);
  };

  const decreaseQty = (id, qty) => {
    updateItemQuantity(id, qty - 1);
  };

  useEffect(() => {
    setCartItems(items);
    setCartItemsTotal(cartTotal);
  }, [items]);

  return (
    <div className={styles.cart_page_container}>
      <Navbar current={"Shop"} />
      <div className={styles.back}>
        <Link href="/Shop">
          <a>
            <button>&#xab; Continue Shopping</button>
          </a>
        </Link>
      </div>
      <div className={styles.cart_items}>
        <div className={styles.product}>
          <div className={styles.product_remove}></div>
          <div className={styles.product_image}></div>
          <div className={styles.product_name}></div>
          <div className={styles.product_price}>Price</div>

          <div className={styles.change_quantity}>Qty</div>
          <div className={styles.product_total}>Total</div>
        </div>
        {cartItems?.map((item) => {
          return (
            <div key={item.id} className={styles.product}>
              <div className={styles.product_remove}>
                <button onClick={() => removeCartItem(item.id)}>x</button>
              </div>
              <div className={styles.product_image}>
                <Image src={item.image.url} alt="" height={50} width={50} />
              </div>
              <div className={styles.product_name}>{item.name}</div>
              <div className={styles.product_price}>{`$ ${Number(
                item.price
              ).toFixed(2)}`}</div>

              <div className={styles.change_quantity}>
                <button onClick={() => decreaseQty(item.id, item.quantity)}>
                  -
                </button>
                <div className={styles.product_quantity}>{item.quantity}</div>
                <button onClick={() => increaseQty(item.id, item.quantity)}>
                  +
                </button>
              </div>
              <div className={styles.product_total}>{`$ ${Number(
                item.itemTotal
              ).toFixed(2)}`}</div>
            </div>
          );
        })}
      </div>
      <div className={styles.cart_total}>
        {`Cart Total: ${Number(cartItemsTotal).toFixed(2)}`}
      </div>
      <div className={styles.checkout}>
        <button>Proceed to Checkout &#xbb;</button>
      </div>
    </div>
  );
}
