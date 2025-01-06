import React from 'react';
import './Products.css';
import products from '../../data/ProductsAll';
import {Link} from 'react-router-dom';

function Products() {
  return (
    <>
    <div className='all-products'>
        <div className='wrapper'>
            <div className='top_bar'>
                <ul>
                    <li className='home'>
                        <a href='#'>Home </a>
                        <span>/</span>
                    </li>
                    <li><a href='#'>Products</a></li>
                </ul>
            </div>

            <div className="products">
                <ul>
                    {products.map((product) => (
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
            </div>

        </div>
    </div>
    </>
  )
}

export default Products;
