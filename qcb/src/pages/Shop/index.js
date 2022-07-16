import Navbar from "@components/Navbar";

import styles from "./Shop.module.scss";

import products from "@data/products";

export const Shop = () => {
  return (
    <div className={styles.shoppage_container}>
      <Navbar current={"Shop"} />
      <div className={styles.title_1}>QCB Shop</div>
      <div className={styles.products_container}>
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
