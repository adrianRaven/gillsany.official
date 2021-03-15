import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import ProductFilterScreen from "./screens/ProductFilterScreen"

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav class="nav">
          <div class="wrapper container">
            <div class="logo">
              <a href="/">GILLSANY</a>
            </div>
            <ul class="nav-list">
              <div class="top">
                <label for="" class="btn close-btn">
                  <i class="fas fa-times"></i>
                </label>
              </div>
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href={`/products`}>Productos</a>
              </li>
              <li>
                <a href="/" class="desktop-item">
                  Categorias{" "}
                  <span>
                    <i class="fas fa-chevron-down"></i>
                  </span>
                </a>
                <input type="checkbox" id="showMega" />
                <label for="showMega" class="mobile-item">
                  Shop{" "}
                  <span>
                    <i class="fas fa-chevron-down"></i>
                  </span>
                </label>
                <div class="mega-box">
                  <div class="content">
                    <div class="row">
                      <header>Hospitales</header>
                      <ul class="mega-links">
                        <li>
                          <a href="#">Monitores</a>
                        </li>
                        <li>
                          <a href="#">Telemetria</a>
                        </li>
                        <li>
                          <a href="#">Desfibriladores</a>
                        </li>
                        <li>
                          <a href="#">Electrocardiografos</a>
                        </li>
                        <li>
                          <a href="#">Bombas de infusion</a>
                        </li>
                        <li>
                          <a href="#">Maquinas de anestesia</a>
                        </li>
                        <li>
                          <a href="#">Ventiladores</a>
                        </li>
                        <li>
                          <a href="#">Lamparas para cirugia</a>
                        </li>
                      </ul>
                    </div>
                    <div class="row">
                      <header>Veterinarias</header>
                      <ul class="mega-links">
                        <li>
                          <a href="#">Monitores</a>
                        </li>
                        <li>
                          <a href="#">Desfibriladores</a>
                        </li>
                        <li>
                          <a href="#">Electrocardiografos</a>
                        </li>
                        <li>
                          <a href="#">Ultrasonidos</a>
                        </li>
                      </ul>
                    </div>
                    <div class="row">
                      <header>Spas</header>
                      <ul class="mega-links">
                        <li>
                          <a href="#">Equipos de depilacion</a>
                        </li>
                        <li>
                          <a href="#">Equipos fisioterapia</a>
                        </li>
                        <li>
                          <a href="#">Equipos multifuncion</a>
                        </li>
                        <li>
                          <a href="#">Facial y corporal</a>
                        </li>
                        <li>
                          <a href="#">Manicura y pedicura</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="" class="desktop-item">
                  Pagina{" "}
                  <span>
                    <i class="fas fa-chevron-down"></i>
                  </span>
                </a>
                <input type="checkbox" id="showdrop2" />
                <label for="showdrop2" class="mobile-item">
                  Page{" "}
                  <span>
                    <i class="fas fa-chevron-down"></i>
                  </span>
                </label>
                <ul class="drop-menu2">
                  <li>
                    <a href="">Nosotros</a>
                  </li>
                  <li>
                    <a href="">Contacto</a>
                  </li>
                </ul>
              </li>

              <li class="icons">
                <span>
                  <img src="/images/shoppingBag.svg" alt="" />
                  <small class="count d-flex">0</small>
                </span>
                <span>
                  <img src="/images/search.svg" alt="" />
                </span>
              </li>
            </ul>
            <label for="" class="btn open-btn">
              <i class="fas fa-bars"></i>
            </label>
          </div>
        </nav>

        <main>
          <Route path="/products" component={ProductFilterScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>

        <footer id="footer" class="section footer">
          <div class="container">
            <div class="footer-container">
            <div class="footer-col">
                <h4>Siguenos</h4>
                <div class="social-links">
                    <a target="_blank" href="https://www.facebook.com/gillsany.mx"><i class="fab fa-facebook-f"></i></a>
                    <a target="_blank" href="https://twitter.com/gillsany"><i class="fab fa-twitter"></i></a>
                    <a target="_blank" href="https://www.instagram.com/gillsany.mx/"><i class="fab fa-instagram"></i></a>
                    <a target="_blank" href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
              <div class="footer-center">
                <h3>INFORMACION</h3>
                <a href="#">Acerca de nosotros</a>
                <a href="#">Politicas de Privacidad</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Contacto</a>
                <a href="#">Mapa del sitio</a>
              </div>
              <div class="footer-center">
                <h3>Mi cuenta</h3>
                <a href="#">Mi cuenta</a>
                <a href="#">OHistorial de ordenes</a>
                <a href="#">Wish List</a>
                <a href="#">Newsletter</a>
              </div>
              <div class="footer-center">
                <h3>CONTACTANOS</h3>
                <div>
                  <span>
                    <i class="fas fa-map-marker-alt"></i>
                  </span>
                  Las torres, 27085 Torreón, Coah. México
                </div>
                <div>
                  <span>
                    <i class="far fa-envelope"></i>
                  </span>
                  gillsany.mx@outlook.com
                </div>
                <div>
                  <span>
                    <i class="fas fa-phone"></i>
                  </span>
                  871-151-8528
                </div>
                <div class="payment-methods">
                  <img src="/images/payment.png" alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
