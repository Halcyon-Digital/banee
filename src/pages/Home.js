import React from "react";
import { HashLink } from "react-router-hash-link";
import hero_cake from "../assets/images/landing-page/hero-cake.png";
import header_image from "../assets/images/landing-page/Header-Image.jpg";
import cakeshop_image from "../assets/images/landing-page/landing-page-cake-shop-image.png";
import invite_area_cake from "../assets/images/landing-page/invite-area-cake.png";
import invite_area_creation from "../assets/images/landing-page/invite-area-creation.png";
import invite_area_creation_logo from "../assets/images/landing-page/invite-area-creation-logo.png";
import about_us_header from "../assets/images/landing-page/about-us-header.png";
import about_us_lolipop from "../assets/images/landing-page/about-us-lolipop.png";
import gallary from "../assets/images/landing-page/landin-page-galary.png";
import Navbar from "../Components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <section id=""></section>
      <div className="home-page">
        <div className="hero-area">
          <div className="hero-content">
            <img src={header_image} alt="" srcset="" />
          </div>
        </div>
        <div className="invite-area invite-area-cake">
          <div className="cake-shop">
            <div className="row">
              <div className="col-6">
                <img src={cakeshop_image} alt="" />
              </div>
              <div className="col-4 tab-col-6 description">
                <img
                  className="invite-area-cake-logo"
                  src={invite_area_cake}
                  alt=""
                  srcset=""
                />
                <h3>Lorem Ipsum</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                  facere possimus beatae repellat amet. Amet!
                </p>
                <p>
                  <HashLink to="/creation#">
                    <span className="shop-btn">Cake Shop</span>
                  </HashLink>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="invite-area invite-area-creation">
          <div className="creation">
            <div className="row">
              <div className="col-4 tab-col-6 description">
                <img
                  className="invite-area-creation-logo"
                  src={invite_area_creation_logo}
                  alt=""
                  srcset=""
                />
                <h3>Lorem Ipsum</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                  facere possimus beatae repellat amet. Amet!
                </p>
                <p>
                  <HashLink to="/academy#">
                    <span className="enroll-btn">Enroll Now</span>
                  </HashLink>
                </p>
              </div>
              <div className="col-6">
                <img src={invite_area_creation} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="about-us">
          <img className="about-us-header" src={about_us_header} alt="" />
          <div className="about-us-para">
            <img src={about_us_lolipop} alt="" srcset="" />
            <h3 className="title">
              <span className="sec-1">About</span>{" "}
              <span className="sec-2">us</span>
            </h3>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              veniam iste blanditiis, minima atque vitae consectetur amet,
              aliquid voluptate cum libero? Et saepe fugiat officia, aliquam
              blanditiis vitae delectus accusantium necessitatibus maiores
              consequuntur dolor fugit dignissimos. Aperiam rerum, repellat quia
              neque dolores velit magnam, quaerat et earum rem tempore nulla qui
              harum officiis voluptatibus laborum soluta hic tempora ab.
              Quisquam quasi animi unde sint facilis sequi doloribus ducimus
              delectus laudantium? Eos doloremque ut nostrum nesciunt rem
              mollitia ea delectus! Iure eaque repellat iste, soluta quasi
              tenetur vitae harum quam dignissimos maiores molestiae cumque
              libero nisi assumenda? Expedita a dignissimos sequi laudantium
              eaque reprehenderit ipsam veniam. Dolore nulla facilis veniam
              fugit officia. Quasi adipisci quod similique reiciendis iusto
              doloremque laboriosam soluta vel odit, animi dolorem quibusdam
              nihil illo quia nobis dignissimos, debitis neque dolorum ea dolor
              accusamus. Voluptatem, at. Ducimus necessitatibus nemo eos quia,
              beatae, architecto quae ipsam fugit provident culpa aliquam,
              mollitia soluta nisi voluptatem assumenda aut debitis dolorem rem
              iste quod. Sunt, earum. Quibusdam aperiam nihil obcaecati sunt eos
              rerum, possimus voluptates quia cupiditate dolor aspernatur
              voluptatum ipsa, ullam vitae sint veritatis accusamus temporibus
              quam ad magni consequatur! Natus aperiam reprehenderit est. Fugiat
              adipisci voluptas, eaque totam, quisquam id est harum voluptate
              officiis blanditiis, eligendi laborum labore corporis neque
              sapiente? Cupiditate, nihil? Quam eveniet cupiditate, magnam
              placeat laboriosam iure, voluptatibus cumque culpa enim harum
              explicabo esse natus labore ducimus facilis sint quisquam
              voluptates ipsa nesciunt deleniti unde, libero fugit. Ratione
              autem corrupti, molestiae ullam enim illum dolor obcaecati
              reprehenderit.
            </p>
          </div>
        </div>
        <div className="galary">
          <img src={gallary} alt="" srcset="" />
        </div>
      </div>
    </>
  );
}
