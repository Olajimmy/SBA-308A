// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;

async function catAPI() {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10`
  );
  const result = await response.json();
  //const ulTag = document.querySelector("ul");
  console.log(result);
  const details = result;
  for (let i = 0; i < details.length; i++) {
    //console.log(details[i].id);
    // const img = new Image();
    // img.src = data.imageUrl;
    const imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "picDiv");
    imgDiv.style.border = "1px solid black";
    imgDiv.style.backgroundColor = "#adcbd1";

    //imgDiv.style.backgroundColor = "#adcbd1";
    //textId.setAttribute
    //text
    const textId = document.createElement("h5");
    textId.textContent = `ID: ${details[i].id}`;
    //textId.style.position = "absolute";
    textId.style.color = "black";
    textId.style.backgroundColor = "#e5e5e5";
    //=================
    const image = document.createElement("img");
    image.setAttribute("src", details[i].url);
    // image.style.border = "1px solid black";
    image.style.height = "100px";
    image.style.width = "180px";
    image.style.backgroundColor = "white";
    imgDiv.appendChild(image);

    imgDiv.appendChild(textId);
    //image.style.textContent = `${details[i].id}`;
    // innerDiv.innerHTML = `id: ${details[i].id}, url ${details[i].url}`;

    // main div container
    const outerDiv = document.getElementById("first");
    //ulList.setAttribute("class", "catMainDiv");
    outerDiv.style.border = "1px solid black";
    outerDiv.style.display = "flex";
    outerDiv.style.flexWrap = "wrap";
    outerDiv.style.backgroundColor = "#003153";
    outerDiv.style.justifyContent = "space-evenly";

    //ulList.style.height=
    //ulList.style.justifyContent = "space-between";
    console.log(outerDiv);
    outerDiv.appendChild(imgDiv);
  }
  btn.disabled = true;
  btn.textContent = "Explore The Retrieved Data";
  //btn.disabled = true;
  // btn.textContent = "This Button Can Only Be Used Once";
}
export { catAPI };
