import React from "react";
import "./styles.css";

var h1 = "";
var dateTime = new Date();
var time = dateTime.getHours();
console.log(time);

const customStyle = {
  color: ""
};

if (time === 24 || time < 12) {
  h1 = "Good Morning";
  customStyle.color = "gred";
} else if (time >= 12 && time < 18) {
  h1 = "Good Afternoon";
  customStyle.color = "green";
} else if (time >= 18 && time < 24) {
  h1 = "Good Evening";
  customStyle.color = "blue";
}

var image = "https://picsum.photos/200";

export default function App() {
  return (
    <div className="App">
      <h1 className="heading" style={customStyle}>
        {h1}
      </h1>
      {/* <h2>Start editing to see some magic happen!</h2> */}
      <ul>
        {/* <li>Bacon</li>
        <li>Jamon</li>
        <li>Noodles</li> */}
        <img src={image} alt="randomImages" />
        <img src={image} alt="randomImages" />
        <img src={image} alt="randomImages" />
      </ul>
    </div>
  );
}
