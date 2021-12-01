import React, { useEffect, useState } from "react";
import hero_image from "../assets/images/creation-hero-image.webp";
import product_1 from "../assets/images/cake-1.webp";
import background from "../assets/images/creation-background.webp";
import { HashLink } from "react-router-hash-link";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useQuery } from "react-query";
import ProductCard from "../Components/ProductCard";
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
export default function Creation() {
  const [pagenumber, setpagenumber] = useState(1);
  const [totalpages, settotalpages] = useState("");
  const [category, setcategory] = useState("")
  
  const { data: AllCategories, status: categoryStatus } = useQuery(
    ["AllCategoriesData"],
    getAllCategories
  );
  const { data: AllProducts, status: productStatus } = useQuery(
    ["AllProductsData",category, pagenumber],
    getAllProducts
  );
  return (
    <div>
      <Navbar></Navbar>
      <section id=""></section>
      <div className="hero-area">
        <div className="hero-content">
          <img src={hero_image} alt="" srcset="" />
        </div>

        <div className="creation-page">
          <div className="row">
            <div className="product-show-case">
              <ul className="category-list">
                {AllCategories && AllCategories.length
                  ? AllCategories.map((category, key) => (
                      <li
                        className="category-list-item"
                        onClick={() => {
                          // sortProduct(category.id);
                          setcategory(category.id)
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
              {AllProducts && AllProducts.length
                ? AllProducts.map((product, key) => (
                    <ProductCard id={product.id}></ProductCard>
                  ))
                : null}
            </div>
            {/* Pagination Section */}
          </div>
          {totalpages.length === 1 ? null : (
            <div className="row">
              <div className="pagination">
                <button
                  className="btn"
                  // onClick={() =>
                  //   setpagenumber(pagenumber !== 1 ? pagenumber - 1 : pagenumber)
                  // }
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
          )}
        </div>
      </div>
    </div>
  );
}
