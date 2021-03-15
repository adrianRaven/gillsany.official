import React from "react";
import { Link } from "react-router-dom";
import data from "../data";
import Product from "../components/Product";

export default function ProductFilterScreen(props) {
  return (
    <div>
      <section class="section products">
        <div class="products-layout container">
          <div class="col-1-of-4">
            <div>
              <div class="block-title">
                <h3>Categoria</h3>
              </div>
              <ul class="block-content">
                <li>
                  <input type="checkbox" name="" id=""></input>
                  <label for="">
                    <span>Hospitales </span>
                    <small>(10)</small>
                  </label>
                </li>

                <li>
                  <input type="checkbox" name="" id=""></input>
                  <label for="">
                    <span>Veterinaria </span>
                    <small>(7)</small>
                  </label>
                </li>

                <li>
                  <input type="checkbox" name="" id=""></input>
                  <label for="">
                    <span> Spa </span>
                    <small>(3)</small>
                  </label>
                </li>

              </ul>
            </div>

            <div>
              <div class="block-title">
                <h3>Tipo de Equipo</h3>
              </div>

              <ul class="block-content">
                <li>
                  <input type="checkbox" name="" id=""></input>
                  <label for="">
                    <span>Monitores especializados </span>
                    <small>(10)</small>
                  </label>
                </li>

                <li>
                  <input type="checkbox" name="" id=""></input>
                  <label for="">
                    <span>Monitores cuidados intensivos </span>
                    <small>(7)</small>
                  </label>
                </li>

                <li>
                  <input type="checkbox" name="" id=""></input>
                  <label for="">
                    <span> Monitores Multiparametros </span>
                    <small>(3)</small>
                  </label>
                </li>

                <li>
                  <input type="checkbox" name="" id=""></input>
                  <label for="">
                    <span>Monitores de signos vitales </span>
                    <small>(3)</small>
                  </label>
                </li>

                <li>
                  <input type="checkbox" name="" id=""></input>
                  <label for="">
                    <span>Telemetria </span>
                    <small>(3)</small>
                  </label>
                </li>

                <li>
                  <input type="checkbox" name="" id=""></input>
                  <label for="">
                    <span>Monitores Fetales </span>
                    <small>(3)</small>
                  </label>
                </li>

                <li>
                  <input type="checkbox" name="" id=""></input>
                  <label for="">
                    <span>Desfibriladores </span>
                    <small>(3)</small>
                  </label>
                </li>

                <li>
                  <input type="checkbox" name="" id=""></input>
                  <label for="">
                    <span>Electrocardiografos </span>
                    <small>(3)</small>
                  </label>
                </li>

                <li>
                  <input type="checkbox" name="" id=""></input>
                  <label for="">
                    <span>Bombas de infusion </span>
                    <small>(3)</small>
                  </label>
                </li>

                <li>
                  <input type="checkbox" name="" id=""></input>
                  <label for="">
                    <span>Maquinas de anestesia </span>
                    <small>(3)</small>
                  </label>
                </li>

                <li>
                  <input type="checkbox" name="" id=""></input>
                  <label for="">
                    <span>Ventiladores </span>
                    <small>(3)</small>
                  </label>
                </li>
                <li>
                  <input type="checkbox" name="" id=""></input>
                  <label for="">
                    <span>Cunas termicas </span>
                    <small>(3)</small>
                  </label>
                </li>
                <li>
                  <input type="checkbox" name="" id=""></input>
                  <label for="">  
                    <span>Lamparas para cirugia </span>
                    <small>(1)</small>
                  </label>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-3-of-4">
        <form action="">
          <div class="item">
            <label for="sort-by">Ordenar por</label>
            <select name="sort-by" id="sort-by">
              <option value="title" selected="selected">Name</option>
              <option value="number">Price</option>
              <option value="search_api_relevance">Relevancia</option>
              <option value="created">Nuevo</option>
            </select>
          </div>
          <div class="item">
            <label for="order-by">Orden</label>
            <select name="order-by" id="sort-by">
              <option value="ASC" selected="selected">ASC</option>
              <option value="DESC">DESC</option>
            </select>
          </div>
          <a href="">Aplicar</a>
        </form>

        <div class="product-layout">

        {data.products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
        </div>

        <ul class="pagination">
          <span>1</span>
          <span>2</span>
          <span class="icon">››</span>
          <span class="last">Last »</span>
        </ul>
      </div>
        </div>
      </section>
    </div>
  );
}
