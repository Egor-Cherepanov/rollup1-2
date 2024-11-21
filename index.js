import "./index.css";
import JSlogo from "./assets/Unofficial_JavaScript_logo_2.svg.png";

console.log("Hello World!");
const arr = [1, 2, 3].map((num) => num + 1);
console.log(arr);
// console.log(JSlogo);

const bodyDiv = document.querySelector("div");

const header = document.createElement("h1");
header.textContent = "I love JavaScript";

const JSimg = document.createElement("img");
JSimg.src = JSlogo;

bodyDiv.append(JSimg);
bodyDiv.append(header);
