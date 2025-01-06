import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import categories from '../../data/Categories';
import products from '../../data/ProductsList';
import './Home.css';

const Home = ({ searchQuery }) => {
  const filteredProducts = searchQuery
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  return (
    <>
      <div className='spotlight wrapper'>
        <div className='top_banner'>
          <div className='left'>
            <span>
              <img src='/assets/1200px-Apple_gray_logo 1.png' alt='iPhone 14' />
              <p>iPhone 14 Series</p>
            </span>
            <h2>Up to 10% <br /> off Voucher</h2>
            <a href='#' className='button'>Shop Now <img src="/assets/white-arrow-right.png" alt="white-arrow-right" /></a>
          </div>
          <div className='right'>
            <img src='/assets/hero_endframe__cvklg0xk3w6e_large 2.png' alt='hero-image' />
          </div>
        </div>

        <div className='category'>
          <div className='top'>
            <img src='/assets/Rectangle 18.png' alt='rectangle' />
            <h4>Categories</h4>
          </div>
          <h3>Browse By Category</h3>
          <div className='devices'>
            <ul id='device-list'>
              {categories.map((category) => (
                <li
                  key={category.id}
                  className='category-card'
                >
                  <img src={`/assets/${category.image}.png`} alt={category.name} />
                  <h5>{category.name}</h5>
                </li>
              ))}
            </ul>
          </div>

          <div className='products'>
            {filteredProducts.length > 0 ? (
              <ul>
                {filteredProducts.map((product) => (
                  <li key={product.id} className="product-card">
                    <Link to={`/product/${product.id}`}>
                      <div className="img-container">
                        <span className="new"></span>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="product-image"
                        />
                        <span className="icons">
                          <img src="/assets/Fill Heart.png" alt="wishlist" className="wishlist" />
                          <img src="/assets/Fill Eye.png" alt="eye" className="eye" />
                        </span>
                      </div>
                    </Link>
                    <button className="add-to-cart">Add To Cart</button>
                    <div className="product-details">
                      <h4>{product.name}</h4>
                      <span className="bottom">
                        <p className="product-price">${product.price}</p>
                        <img src={product.star} alt="star" className="star" />
                        <p className="rating">{product.rating}</p>
                      </span>
                      <span className="circle">
                        <img src={product.color} alt="clr" className="clr" />
                        <img src={product.red} alt="red-color" className="red" />
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="no-products">
                <h2>Product not found</h2>
              </div>
            )}
          </div>

          <div className="view-all-btn">
            <Link to="/products">
              <button>View All Products</button>
            </Link>
          </div>
        </div>
      </div>
        
      <div className='services wrapper'>
        <ul>
          <li>
            <span className='service-img'>
              <img src='/assets/icon-delivery.png' alt='service-1' />
            </span>
            <h5>FREE AND FAST DELIVERY</h5>
            <p>Free delivery for all orders over $140</p>
          </li>

          <li>
            <span className='service-img'>
              <img src='/assets/Icon-Customer service.png' alt='service-1' />
            </span>
            <h5>24/7 CUSTOMER SERVICE</h5>
            <p>Friendly 24/7 customer support</p>
          </li>

          <li>
            <span className='service-img'>
              <img src='/assets/shield-tick.png' alt='service-1' />
            </span>
            <h5>MONEY BACK GUARANTEE</h5>
            <p>We return money within 30 days</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
