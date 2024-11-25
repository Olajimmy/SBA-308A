//import { data } from "jquery";

console.log("connected!");

// import { add, subtract } from "./mod.js";
// console.log(add(2, 3)); // 5
// console.log(subtract(5, 2)); // 3

// JavaScript:
// const newListItem = document.createElement("li");
// newListItem.textContent = "Item 3";

// const list = document.getElementById("myList");
// list.appendChild(newListItem);

// const data = { key1: "value1", key2: "value2" };

// // fetch("https://dogapi.dog/api/v2/breeds", {
// //   method: "POST",
// //   headers: {
// //     "Content-Type": "application/json",
// //   },
// //   body: JSON.stringify(data),
// // })
// //   .then((response) => response.json())
// //   .then((data) => {
// //     console.log("Success:", data);
// //   })
// //   .catch((error) => {
// //     console.error("Error:", error);
// //   });
//new api call=======================================start here================================
// async function dogs2() {
//   const response2 = await fetch(`https://dogapi.dog/api/v2/breeds`);
//   const result2 = await response2.json();
//   console.log(result2.data);
//   const details2 = result2.data;
//   for (i = 0; i < details2.length; i++) {
//     const newList = document.createElement("div");
//     newList.textContent = details2[i].attributes.name;
//   }
// }

///======================================================================
const btn = document.getElementById("catButton");
console.log(btn);
btn.addEventListener("click", catAPI);
const btn2 = document.getElementById("dogButton");
console.log(btn2);
btn2.addEventListener("click", dogName);
//importing data
import { catAPI } from "./mod.mjs";
import { dogName } from "./dogMod.mjs";
//console.log(catAPI());
//function aHandler(evt) {
//console.log(evt);
// async function catAPI() {
//   const response = await fetch(
//     `https://api.thecatapi.com/v1/images/search?limit=10`
//   );
//   const result = await response.json();
//   //const ulTag = document.querySelector("ul");
//   console.log(result);
//   const details = result;
//   for (i = 0; i < details.length; i++) {
//     //console.log(details[i].id);
//     // const img = new Image();
//     // img.src = data.imageUrl;
//     const imgDiv = document.createElement("div");
//     imgDiv.setAttribute("class", "picDiv");
//     imgDiv.style.border = "1px solid black";
//     imgDiv.style.backgroundColor = "#adcbd1";

//     //imgDiv.style.backgroundColor = "#adcbd1";
//     //textId.setAttribute
//     //text
//     const textId = document.createElement("h5");
//     textId.textContent = `ID: ${details[i].id}`;
//     //textId.style.position = "absolute";
//     textId.style.color = "black";
//     textId.style.backgroundColor = "#e5e5e5";
//     //=================
//     const image = document.createElement("img");
//     image.setAttribute("src", details[i].url);
//     // image.style.border = "1px solid black";
//     image.style.height = "100px";
//     image.style.width = "180px";
//     image.style.backgroundColor = "white";
//     imgDiv.appendChild(image);

//     imgDiv.appendChild(textId);
//     //image.style.textContent = `${details[i].id}`;
//     // innerDiv.innerHTML = `id: ${details[i].id}, url ${details[i].url}`;

//     // main div container
//     const outerDiv = document.getElementById("first");
//     //ulList.setAttribute("class", "catMainDiv");
//     outerDiv.style.border = "1px solid black";
//     outerDiv.style.display = "flex";
//     outerDiv.style.flexWrap = "wrap";
//     outerDiv.style.backgroundColor = "#003153";
//     outerDiv.style.justifyContent = "space-evenly";

//     //ulList.style.height=
//     //ulList.style.justifyContent = "space-between";
//     console.log(outerDiv);
//     outerDiv.appendChild(imgDiv);
//   }
//   btn.disabled = true;
//   btn.textContent = "Explore The Retrieved Data";
//   //btn.disabled = true;
//   // btn.textContent = "This Button Can Only Be Used Once";
// }
//end============================================================
//}
//aHandler();
//catAPI();

//async await function=================================================================================
// async function dogName() {
//   const response = await fetch(`https://dogapi.dog/api/v2/breeds`);
//   const result = await response.json();
//   //const ulTag = document.querySelector("ul");
//   console.log(result.data);
//   const details = result.data;
//   for (let i = 0; i < details.length; i++) {
//     // console.log(details[i].attributes.name);
//     const newList = document.createElement("div");
//     newList.setAttribute("class", "myClass");
//     newList.style.border = "1px solid black";
//     newList.style.height = "100px";
//     newList.style.width = "180px";
//     newList.style.backgroundColor = "#adcbd1";
//     newList.textContent = ` ID: ${details[i].id} Name: ${details[i].attributes.name}  ${details[i].type}`;
//     //newList.textContent = ` ID: ${details[i].attributes.name}`;

//     //dogs2();
//     const ulList2 = document.getElementById("second");
//     ulList2.setAttribute("class", "dogMainDiv");
//     // main div container
//     ulList2.style.border = "1px solid black";
//     ulList2.style.display = "flex";
//     ulList2.style.flexWrap = "wrap";
//     // ulList2.style.padding = "10px";
//     ulList2.style.justifyContent = "space-evenly";
//     ulList2.style.backgroundColor = "#00b2b2";
//     console.log(ulList2);
//     ulList2.appendChild(newList);
//   }
//   btn2.disabled = true;
// }===========================================================================================================

//
// const axios = require("axios");

// console.log(axios.isCancel("something"));
//import axios from "axios";

// axios
//   .get("https://dogapi.dog/api/v2/breeds")
//   .then((response) => {
//     console.log(response.data); // Output the response data
//   })
//   .catch((error) => {
//     console.error(error); // Handle errors
//   });
// // promise
let myPromise = new Promise(function (myResolve, myReject) {
  // "Producing Code" (May take some time)
  const data = fetch(`https://api.thecatapi.com/v1/images/search?limit=10`);
  //console.log(data);
  if (data !== null) myResolve("okay"); // when successful

  myReject(console.log("Oops, no result")); // when error
});

//"Consuming Code" (Must wait for a fulfilled Promise)
myPromise
  .then(function myResolve() {
    /* code if successful */
    console.log("i have result", myPromise);
    // const data2 = myPromise.json();
    // console.log(data2);

    //console.log(data);
  })
  .then(console.log(myPromise))

  //if not fufilled
  .catch(function myReject() {
    console.log("no results for real", myPromise);
  });

// let k = myPromise.length;
// // console.log(k);
// for (i = 0; i <= myPromise; i++) {
//   console.log(myPromise[i]);
// }
// // function dogDetails() {
//   const newList = document.createElement("div");
//   newList.setAttribute("class", "dogDetailsClass");
//   newList.style.border = "1px solid black";
//   newList.style.height = "100px";
//   newList.style.width = "100px";
//   newList.style.backgroundColor = "#22779b";
//   newList.textContent = dogId();
//   newList.textContent = dogName();
// }
//dogDetails();
//const detailsLen = details.length;
//console.log(detailsLen);
//looping through

//   const dataLength = result.length;
//   console.log(dataLength);
//   for (i = 0; i < detailsLen; i++) {
//     const breed = detailsLen[i];
//     console.log(breed);
//     for (j = 0; j < breed.length; j++) {
//       console.log(breed[j]);
//     }
//   }
//   const breeds = data.map((item) => {
//     return { id: item.id, name: item.name };
//   });
