function setObj(obj) {
    let divParent = document.getElementById("div-parent");

    let divChild = document.createElement("div");

    let img = document.createElement("img");
    img.src = obj["thumbnailUrl"];
    divChild.appendChild(img);

    let h1 = document.createElement("h1");
    h1.textContent = obj["title"];
    h1.classList.add("title-prod");
    divChild.appendChild(h1);

    let h2 = document.createElement("h2");
    h2.textContent = obj["id"];
    h2.classList.add("price");
    divChild.appendChild(h2);

    let tagA = document.createElement("a");
    tagA.href = obj["url"];
    tagA.target = "_blank";
    let bttn = document.createElement("button");
    bttn.classList.add("button");
    bttn.textContent = "ir pra outra aba"
    tagA.appendChild(bttn);
    divChild.appendChild(tagA);

    let hr = document.createElement("hr");
    divChild.appendChild(hr);

    divParent.appendChild(divChild);
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