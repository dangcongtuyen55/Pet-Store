// import "./Sass/_SlimBar.scss";
// import "./Sass/_Header.scss";
// import "./Sass/_Banner.scss";
// import "./Sass/_Service.scss";
// import "./Sass/_Catagory.scss";
// import "./Sass/app.scss";
import "./Sass/app.scss";
import logo from "./assets/logo-header.png";
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
function App() {
  return (
    <div className="">
      <div className="slim-bar">
        <p className="text-slim-bar">
          Free Shipping USA & Worldwide on All Orders
        </p>
      </div>

      <div className="container header">
        <div className="search-header">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="search-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <div className="menu-header">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Collection</a>
          <div>
            <img src={logo} alt="" className="logo-header" />
          </div>
          <a href="#">Services</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="option-menu">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="option-menu-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="option-menu-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </a>
        </div>
      </div>

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
            <div className="service-support">
              <img className="service-icon" src={ic_support} alt="" />
              <h2 className="service-title">24/7 Support</h2>
              <p className="service-subtitle">
                Shop online to get orders over $35 shipped fast and free.
              </p>
            </div>
            <div className="service-delivery">
              <img className="service-icon" src={ic_delivery} alt="" />
              <h2 className="service-title">24/7 Support</h2>
              <p className="service-subtitle">
                Shop online to get orders over $35 shipped fast and free.
              </p>
            </div>
            <div className="service-sercurity">
              <img className="service-icon" src={ic_sercurity} alt="" />
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
