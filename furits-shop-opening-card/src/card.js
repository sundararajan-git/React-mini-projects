import React from "react";
import styles from "./card.module.css";

class Card extends React.Component {
  arr = [
    "https://w0.peakpx.com/wallpaper/527/38/HD-wallpaper-strawberries-food-fruit-milk-red-splash-strawberry-yellow.jpg",
    "https://w0.peakpx.com/wallpaper/166/518/HD-wallpaper-watermelon-food-fruit-green-red-slices-splash-water-splash.jpg",
    "https://w0.peakpx.com/wallpaper/756/46/HD-wallpaper-peach-food-fruits-orange-red-slices-splash-water-water-splash.jpg",
    "https://w0.peakpx.com/wallpaper/7/430/HD-wallpaper-orange-slices-citrus-fruits.jpg",
  ];

  state = { image: [], id: "" };

  componentDidMount() {
    setInterval(() => {
      let num = Math.floor(Math.random() * this.arr.length);
      let out = this.arr[num];
      this.setState({ image: [out], id: num });
    }, 1000);
  }
  render() {
    // console.log("card....");
    const { id } = this.state;
    return (
      <>
        <div className="container">
          <div className="image">
            <img src={this.state.image} alt="Furits"></img>
          </div>
          <Content id={id} />
        </div>
      </>
    );
  }
}

class Content extends React.Component {
  render() {
    // console.log("Content....");
    const { id } = this.props;
    return (
      <>
        <div
          id="card"
          className={
            id === 0
              ? styles.yellow
              : id === 1
              ? styles.green
              : id === 2
              ? styles.red
              : styles.blue
          }
        >
          <h3>
            <i className="fa-solid fa-store"> </i> TASTY
          </h3>
          <span id="discount">
            <i className="fa-solid fa-tag"></i> Discount 50%
          </span>
          <p
            id="invite"
            className={
              id === 0
                ? styles.y
                : id === 1
                ? styles.g
                : id === 2
                ? styles.r
                : styles.b
            }
          >
            invitation for
          </p>
          <pre>
            GRAND
            <wbr />       OPENING
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
          <button
            className={
              id === 0
                ? styles.btnyellow
                : id === 1
                ? styles.btngreen
                : id === 2
                ? styles.btnred
                : styles.btnblue
            }
          >
            <i className="fa-solid fa-cart-shopping"> </i> Get Offer
          </button>
        </div>
      </>
    );
  }
}
export default Card;
