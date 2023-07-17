import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./allproduct.css";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const jsonData = await response.json();
      setProducts(jsonData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="body">
      <h2 className='head'>All Products</h2>
      {products.map((product) => (
        <div key={product.id}>
           
           <div className="container1">
           <Link style={{textDecoration: 'none'}}  to={`/products/${product.id}`}>
                  <div className="imgBox">
                    <div>
                      <LazyLoadImage
                        className="img"
                        src={product.image}
                        alt="noImage"
                      />
                    </div>
                  </div>
                  <div className="text">
                    <h3>{product.title}</h3>

                    <h6>
                      <div className="rate">
                        <span>{product.rating.rate}*</span> {product.rating.count}{" "}
                        Ratings.
                      </div>
                    </h6>
                    <div className="price">₹{Math.round(product.price * 10)}</div>

                    <div>
                      <p className="category">category : </p>
                      <h5>{product.category}</h5>
                    </div>
                  </div>
                  </Link>
                </div>
          
         
        </div>
      ))}
    </div>
  );
};

export default AllProducts;




// import React, { useEffect, useState } from "react";
// import "./App.css";
// 
// import { useNavigate } from "react-router-dom";
// import ProductDetails from "./ProductDetail";

// function AllProducts() {
//   const [post, setPost] = useState(null);               
//   let navigate = useNavigate();

//   useEffect(() => {
//     fetchData();
//     console.log("fetchData", fetchData());
//   }, []);
//   const fetchData = async () => {
//     const data = await fetch("https://fakestoreapi.com/products");
//     const jsonData = await data.json();
//     setPost(jsonData);

//     console.log("data.json", jsonData);
//   };
//   // const handleProductClick = (productId) => {
//   //   history.push(`/products/${productId}`);
//   //   navigate("/ProductDetail"
//   // };

//   return (
//     <div className="body">
//       {post ? (
//         <div>
//           {post.map((post) => {
//             return (
//               <div key={post.id} onClick={() => navigate("/ProductDetail")}>
//                 <ProductDetails info={post.id}></ProductDetails>
//                 <div className="container1">
//                   <div className="imgBox">
//                     <div>
//                       <LazyLoadImage
//                         className="img"
//                         src={post.image}
//                         alt="noImage"
//                       />
//                     </div>
//                   </div>
//                   <div className="text">
//                     <h3>{post.title}</h3>

//                     <h6>
//                       <div className="rate">
//                         <span>{post.rating.rate}*</span> {post.rating.count}{" "}
//                         Ratings.
//                       </div>
//                     </h6>
//                     <div className="price">₹{Math.round(post.price * 10)}</div>

//                     {/* <div>
//                       <p className="category">description : </p>
//                       <p>{post.description}</p>
//                     </div> */}

//                     <div>
//                       <p className="category">category : </p>
//                       <h5>{post.category}</h5>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <h3>loading...</h3>
//       )}
//     </div>
//   );
// }
// export default AllProducts;
