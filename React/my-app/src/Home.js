
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleQuickBookClick = () => {
    navigate('/login');
  };

  return (
    <div className="footer-container">
      <div className="content-wrap">
        <main>
          <div className="main-content">
            <h1>Welcome to Our Service</h1>
            <p>Your success is our priority.</p>
            <button className="quick-book-button" onClick={handleQuickBookClick}>
              Quick Book
            </button>
          </div>
          <div className="carousel-container">
            <Carousel autoPlay infiniteLoop showThumbs={false}>
              <div>
                <img src="/book1.png" alt="Imager 1" />
              </div>
              <div>
                <img className="two" src="/imgs.jpg" alt="Imager 2" />
              </div>
              <div>
                <img className="three" src="/book3.png" alt="Imager 3" />
              </div>
            </Carousel>
          </div>
        </main>

        <section id="about" className="about-us">
          <h2><b>About Us</b></h2>
          <p><b>Welcome to My Website! We are dedicated to making your grocery shopping experience easy and convenient. Offering a wide range of fresh, high-quality products, we ensure that you get the best items delivered right to your doorstep. Our team is committed to providing excellent customer service and helping you find everything you need. Whether you're looking for everyday essentials or specialty items, we strive to meet all your grocery needs. Thank you for choosing us as your trusted grocery provider. We look forward to serving you and making your shopping experience delightful.</b></p>
        </section>

        <section id="top-products" className="top-products">
          <h2><b>Top Products</b></h2>
          <div className="products-grid">
            <div className="product-card">
              <img src="/cheese.png" alt="Product 1" />
              <h3>Cheese</h3>
              <p>Rs 70</p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
            <div className="product-card">
              <img src="/butter.png" alt="Product 2" />
              <h3>Butter</h3>
              <p>Rs 30</p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
            <div className="product-card">
              <img src="/elaichi.png" alt="Product 3" />
              <h3>Elaichi</h3>
              <p>Rs 80</p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
            <div className="product-card">
              <img src="/rajma.png" alt="Product 3" />
              <h3>Rajma</h3>
              <p>Rs 90</p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
            <div className="product-card">
              <img src="/toor.png" alt="Product 3" />
              <h3>Toor dal</h3>
              <p>Rs 180</p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
            <div className="product-card">
              <img src="/soybeans.png" alt="Product 3" />
              <h3>Soybeans</h3>
              <p>Rs 70</p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
            <div className="product-card">
              <img src="/milk.png" alt="Product 3" />
              <h3>Milk</h3>
              <p>Rs 60</p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
            <div className="product-card">
              <img src="/lassi.png" alt="Product 3" />
              <h3>Lassi</h3>
              <p>Rs 30</p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
            
            
            {/* Add more product cards as needed */}
          </div>
        </section>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <div className="social-media-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/twitter-logo-4.png" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="Instagram" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
