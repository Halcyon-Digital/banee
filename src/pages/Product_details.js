import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import product_1 from "../assets/images/cake-1.webp";
import call_icon from "../assets/images/call-icon.webp";
import background from "../assets/images/product-details-background.webp";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import ProductCard from "../Components/ProductCard";
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
export default function Product_details(props) {
  const queryClient = new useQueryClient();
  const { data: ProductDetails, status: detailsStatus } = useQuery(
    ["ProductDetailsData", props.match.params.id],
    getProductDetails,
    {
      initialData: () => {
        if (
          typeof queryClient.getQueryData("AllProductsData") !== "undefined"
        ) {
          return queryClient
            .getQueryData("AllProductsData")
            .find((d) => d.id == props.match.params.id);
        } else {
          return;
        }
      },
    }
  );
  return (
    <>
      <Navbar></Navbar>

      {ProductDetails ? (
        <>
          <section id={ProductDetails.slug}></section>
          <div className="product-details">
            <div className="row">
              <div className="col-6 mob-col-10 image-section">
                <img src={ProductDetails.images[0].src} alt="" srcset="" />
                <div className="row">
                  {ProductDetails.images.map((image, key) => (
                    <div className="col-3">
                      <img src={image.src} alt="" srcset="" />
                    </div>
                  ))}
                  {/* <div className="col-3">
                    <img src={product_1} alt="" srcset="" />
                  </div>
                  <div className="col-3">
                    <img src={product_1} alt="" srcset="" />
                  </div> */}
                </div>
              </div>
              <div className="col-6 mob-col-10">
                <div className="description">
                  <p className="name">{ProductDetails.name}</p>
                  <p
                    className="desc"
                    dangerouslySetInnerHTML={{
                      __html: ProductDetails.short_description,
                    }}
                  ></p>
                  <p className="weight">
                    Net Weight: {ProductDetails.weight} KG
                  </p>
                  <p className="price">
                    BDT.
                    {ProductDetails.sale_price !== "" ? (
                      <sub>
                        {" "}
                        <strike>{ProductDetails.regular_price}</strike>
                      </sub>
                    ) : null}
                    {ProductDetails.price}/-
                  </p>
                  <div className="location">
                    <h4>Call for your pickup:</h4>
                    <div className="row branch">
                      <div className="col-8">
                        <p className="branch-name">Branch-01</p>
                        <p>Address: H-0, R-0, Mirpur, Dhaka-1216</p>
                        <p>Contact No: +8801718664707</p>
                      </div>
                      <div className="col-2">
                        <a href="tel:+8801718664707">
                          <img src={call_icon} alt="" srcset="" />
                        </a>
                      </div>
                    </div>
                    <div className="row branch">
                      <div className="col-8">
                        <p className="branch-name">Branch-01</p>
                        <p>Address: </p>
                        <p>Contact No: </p>
                      </div>
                      <div className="col-2">
                        <img src={call_icon} alt="" srcset="" />
                      </div>
                    </div>
                    <div className="row branch">
                      <div className="col-8">
                        <p className="branch-name">Branch-01</p>
                        <p>Address: </p>
                        <p>Contact No: </p>
                      </div>
                      <div className="col-2">
                        <img src={call_icon} alt="" srcset="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="more-section">
            <div className="details">
              <h3 className="title">Details</h3>
              <p
                dangerouslySetInnerHTML={{ __html: ProductDetails.description }}
              ></p>
            </div>
            {ProductDetails.upsell_ids && ProductDetails.upsell_ids.length ? (
              <div className="related-products">
                <h3 className="title">
                  <span className="sec-1">Related</span> &nbsp;
                  <span className="sec-2">Products</span>
                </h3>
                <div className="row">
                  {ProductDetails.upsell_ids.map((id, key) => (
                    <ProductCard id={id}></ProductCard>
                  ))}

                  {/* <HashLink to="/creation/product_details/1#Product name 1">
                  <div className="product-card">
                    <img src={product_1} alt="" />
                    <div className="desc">
                      <p className="name">Product name 1</p>
                      <p className="price">BDT. 1500</p>
                    </div>
                  </div>
                </HashLink> */}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
