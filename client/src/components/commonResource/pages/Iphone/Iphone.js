import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

export default function Iphone() {
  const [iphone, setIphone] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7575/iphones")
      .then((res) => res.json())
      .then((data) => {
        setIphone(data);
      })
      .catch(() => console.log("Error : unable to fetch"));
  }, []);
//   console.log(iphone)
  let order = 0;
  return (
    <div>
      <div>
        <div>
          <div className="mb-5 mt-5 text-center">
            <h2>
              <b>Iphones</b>
            </h2>
            <h3>The best for the brightest.</h3>
          </div>
          <div>
            <div>
              {iphone.map((items, i) => {
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
                        className={`order-${order % 2 === 0 ? 1 : 2}`}
                      >
                        <img src={items.product_img} alt="product"/>
                      </div>
                      <div
                        className={`text-center  my-auto order-${
                          order % 2 === 0 ? 2 : 1
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
                        <Link to={`/iphones/${items.product_url}`}>learn more</Link>
                        {/* <Link to={`productUrl`}>learn more</Link> */}
                      </div>
                    </div>
                  </div>
                );
                return displayPhones;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
