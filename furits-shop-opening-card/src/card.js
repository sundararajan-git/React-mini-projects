import React from "react";

class Card extends React.Component {
  render() {
    return (
      <>
        <div className="card">
          <h3>
            <i class="fa-solid fa-store"> </i> TASTY
          </h3>
          <span id="discount">
            <i class="fa-solid fa-tag"></i> Discount 50%
          </span>
          <p id="invite">invitation for</p>
          <pre>
               GRAND
            <wbr />        OPENING
          </pre>
          <address>
            <i class="fa-solid fa-location-dot"></i> 3/693 , Little Mount ,
            Chennai - 600 021.
          </address>
          <p id="date">
          <i class="fa-solid fa-clock"></i> MON , 05.06.23 <label>[6pm]</label>
          </p>
          <button>
            <i class="fa-solid fa-cart-shopping"> </i> Order Now
          </button>
        </div>
      </>
    );
  }
}

export default Card;
