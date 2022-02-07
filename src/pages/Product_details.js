import React from "react";
import call_icon from "../assets/images/call-icon.webp";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import Related_ProductCard from "../Components/Related_ProductCard";
import Creative_Navbar from "../Components/Creative_Navbar";
import PreLoader from "../Components/PreLoader";
import Navbar from "../Components/Navbar";
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
const getBranchLocation = async (x) => {
  const data = await axios
    .get(`${proxy}/wp/v2/branches`, {
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
  const { data: branchLocation, status: branchStatus } = useQuery(
    ["BranchDetails"],
    getBranchLocation
  );
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

  function changeBigimage(src) {
    window.scrollTo(0, 0);
    document.getElementById("big-image").src = src;
  }
  //   // Image Magnifier

  function magnify(imgID, zoom) {
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);
    /*create magnifier glass:*/
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");
    glass.setAttribute("id", "img-magnifier-glass");
    /*insert magnifier glass:*/
    img.parentElement.insertBefore(glass, img);
    /*set background properties for the magnifier glass:*/
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize =
      img.width * zoom + "px " + img.height * zoom + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
    /*execute a function when someone moves the magnifier glass over the image:*/
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /*prevent the magnifier glass from being positioned outside the image:*/
      if (x > img.width - w / zoom) {
        x = img.width - w / zoom;
      }
      if (x < w / zoom) {
        x = w / zoom;
      }
      if (y > img.height - h / zoom) {
        y = img.height - h / zoom;
      }
      if (y < h / zoom) {
        y = h / zoom;
      }
      /*set the position of the magnifier glass:*/
      glass.style.left = x - w + "px";
      glass.style.top = y - h + "px";
      /*display what the magnifier glass "sees":*/
      glass.style.backgroundPosition =
        "-" + (x * zoom - w + bw) + "px -" + (y * zoom - h + bw) + "px";
    }
    function getCursorPos(e) {
      var a,
        x = 0,
        y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    }
  }

  //   // Image Magnifier
  return (
    <>
      <Navbar></Navbar>
      {detailsStatus !== "success" ? (
        <PreLoader />
      ) : (
        <>
          <section id={ProductDetails.slug}></section>
          <div className="product-details">
            <div className="row">
              <div className="col-6 mob-col-12 image-section">
                <div
                  className="img-magnifier-container"
                  onMouseEnter={() => {
                    magnify("big-image", 1.5);
                  }}
                  onMouseLeave={() => {
                    if (
                      document.getElementById("img-magnifier-glass") !== null
                    ) {
                      document.getElementById("img-magnifier-glass").remove();
                    }
                  }}
                >
                  <img
                    id="big-image"
                    src={ProductDetails.images[0].src}
                    alt=""
                    srcSet=""
                  />
                </div>
                <div className="row">
                  {ProductDetails.images.map((image, key) => (
                    <div className="col-3">
                      <img
                        src={image.src}
                        alt=""
                        srcSet=""
                        onClick={() => {
                          changeBigimage(image.src);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-6 mob-col-12">
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
                        <strike className="regular">
                          {ProductDetails.regular_price}
                        </strike>
                      </sub>
                    ) : null}
                    {ProductDetails.price}/-
                  </p>
                  <div className="location">
                    <h4>Call for your pickup:</h4>
                    {branchLocation && branchLocation.length
                      ? branchLocation.map((branch, key) => (
                          <div className="row branch">
                            <div className="col-8">
                              <p
                                className="branch-name"
                                dangerouslySetInnerHTML={{
                                  __html: branch.title.rendered,
                                }}
                              ></p>
                              <p>Address: {branch.acf.address}</p>
                              <p>Contact No: {branch.acf.phone}</p>
                            </div>
                            <div className="col-2">
                              <a href={`tel:${branch.acf.phone}`}>
                                <img src={call_icon} alt="" srcSet="" />
                              </a>
                            </div>
                          </div>
                        ))
                      : null}
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
                    <Related_ProductCard id={id}></Related_ProductCard>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </>
      )}
    </>
  );
}
