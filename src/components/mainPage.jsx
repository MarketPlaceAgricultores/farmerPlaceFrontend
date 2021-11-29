import React, { Fragment } from "react";
import './styles/responsive.css';
import './styles/style.css';
import slider from './assets/slider-bg.jpg'
import about from './assets/about-img.jpg'
import p1 from './assets/p1.png'
import p2 from './assets/p2.png'
import p3 from './assets/p3.png'
import about2 from './assets/about-img2.jpg'
import client from "./assets/client.jpg"

export default function MainPage(){
    return (
        <Fragment>



<div className="hero_area">

 
    <section className="slider_section ">
      <div className="slider_bg_box">
        <img src={slider} alt=""/>
      </div>
      <div id="customCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 col-lg-6">
                  <div className="detail-box">
                    <h1>
                      We Bring To You <br/>
                      Tea Products
                    </h1>
                    <p>
                      Dolorem vitae a sit iusto cum quos rerum, incidunt vero pariatur adipisci molestiae temporibus animi cumque!
                    </p>
                   
                      Contact Us
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 col-lg-6">
                  <div className="detail-box">
                    <h1>
                      We Bring To You <br/>
                      Tea Products
                    </h1>
                    <p>
                      Dolorem vitae a sit iusto cum quos rerum, incidunt vero pariatur adipisci molestiae temporibus animi cumque!
                    </p>
                      Contact Us
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 col-lg-6">
                  <div className="detail-box">
                    <h1>
                      We Bring To You <br/>
                      Tea Products
                    </h1>
                    <p>
                      Dolorem vitae a sit iusto cum quos rerum, incidunt vero pariatur adipisci molestiae temporibus animi cumque!
                    </p>
                      Contact Us
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <ol className="carousel-indicators">
            <li data-target="#customCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#customCarousel" data-slide-to="1"></li>
            <li data-target="#customCarousel" data-slide-to="2"></li>
          </ol>
        </div>
      </div>
    </section>

  </div>



  <section className="about_section about_section1 layout_padding ">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="img-box">
            <img src={about} alt=""/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                About Us
              </h2>
            </div>
            <p>
              Eveniet, laboriosam omnis. Nemo itaque ullam perferendis corporis eius cupiditate fugiat quisquam, veritatis ratione quasi vel in modi at ipsa placeat, similique dignissimos consequuntur ipsum, molestias tempore. Voluptatem, fugiat itaque?
            </p>
            <p>
              Necessitatibus ut doloremque facere a unde cupiditate consequuntur eos et voluptatibus optio aut, expedita reiciendis libero impedit quo cum ipsa cumque aliquam officia quos, voluptate sint quae consectetur. Necessitatibus, animi?

            </p>
              Read More
          </div>
        </div>
      </div>
    </div>
  </section>


  <section className="product_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Our Poducts
        </h2>
        <p>
          Which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't an
        </p>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4 mx-auto">
          <div className="box">
            <div className="img-box">
              <img src={p1} alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Chamomile Tea
              </h5>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>$</span> 100.00
                </h6>
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  Add To Cart
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mx-auto">
          <div className="box">
            <div className="img-box">
              <img src={p2} alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Herbal Tea
              </h5>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>$</span> 200.00
                </h6>
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  Add To Cart
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mx-auto">
          <div className="box">
            <div className="img-box">
              <img src={p3} alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Linden Tea
              </h5>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>$</span> 200.00
                </h6>
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  Add To Cart
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="about_section about_section2 layout_padding ">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                What Makes Our Tea Special...
              </h2>
            </div>
            <p>
              Iusto aperiam ex incidunt saepe. Dolor aliquam iste modi officia in qui, rem delectus! Eos ratione, fugiat, reprehenderit velit nulla commodi aliquid excepturi nesciunt voluptate amet autem, sequi sit consectetur!
            </p>
              Read More
          </div>
        </div>
        <div className="col-md-6">
          <div className="img-box">
            <img src={about2} alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="client_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          What says our customers
        </h2>
      </div>
      <div id="carouselExample2Indicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-7 mx-auto">
                <div className="client_container">
                  <div className="client_detail">
                    <p>
                      <i className="fa fa-quote-left" aria-hidden="true"></i> &nbsp;
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                      alteration in The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                      letters, generators on the Internet tend to repeat predefined chunks as necessary &nbsp;
                      <i className="fa fa-quote-right" aria-hidden="true"></i>
                    </p>
                  </div>
                  <div className="img-box">
                    <img src="./assets/client.jpg " alt=""/>
                  </div>
                  <div className="name">
                    <h5>
                      Alina Johnson
                    </h5>
                    <h6>
                      <span>
                        Customer
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-7 mx-auto">
                <div className="client_container">
                  <div className="client_detail">
                    <p>
                      <i className="fa fa-quote-left" aria-hidden="true"></i> &nbsp;
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                      alteration in The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                      letters, generators on the Internet tend to repeat predefined chunks as necessary &nbsp;
                      <i className="fa fa-quote-right" aria-hidden="true"></i>
                    </p>
                  </div>
                  <div className="img-box">
                    <img src="./assets/client.jpg " alt=""/>
                  </div>
                  <div className="name">
                    <h5>
                      Alina Johnson
                    </h5>
                    <h6>
                      <span>
                        Customer
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-7 mx-auto">
                <div className="client_container">
                  <div className="client_detail">
                    <p>
                      <i className="fa fa-quote-left" aria-hidden="true"></i> &nbsp;
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                      alteration in The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                      letters, generators on the Internet tend to repeat predefined chunks as necessary &nbsp;
                      <i className="fa fa-quote-right" aria-hidden="true"></i>
                    </p>
                  </div>
                  <div className="img-box">
                    <img src={client} alt=""/>
                  </div>
                  <div className="name">
                    <h5>
                      Alina Johnson
                    </h5>
                    <h6>
                      <span>
                        Customer
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol className="carousel-indicators">
          <li data-target="#carouselExample2Indicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExample2Indicators" data-slide-to="1"></li>
          <li data-target="#carouselExample2Indicators" data-slide-to="2"></li>
        </ol>
      </div>
    </div>
  </section>
  
  <section className="info_section">

    <div className="container">
      <div className="contact_nav">
          <i className="fa fa-phone" aria-hidden="true"></i>
          <span>
            Call : +01 123455678990
          </span>
        
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <span>
            Email : demo@gmail.com
          </span>
       
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <span>
            Location
          </span>
      </div>
      <div className="col-md-7 mx-auto px-0">
        <div className="info_form_social_box">
          <h4>
            SIGN UP TO OUR NEWSLETTER
          </h4>
          <form action="">
            <input type="text" placeholder="Enter Your Email" />
            <button type="submit">
              Subscribe
            </button>
          </form>
         
        </div>
      </div>
    </div>
  </section>
  <footer className="footer_section">
    <div className="container">
      <p>
        &copy; <span id="displayYear"></span> All Rights Reserved By
      </p>
    </div>
  </footer>






        </Fragment>
    )
}