import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import data from "../data";
import { detailsProduct } from "../actions/productActions";

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <section class="section product-detail">
            <div class="details container">
              <div class="left">
                <div class="main">
                  <img src={product.image} alt={product.name} />
                </div>
                <div class="thumbnails">
                  <div class="thumbnail">
                    <img src="./images/product2.jpg" alt="" />
                  </div>
                  <div class="thumbnail">
                    <img src="./images/product3.jpg" alt="" />
                  </div>
                  <div class="thumbnail">
                    <img src="./images/product4.jpg" alt="" />
                  </div>
                  <div class="thumbnail">
                    <img src="./images/product5.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div class="right">
                <span>{product.category}</span>
                <h1>{product.name}</h1>

                <form class="form">
                  <input type="text" placeholder="1" />
                  <a href="/" class="addCart">
                    Cotizar
                  </a>
                </form>
                <h3>Detalles del Producto</h3>
                <p>{product.description}</p>
              </div>
            </div>
          </section>

          <section class="section related-products">
            <div class="title">
              <h2>Productos Relacionados</h2>
              <span>
                Select from the premium product brands and save plenty money
              </span>
            </div>
            <div class="product-layout container">
              <div class="product">
                <div class="img-container">
                  <img src="/images/product1.jpg" alt="" />{" "}
                  <div class="addCart">
                    <i class="fas fa-shopping-cart"></i>
                  </div>
                  <ul class="side-icons">
                    <span>
                      <i class="fas fa-search"></i>
                    </span>
                    <span>
                      <i class="far fa-heart"></i>
                    </span>
                    <span>
                      <i class="fas fa-sliders-h"></i>
                    </span>
                  </ul>
                </div>
                <div class="bottom">
                  <a href="/">Bambi Print Mini Backpack</a>
                  <div class="price">
                    <span>$150</span>
                  </div>
                </div>
              </div>
              <div class="product">
                <div class="img-container">
                  <img src="/images/product2.jpg" alt="" />
                  <div class="addCart">
                    <i class="fas fa-shopping-cart"></i>
                  </div>

                  <ul class="side-icons">
                    <span>
                      <i class="fas fa-search"></i>
                    </span>
                    <span>
                      <i class="far fa-heart"></i>
                    </span>
                    <span>
                      <i class="fas fa-sliders-h"></i>
                    </span>
                  </ul>
                </div>
                <div class="bottom">
                  <a href="/">Bambi Print Mini Backpack</a>
                  <div class="price">
                    <span>$150</span>
                  </div>
                </div>
              </div>
              <div class="product">
                <div class="img-container">
                  <img src="/images/product3.jpg" alt="" />
                  <div class="addCart">
                    <i class="fas fa-shopping-cart"></i>
                  </div>

                  <ul class="side-icons">
                    <span>
                      <i class="fas fa-search"></i>
                    </span>
                    <span>
                      <i class="far fa-heart"></i>
                    </span>
                    <span>
                      <i class="fas fa-sliders-h"></i>
                    </span>
                  </ul>
                </div>
                <div class="bottom">
                  <a href="/">Bambi Print Mini Backpack</a>
                  <div class="price">
                    <span>$150</span>
                  </div>
                </div>
              </div>
              <div class="product">
                <div class="img-container">
                  <img src="/images/product4.jpg" alt="" />
                  <div class="addCart">
                    <i class="fas fa-shopping-cart"></i>
                  </div>

                  <ul class="side-icons">
                    <span>
                      <i class="fas fa-search"></i>
                    </span>
                    <span>
                      <i class="far fa-heart"></i>
                    </span>
                    <span>
                      <i class="fas fa-sliders-h"></i>
                    </span>
                  </ul>
                </div>
                <div class="bottom">
                  <a href="/">Bambi Print Mini Backpack</a>
                  <div class="price">
                    <span>$150</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
