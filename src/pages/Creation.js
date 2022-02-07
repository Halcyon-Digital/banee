import React, { useState } from "react";
import hero_image from "../assets/images/creation-hero-image.webp";
import axios from "axios";
import { useQuery } from "react-query";
import ProductCard from "../Components/Related_ProductCard";
import Creative_Navbar from "../Components/Creative_Navbar";
import Product_card from "../Components/Product_card";
import PreLoader from "../Components/PreLoader";
import Navbar from "../Components/Navbar";
const proxy = process.env.REACT_APP_PROXY;
const ck = process.env.REACT_APP_CK;
const cs = process.env.REACT_APP_CS;
const getAllCategories = async (x) => {
  const data = await axios
    .get(`${proxy}/wc/v3/products/categories`, {
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
const getAllProducts = async (x) => {
  var category = x.queryKey[1];
  var pagenumber = x.queryKey[2];
  const data = await axios
    .get(`${proxy}/wc/v3/products?category=${category}&&page=${pagenumber}`, {
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
const getProductPageBanner = async (x) => {
  const data = await axios
    .get(`${proxy}/wp/v2/product_page_banner`)
    .then((res) => {
      return res.data;
    });
  return data;
};
export default function Creation() {
  const [pagenumber, setpagenumber] = useState(1);
  const [totalpages, settotalpages] = useState("");
  const [category, setcategory] = useState("");

  const { data: AllCategories, status: categoryStatus } = useQuery(
    ["AllCategoriesData"],
    getAllCategories
  );
  const { data: AllProducts, status: productStatus } = useQuery(
    ["AllProductsData", category, pagenumber],
    getAllProducts
  );
  const { data: banner, status: bannerStatus } = useQuery(
    ["ProductPageBanner"],
    getProductPageBanner
  );

  return (
    <div>
      <Navbar></Navbar>
      <section id=""></section>
      <div className="hero-area">
        <div className="hero-content">
          {banner && banner.length ? (
            <img src={banner[0].acf.banner_image.url} alt="" srcSet="" />
          ) : null}
        </div>

        <div className="creation-page">
          <div className="row">
            <div className="product-show-case">
              <ul className="category-list">
                {AllCategories && AllCategories.length
                  ? AllCategories.map((category, key) => (
                      <li
                        key={key}
                        className="category-list-item"
                        onClick={() => {
                          // sortProduct(category.id);
                          setcategory(category.id);
                        }}
                      >
                        {category.name}
                      </li>
                    ))
                  : null}
              </ul>
            </div>
          </div>
          <div className="product-show-case">
            <div className="title"></div>
            <div className="row">
              {productStatus !== "success" ? (
                <PreLoader></PreLoader>
              ) : (
                <>
                  {AllProducts && AllProducts.length ? (
                    AllProducts.map((product, key) => (
                      <Product_card
                        ProductDetails={product}
                        key={key}
                      ></Product_card>
                    ))
                  ) : (
                    <h3 className="title">No Product Available</h3>
                  )}
                </>
              )}
            </div>
            {/* Pagination Section */}
          </div>
          <div className="row">
            <div className="pagination">
              <button
                className="btn"
                onClick={() => setpagenumber((old) => Math.max(old - 1, 1))}
                disabled={pagenumber === 1}
              >
                &#8592;
              </button>

              {pagenumber}
              <button
                className="btn"
                onClick={() => {
                  setpagenumber((old) => old + 1);
                }}
                disabled={AllProducts && AllProducts.length === 0}
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
