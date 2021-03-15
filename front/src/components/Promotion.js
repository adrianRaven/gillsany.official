import React from "react";

export default function Promotion(props) {
  const { promotion } = props;
  return (
    <>
      
        <div class="promotion-item">
          <img src={promotion.image} alt="" />
          <div class="promotion-content">
            <h3>{promotion.category}</h3>
            <a href="">VER AHORA</a>
          </div>
        </div>
    </>


  );
}
