import React, { useState } from "react";
import "./CSS_certificate.jpg";

export default function Slider() {
  const [image, setimage] = useState("image-slidersrcCSS_certificate.jpg");
  return (
    <div>
      <img src={image}> </img>
    </div>
  );
}
