import React from "react";
import image from "../assets/images/new.png";
export default function MyImage(props) {
  return (
    <div class="w3-display-container">
      <img src={image} style={{ width: "100%" }} alt="Avatar" />
      <div class="w3-display-bottomleft w3-container w3-text-black">
        <h2 style={{ color: "white" }}>{props.name}</h2>
      </div>
    </div>
  );
}
