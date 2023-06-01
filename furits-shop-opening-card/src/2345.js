import React from "react";

class Card extends React.Component {
  render() {
    // console.log('card');
    return (
      <>
        <div className="card">
          <h3>
            <i className="fa-solid fa-store"> </i> TASTY
          </h3>
          <span id="discount">
            <i className="fa-solid fa-tag"></i> Discount 50%
          </span>
          <p id="invite">invitation for</p>
          <pre>
            GRAND
            <wbr /> OPENING
          </pre>
          <p id="dec">Tasty furits shop</p>
          <address>
            <i className="fa-solid fa-location-dot"></i> 3/693 , Little Mount ,
            Chennai - 600 021.
          </address>
          <p id="date">
            <i className="fa-solid fa-clock"></i> MON , 05.06.23{" "}
            <label>[6pm]</label>
          </p>
          <button>
            <i className="fa-solid fa-cart-shopping"> </i> Get Offer
          </button>
        </div>
      </>
    );
  }
}

export default Card;
