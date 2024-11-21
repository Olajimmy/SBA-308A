console.log("connected!");

// JavaScript:
// const newListItem = document.createElement("li");
// newListItem.textContent = "Item 3";

// const list = document.getElementById("myList");
// list.appendChild(newListItem);

async function dogs() {
  const response = await fetch(`https://dogapi.dog/api/v2/breeds`);
  const result = await response.json();
  const ulTag = document.querySelector("ul");
  //console.log(result.data);
  const details = result.data;
  for (i = 0; i < details.length; i++) {
    console.log(details[i].id);
    const newList = document.createElement("li");
    newList.textContent = details[i].id;
    const ulList = document.querySelector("ul");
    console.log(ulList);
    ulList.appendChild(newList);

    const list = document.querySelector("li");
    console.log(list);
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
