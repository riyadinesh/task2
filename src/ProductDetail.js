import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ProductDetail.css"

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const jsonData = await response.json();
      setProduct(jsonData);
      console.log("single",jsonData);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  if (!product) {
    return <h2>Loading product details...</h2>;
  }

  return (
    
     <div>
      
      <div><img className="img2" src={product.image} alt="noImage"/></div>
      
      <div className="container2">
      <div className='title2'><p><h1>{product.title}</h1> </p></div>
      <div><p><h3>₹{Math.round(product.price * 10)}</h3></p></div>
      <div className="rate2">
      <span>{product.rating.rate}*</span> {product.rating.count}Ratings.</div>
      <div className="body2">
       
      
      <div> <p> <h3>{product.description}</h3></p></div>
      
      <button className='btn'>order now</button>
      
      </div>
      </div>
    </div>
  );
};

export default ProductDetails;




