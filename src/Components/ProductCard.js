import React from "react";
import { HashLink } from "react-router-hash-link";
import axios from "axios";
import { useQuery } from "react-query";
const proxy = process.env.REACT_APP_PROXY;
const ck = process.env.REACT_APP_CK;
const cs = process.env.REACT_APP_CS;
const getProductDetails = async (x) => {
  var id = x.queryKey[1];
  const data = await axios
    .get(`${proxy}/wc/v3/products/${id}`, {
      auth: {
        username: ck,
        password: cs,
      },
    })
    .then((res) => {
      return res.data;
    });
  return data;
};
export default function ProductCard(props) {
  const { data: ProductDetails, status: detailsStatus } = useQuery(
    ["ProductDetailsData", props.id],
    getProductDetails
  );
  return (
    <>
      {ProductDetails ? (
        <HashLink
          to={`/creation/products/${ProductDetails.id}#${ProductDetails.slug}`}
        >
          <div className="product-card">
            <img src={ProductDetails.images[0].src} alt="" />
            <div className="desc">
              <p className="name">{ProductDetails.name}</p>
              <p className="price">BDT. {ProductDetails.price}/-</p>
            </div>
          </div>
        </HashLink>
      ) : null}
    </>
  );
}
