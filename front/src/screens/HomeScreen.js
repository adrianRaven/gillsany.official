import React, { useEffect } from "react";
import Product from "../components/Product";
import Promotion from "../components/Promotion";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import data from "../data";
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from "../actions/productActions";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector ( state => state.productList);
  const {loading, error, products } = productList;


  useEffect(() => {
    dispatch(listProducts());
  }, []);
  return (
    <>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <div class="hero">
          <img src="./images/herobanner1.jpg" class="hero" alt="" />
          <div class="right">
              <img src="./images/hero.png" alt="" />
            </div>
            <div class="left">
              <span>GILLSANY</span>
              <h1>Venta de Equipo Medico</h1>
              <small>Hasta 12 meses sin intereses</small>
              <a href={`/products`}>Ver Productos </a>
            </div>
            
          </div>

          <section class="section promotion">
            <div class="title">
              <h2>Paquetes por Categoria</h2>
              <span>Selecciona uno de los kits pre configurados y ahorra!</span>
            </div>

            <div class="promotion-layout container">
              {data.promotions.map((promotion) => (
                <Promotion
                  key={promotion._id}
                  promotion={promotion}
                ></Promotion>
              ))}
            </div>
          </section>

          <section class="section products">
            <div class="title">
              <h2>Los mas vendidos</h2>
              <span>Conoce nuestros productos mas buscados</span>
            </div>

            <div class="product-layout">
              {products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
          </section>

          <section class="section advert">
            <div class="advert-layout container">
              <div class="item ">
                <img src="./images/promo7.jpg" alt=""></img>
                <div class="content left">
                  <span>Metodos de Pago</span>
                  <h3>12 Meses sin intereses</h3>
                  <a href="/">Ver informacion</a>
                </div>
              </div>

              <div class="item">
                <img src="./images/promo8.jpg" alt=""></img>
                <div class="content  right">
                  <span>Extras</span>
                  <h3>Conoce nuestros Servicios</h3>
                  <a href="/">Ver informacion </a>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
