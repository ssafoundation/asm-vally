import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "../../context/CartProvider";
import Camera from "../Travel_Tours/Camera";
import "./product.css";
export const Product = [
  {
    img: "https://images.unsplash.com/photo-1628191078830-c83475b88183?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    name: "Laptop",
    id: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    name: "Mobile",
    id: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=348&q=80",
    name: "Monitor",
    id: 3,
  },
  {
    img: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
    name: "Pc",
    id: 4,
  },
];
const Product_Brand = () => {
  const { cart, setCart } = useContext(ShoppingCart);
  const AddToCart = (product) => {
    const value = [...cart, product];
    setCart(value);
  };

  return (
    <>
      <section className="product_brand_wrap">
        <div className="container-fluid g-0">
          <div className="product_brand_inner_wrap">
            <div className="container-xxl container-md container-fluid">
              <div className="product_title">
                <h3>Shop by Brands</h3>
                <div className="search_box shop_by_brand">
                  <input type="search" name id placeholder="Search..." />
                  <button type="submit">
                    <i className="fal fa-search" />
                  </button>
                </div>
              </div>
              <div className="product_brand_items_wrap">
                <div className="product_brand_grid">
                  {/* product brand single item  */}

                  {Camera.map((product, i) => {
                    return (
                      <div key={i} className="brand_single_item_wrap">
                        <div className="brand_single_item">
                          <div className="b_single_item_top">
                            <img src={product.img} alt="" />
                            <h5>
                              <Link to={"/" + product.name}>
                                {product.seller}
                              </Link>
                            </h5>
                          </div>
                          <div className="b_single_item_bottom">
                            <button onClick={() => AddToCart(product)}>
                              <i className="fal fa-cart-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* product brand single item  */}

                  {/* view all product button  */}
                  <div className="brand_single_item_wrap">
                    <div className="brand_single_item">
                      <div className="view_all_product">
                        <div>
                          <p>View all Brands Available in E-Valy </p>
                          <button className="btn view_all_product_btn">
                            View All{" "}
                            <span>
                              <i className="fas fa-arrow-right" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* view all product button  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product_Brand;
