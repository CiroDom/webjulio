function setObj(obj) {

  //VALUES

  const prodImg = obj["thumbnailUrl"]

  const prodName = obj["title"]

  const priceValue = obj["id"];

  const realPrice = "R$ " + priceValue;
  
  const oldPriceValue = priceValue * 2;
  const oldPrice = "R$ " + oldPriceValue;

  const buttonMsg = "buy that!";
  const prodUrl = obj["url"];

  //DIVS CREATION AND GETTING

  let divList = document.getElementById("div-list");
  let divItem = document.createElement("div");
  let divInfos = document.createElement("div");
  let divPrice = document.createElement("div");
  let divHoriz = document.createElement("div");

  //ELEMENTS CREATION

  let img = document.createElement("img");
  let nameTitel = document.createElement("h1");
  let realPriceTitel = document.createElement("h2");
  let oldPriceTitel = document.createElement("h3");
  let tagA = document.createElement("a");
  let button = document.createElement("button");
  let fiftyOff = document.createElement("p");

  //SETTING

  img.src = prodImg;
  nameTitel.textContent = prodName;
  oldPriceTitel.textContent = oldPrice;
  realPriceTitel.textContent = realPrice;
  fiftyOff.textContent = "50% OFF";
  tagA.href = prodUrl;
  tagA.target = "_blank";
  button.textContent = buttonMsg;

  nameTitel.classList.add("title-prod");
  oldPriceTitel.classList.add("old-price");
  realPriceTitel.classList.add("real-price");
  fiftyOff.classList.add("fifty-off");
  button.classList.add("button");

  divList.classList.add("div-list");
  divItem.classList.add("div-item");
  divInfos.classList.add("div-infos");
  divPrice.classList.add("div-price");
  divHoriz.classList.add("div-horiz");

  tagA.appendChild(button)

  //SETTING UP

  divHoriz.appendChild(realPriceTitel);
  divHoriz.appendChild(fiftyOff);

  divPrice.appendChild(oldPriceTitel);
  divPrice.appendChild(divHoriz);

  divInfos.appendChild(nameTitel);
  divInfos.appendChild(divPrice);
  divInfos.appendChild(tagA);

  divItem.appendChild(img);
  divItem.appendChild(divInfos);

  divList.appendChild(divItem);
}

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');

    if (!response.ok) {
      throw new Error(`Erro de Rede: ${response.status}`);
    }

    const data = await response.json();

    for (i = 0; i < data.length; i++) {
        let obj = data[i];
        
        setObj(obj);
    }    
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
  }
}

fetchData();