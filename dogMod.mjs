export async function dogName() {
  const btn2 = document.getElementById("dogButton");
  console.log(btn2);
  btn2.addEventListener("click", dogName);
  const response = await fetch(`https://dogapi.dog/api/v2/breeds`);
  const result = await response.json();
  //const ulTag = document.querySelector("ul");
  console.log(result.data);
  const details = result.data;
  for (let i = 0; i < details.length; i++) {
    // console.log(details[i].attributes.name);
    const newList = document.createElement("div");
    newList.setAttribute("class", "myClass");
    newList.style.border = "1px solid black";
    newList.style.height = "100px";
    newList.style.width = "180px";
    newList.style.backgroundColor = "#adcbd1";
    newList.textContent = ` ID: ${details[i].id} NAME: ${details[i].attributes.name}  ${details[i].type}`;
    //newList.textContent = ` ID: ${details[i].attributes.name}`;

    //dogs2();
    const ulList2 = document.getElementById("second");
    ulList2.setAttribute("class", "dogMainDiv");
    // main div container
    ulList2.style.border = "1px solid black";
    ulList2.style.display = "flex";
    ulList2.style.flexWrap = "wrap";
    // ulList2.style.padding = "10px";
    ulList2.style.justifyContent = "space-evenly";
    ulList2.style.backgroundColor = "#00b2b2";
    console.log(ulList2);
    ulList2.appendChild(newList);
  }
  btn2.disabled = true;
}
