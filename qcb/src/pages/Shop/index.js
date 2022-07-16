import Image from "next/image";

import Navbar from "@components/Navbar";

import styles from "./Shop.module.scss";

import products from "@data/products";

import cart_icon from "@assets/icons/cart.svg";

export const Shop = () => {
  return (
    <div className={styles.shoppage_container}>
      <Navbar current={"Shop"} />
      <div className={styles.title_1}>QCB Shop</div>

      <div className={styles.products_container}>
        <div className={styles.cart}>
          Total: $0.00
          <Image height={"30px"} width={"30px"} src={cart_icon} alt="cart" />
        </div>
        {products?.slice(0, 6).map((product) => (
          <div key={product.id} className={styles.product}>
            <div className={styles.product_image}>
              <img
                src={product.image}
                height={250}
                width={250}
                alt={product.name}
              />
            </div>
            <div className={styles.product_name}>{product.name}</div>
            <div className={styles.product_price}>${product.price}</div>
            <div className={styles.product_add}>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
