import React from "react";

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} class="product">
      <div class="img-container">
        <a href={`/product/${product._id}`}>
          <img src={product.image} alt={product.name} />
        </a>
        
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
        <a href={`/product/${product._id}`}>{product.name}</a>
        <div class="price">
          <span>Cotiza ahora</span>
        </div>
      </div>
    </div>
  );
}
