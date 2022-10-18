// import "./Sass/_SlimBar.scss";
// import "./Sass/_Header.scss";
// import "./Sass/_Banner.scss";
// import "./Sass/_Service.scss";
// import "./Sass/_Catagory.scss";
// import "./Sass/app.scss";
import "./Sass/app.scss";

import banner from "./assets/pet-banner.png";
import dog from "./assets/img-dog.png";
import ic_support from "./assets/icon-support.png";
import ic_delivery from "./assets/icon-delivery.png";
import ic_sercurity from "./assets/icon-sercurity.png";
import cat_toy from "./assets/cat-toy.png";
import cat_food from "./assets/cat-food.png";
import dog_toy from "./assets/dog-toy.png";
import dog_food from "./assets/dog-food.png";
import ic_heart from "./assets/heart.png";
import imgInfo from "./assets/img_info.png";
import vitalCare from "./assets/vital_care.png";
import seller1 from "./assets/seller1.png";
import seller2 from "./assets/seller2.png";
import seller3 from "./assets/seller3.png";
import seller4 from "./assets/seller4.png";
import { Header } from "./components/header/Header";
function App() {
  return (
    <div className="">
      <div className="container slim-bar">
        <p className="text-slim-bar">
          Free Shipping USA & Worldwide on All Orders
        </p>
      </div>
      <Header />
      <div className="container banner">
        <div className="banner-left">
          <div className="banner-about">
            <h1 className="banner-title">Pet food of Supermarket</h1>
            <p className="banner-description">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form,
            </p>
            <div className="banner-group-btn">
              <button className="btn-shop-to">Shop to</button>
              <button className="btn-shop-now">Shop now</button>
            </div>
          </div>
        </div>
        <div className="banner-right">
          <img className="banner-img" src={banner} alt="" />
        </div>
      </div>

      <div className="container services">
        <div className="group-services">
          <div className="service-top">
            <img src={dog} alt="" />
            <div className="service-slogan">
              <h1 className="slogan-red">What your pet needs,</h1>
              <h1 className="slogan-normal">when they need it.</h1>
            </div>
          </div>
          <div className="service-bottom">
            <div className="group">
              <div className="service-support">
                <img className="service-icon" src={ic_support} alt="" />
              </div>
              <h2 className="service-title">24/7 Support</h2>
              <p className="service-subtitle">
                Shop online to get orders over $35 shipped fast and free.
              </p>
            </div>
            <div className="group">
              <div className="service-delivery">
                <img className="service-icon" src={ic_delivery} alt="" />
              </div>
              <h2 className="service-title">24/7 Support</h2>
              <p className="service-subtitle">
                Shop online to get orders over $35 shipped fast and free.
              </p>
            </div>
            <div className="group">
              <div className="service-sercurity">
                <img className="service-icon" src={ic_sercurity} alt="" />
              </div>
              <h2 className="service-title">24/7 Support</h2>
              <p className="service-subtitle">
                Shop online to get orders over $35 shipped fast and free.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container catagories">
        <div className="group-catagory">
          <div className="catagory-title">
            <h1 className="title-red">Top</h1>
            <h1 className="title-normal">catagories</h1>
          </div>
          <div className="list-catagory">
            <div className="item-cat-toy">
              <img src={cat_toy} alt="" />
              <h3 className="item-name">Cat Toys</h3>
            </div>
            <div className="item-cat-food">
              <img src={cat_food} alt="" />
              <h3 className="item-name">Cat Toys</h3>
            </div>
            <div className="item-dog-toy">
              <img src={dog_toy} alt="" />
              <h3 className="item-name">Cat Toys</h3>
            </div>
            <div className="item-dog-food">
              <img src={dog_food} alt="" />
              <h3 className="item-name">Cat Toys</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container info">
        <div className="info-left">
          <div className="info-title">
            <img className="icon-heart" src={ic_heart} alt="" />
            <img className="icon-care" src={vitalCare} alt="" />
          </div>
          <p className="info-subtitle">
            Save big annually with our veterinarian recommended wellness plan.
          </p>
          <button className="btn-shop-now">Shop now</button>
        </div>
        <div className="info-right">
          <img src={imgInfo} alt="" />
        </div>
      </div>

      <div className=" container seller">
        <div className="list-seller">
          <div className="card-item">
            <img className="item-img" src={seller1} alt="" />
            <span className="item-rating">5 sao</span>
            <h4 className="item-name">Nam justo libero porta ege</h4>
            <span className="item-price">$85.00</span>
          </div>
          <div className="card-item">
            <img className="item-img" src={seller1} alt="" />
            <span className="item-rating">5 sao</span>
            <h4 className="item-name">Nam justo libero porta ege</h4>
            <span className="item-price">$85.00</span>
          </div>
          <div className="card-item">
            <img className="item-img" src={seller1} alt="" />
            <span className="item-rating">5 sao</span>
            <h4 className="item-name">Nam justo libero porta ege</h4>
            <span className="item-price">$85.00</span>
          </div>
          <div className="card-item">
            <img className="item-img" src={seller1} alt="" />
            <span className="item-rating">5 sao</span>
            <h4 className="item-name">Nam justo libero porta ege</h4>
            <span className="item-price">$85.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
