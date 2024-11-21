console.log("connected!");

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
async function dogs() {
  const response = await fetch(`https://dogapi.dog/api/v2/breeds`);
  const result = await response.json();
  //const ulTag = document.querySelector("ul");
  console.log(result.data);
  const details = result.data;
  for (i = 0; i < details.length; i++) {
    console.log(details[i].id);
    const newList = document.createElement("div");
    newList.style.border = "1px solid black";
    newList.style.height = "100px";
    newList.style.width = "100px";
    newList.style.backgroundColor = "#22779b";
    newList.textContent = details[i].id;
    //dogs2();
    const ulList = document.querySelector("div");
    // main div container
    ulList.style.border = "1px solid black";
    ulList.style.display = "flex";
    //ulList.style.justifyContent = "space-between";
    console.log(ulList);
    ulList.appendChild(newList);

    // const list = document.querySelector("li");
    // console.log(list);
    //list.textContent = details[i].id;
    // list.setAttribute("value", details.id);
    //document.querySelector("ul").appendChild(list);

    //append(details);
    //console.log(details[i].attributes.name);
  }
}
dogs();

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
