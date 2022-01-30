import React from "react";
import { HashLink } from "react-router-hash-link";
export default function Product_card(props) {
  return (
    <>
      <HashLink
        to={`/creation/products/${props.ProductDetails.id}#${props.ProductDetails.slug}`}
      >
        <div className="product-card">
          <img src={props.ProductDetails.images[0]?.src} alt="" />
          <div className="desc">
            <p className="name">{props.ProductDetails.name}</p>
            <p className="price">BDT. {props.ProductDetails.price}/-</p>
          </div>
        </div>
      </HashLink>
    </>
  );
}
