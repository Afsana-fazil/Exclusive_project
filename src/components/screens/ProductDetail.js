import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productData from '../../data/ProductData';
import productsAll from '../../data/ProductsAll';
import './ProductDetail.css';

function ProductDetail() {
  const { productId } = useParams();
  const product = productData.find(p => p.id === parseInt(productId));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4); 

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 480) {
        setItemsPerPage(1); 
      } else if (window.innerWidth <= 768) {
        setItemsPerPage(2); 
      } else if (window.innerWidth <= 1200) {
        setItemsPerPage(3); 
      } else {
        setItemsPerPage(4); 
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex(prevIndex => Math.min(prevIndex + itemsPerPage, productsAll.length - itemsPerPage));
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - itemsPerPage, 0));
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  const relatedProducts = productsAll.filter(
    (relatedProduct) => relatedProduct.id !== product.id
  );

  const visibleProducts = relatedProducts.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="product-detail wrapper">
      <div className="breadcrumb">
        <a href="/">Home</a>
        <span>/</span>
        <a href="/gaming">Gaming</a>
        <span>/</span>
        <p>{product.name}</p>
      </div>

      <div className="product-main">
        <img src={product.image} alt={product.name} className='main-img' />
        <div className="product-data">
          <h2>{product.name}</h2>
          <span className='rating'>
            <img src={product.star} alt='star' />
            <span className='status'>
              <p>{product.reviews}</p>
              <small>{product.stockStatus}</small>
            </span>
          </span>
          <p className="price">${product.price}</p>
          <p className='description'>{product.description}</p>
          <hr />

          <div className='colors'>
            <h4>Colors:</h4>
            <span className='clr'>
              <img src={product.colors} alt='color' />
              <img src={product.red} alt='red' />
            </span>
          </div>

          <div className='delivery'>
            <span className='free'>
              <img src={product.deliveryImage} alt='delivery' />
              <small>
                <h5>{product.delivery}</h5>
                <a href='#'>{product.postalCode}</a>
              </small>
            </span>
            <span className='return'>
              <img src={product.returnImage} alt='return' />
              <small>
                <h5>{product.return}</h5>
                <p>{product.returnPolicy}<a href='#'>Details</a></p>
              </small>
            </span>
          </div>
        </div>
      </div>

      <div className="related-items">
        <div className='top'>
          <img src='/assets/Rectangle 18.png' alt='rectangle' />
          <h3>Related Items</h3>
        </div>
        <div className='related-content'>
          <div className="related-products">
            {visibleProducts.map(relatedProduct => (
              <div key={relatedProduct.id} className="product-card">
                <div className='img-container'>
                  <span className='new'></span>
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="product-image"
                  />
                  <span className='icons'>
                    <img src='/assets/Fill Heart.png' alt='wishlist' className='wishlist' />
                    <img src='/assets/Fill Eye.png' alt='eye' className='eye' />
                  </span>
                </div>

                <button className="add-to-cart">Add To Cart</button>

                <div className="product-details">
                  <h4>{relatedProduct.name}</h4>
                  <span className='bottom'>
                    <p className="product-price">${relatedProduct.price}</p>
                    <img src={relatedProduct.star} alt='star' className='star' />
                    <p className='rating'>{relatedProduct.rating}</p>
                  </span>
                  {relatedProduct.color && (
                    <span className='circle'>
                      <img src={relatedProduct.color} alt='clr' className='clr' />
                      <img src={relatedProduct.red} alt='red-color' className='red' />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="arrow-btn">
            <button onClick={handlePrev} disabled={currentIndex === 0}>
              <img src='/assets/icons_arrow-left.png' alt='left-arrow' className='arrow' />
            </button>
            <button onClick={handleNext} disabled={currentIndex + itemsPerPage >= relatedProducts.length}>
              <img src='/assets/icons arrow-right.png' alt='right-arrow' className='arrow' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
