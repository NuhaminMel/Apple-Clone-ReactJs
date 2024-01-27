import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../../Four04/Four04";

export default function LearnMore() {
  const [product, setProduct] = useState([]);

  const { productUrl } = useParams();
  console.log(productUrl);
  useEffect(() => {
    fetch("http://localhost:7575/iphones")
      .then((res) => res.json())
      .then((data) => {
        const products = data;
        let filterdUrl = products.filter(
          (Object) => Object.product_url === productUrl
        );
        setProduct(filterdUrl);
        
      })
      .catch(() => console.log("Error : unable to fetch"));
  }, [productUrl]);

  console.log(product)
  let order = 0;
  return (
    <>
     {product.map((items, i) => {
                // ---------------
                order++;
                //---------------

                let displayPhones = (
                  <div key={i} className="pb-5 mx-5">
                    <div className="d-flex justify-content-between">
                      <div
                        style={{
                          height: 600,
                          width: 500,
                        }}
                        className={`order-${order % 2 == 0 ? 1 : 2}`}
                      >
                        <img src={items.product_img} />
                      </div>
                      <div
                        className={`text-center  my-auto order-${
                          order % 2 == 0 ? 2 : 1
                        } `}
                        style={{ paddingRight: 100 }}
                      >
                        <h1>
                          <b>{items.product_name}</b>
                        </h1>
                        <p>
                          <b>{items.product_brief_description}</b>
                        </p>
                        <p>Starting at {items.starting_price}</p>
                        <p>{items.price_range}</p>
                        <p>{items.product_description}</p>
                       
                      </div>
                    </div>
                  </div>
                );
                return displayPhones;
              })}
    </>
  )
}
