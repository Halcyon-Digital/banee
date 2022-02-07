import React from "react";
import { HashLink } from "react-router-hash-link";
import header_image from "../assets/images/landing-page/Header-Image.webp";
import cakeshop_image from "../assets/images/landing-page/landing-page-cake-shop-image.webp";
import invite_area_cake from "../assets/images/landing-page/invite-area-cake.webp";
import invite_area_creation from "../assets/images/landing-page/invite-area-creation.webp";
import invite_area_creation_logo from "../assets/images/landing-page/invite-area-creation-logo.webp";
import about_us_header from "../assets/images/landing-page/about-us-header.webp";
import about_us_lolipop from "../assets/images/landing-page/about-us-lolipop.webp";
import gallary from "../assets/images/landing-page/landin-page-galary.webp";
import bteb from "../assets/images/landing-page/bteb_logo.webp";
import nsd from "../assets/images/landing-page/nsda_logo.webp";
import Navbar from "../Components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <section id=""></section>
      <div className="home-page">
        <div className="hero-area">
          <div className="hero-content">
            <img src={header_image} alt="" srcSet="" />
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
                  srcSet=""
                />
                {/* <h3>Banee's Creation</h3> */}
                <p>
                  “Banee’s Creation is listed as a top rated Bakery in Dhaka. We
                  create unique cakes for all occasions and specialized in
                  custom/sculpted cakes. Click the ‘Cake Shop’ button to see
                  what kind of cake we can design for your birthday,
                  anniversary, baby shower or special events and what types of
                  food and dessert items we sell.”
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
                  srcSet=""
                />
                {/* <h3>Government Affiliations</h3> */}
                <p>
                  Banee’s Academy is a government affiliated institute to
                  provide technical education like Bakery and Food and beverage
                  production. It is the highest rated institute in Bangladesh to
                  provide professional Baking and Cooking courses. To see the
                  available courses we are currently offering, please click the
                  button ‘Enroll now’ now!
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
            <img src={about_us_lolipop} alt="" srcSet="" />
            <h3 className="title">
              <span className="sec-1">Our</span>{" "}
              <span className="sec-2">Story</span>
            </h3>
            <p className="description">
              Starting from a small online page to multiple outlets in Dhaka the
              Capital of Bangladesh is a summarized story of a widely known
              bakery and novelty Cake & Pastry shop Banee’s Creation. The
              Founder and Executive Chef of Banee’s Creation is Chef Tahmina
              Ahmed Banee, who is one of the most popular bakery and pastry
              chefs of Bangladesh started her magic in baking from her small
              kitchen and her extraordinary talent in Sugar art and customized
              fondant cakes attracted the vast social media using young
              generation from her first facebook page in 2014. Her love and
              passion for baking, humble behavior, dedication and uniqueness in
              baking soon became a demand of thousands of people that resulted
              her first outlet at Khilgaon in 2017. Later on, peoples love for
              banee’s was spreading and Chef Banee had to inaugurate multiple
              outlets in different places in Dhaka like Mirpur, Mohakhali,
              Lalmatia & Dhanmondi. Each outlet of Banee’s creation get the most
              unique opening ceremony as Chef Banee tries to make big burgers in
              every outlet launching day. The last big burger she made was a
              47Kg beef burger which is so far the biggest burger made in
              Bangladesh that also got media coverage.
              <br></br>Chef Banee has now become one of the most well-known
              women entrepreneurs in culinary field and made a Banee’s team
              consisting 25 members. However, Chef Banee never wanted to walk
              alone and started working with women empowering and opened a Govt,
              certified academy named “Banee’s Academy of Baking Science and
              Pastry Arts”, from where people can learn professional baking
              specially women and soon this academy became the best place to
              learn A to Z of Baking form, in Bangladesh. Hundreds of people
              from inside and outside of this country took training from her and
              became a successful baker. All of these would never become
              possible if she didn’t get enough support from her family members
              specially her husband Mr. Nasim Ahmed, who was always there by her
              side as a pillar and letter took the huge responsibility of the
              Chief Executive Ofiicer of Banee’s Creation and Banee’s Academy
              and her daughter Chef Shemonti Ahmed, working as a sugar artist of
              Banee’s creation and providing advanced cake decoration training
              as a master trainer of Banee’s Academy. Now Banee’s has become a
              powerful team and all of the members are working together to make
              a huge Banee’s creation chain and to serve the best quality
              service and bakery and confectionary products at every corner in
              Bangladesh.
            </p>
          </div>
          <div className="affiliations">
            <div className="container">
              <h3 className="title">
                <span className="sec-1">Our</span>{" "}
                <span className="sec-2">Affiliations</span>
              </h3>
              <div className="row">
                <div className="col-6">
                  <div className="img">
                    <img src={bteb} alt="affiliations Image" />
                    <h4>Bangladesh Technical Education Board (BTEB)</h4>
                  </div>
                </div>
                <div className="col-6">
                  <div className="img">
                    <img src={nsd} alt="affiliations Image" />
                    <h4>NSDA (National Skills Development Authority)</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="galary">
          <img src={gallary} alt="" srcSet="" />
        </div>
      </div>
    </>
  );
}
