import React, { lazy, useEffect, useState } from "react";
import "./App.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchData();
    console.log("fetchData", fetchData());
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const jsonData = await data.json();
    setPost(jsonData);

    console.log("data.json", setPost);
  };
  return (
    <div className="body">
      {post ? (
        <div>
          {post.map((post, index) => {
            return (
              <div key={index}>
                <div className="container1">
                  <div className="imgBox">
                    <div>
                      <LazyLoadImage className="img" src={post.image} alt="noImage" />
                    </div>
                  </div>
                  <div className="text">
                    <h3>{post.title}</h3>

                    <h6>
                      <div className="rate">
                        <span>{post.rating.rate}*</span> {post.rating.count}{" "}
                        Ratings.
                      </div>
                    </h6>
                    <div className="price">₹{Math.round(post.price * 10)}</div>

                    {/* <div>
                      <p className="category">description : </p>
                      <p>{post.description}</p>
                    </div> */}

                    <div><p className="category">category : </p><h5>{post.category}</h5>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h3>loading...</h3>
      )}
    </div>
  );
}
export default App;
