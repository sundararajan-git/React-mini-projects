import React from "react";

class Image extends React.Component {
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
    }, 2000);
  }
  render() {
    // console.log('image');
    return (
      <>
        <div className="image">
          <img src={this.state.image} alt="Furits"></img>
        </div>
      </>
    );
  }
}

export default Image;
