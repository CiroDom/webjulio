function setObj(obj) {
    let divParent = document.getElementById("div-parent");

    let divChild = document.createElement("div");

    let h2 = document.createElement("h2");
    h2.textContent = "albumId: " + obj["albumId"]
    divChild.appendChild(h2)

    let h3 = document.createElement("h3");
    h3.textContent = "id: " + obj["id"]
    divChild.appendChild(h3)

    let h4 = document.createElement("h4");
    h4.textContent = "title: " + obj["title"]
    divChild.appendChild(h4)

    let thumbnailUrl = document.createElement("p")
    thumbnailUrl.textContent = "thumbnailUrl: " + obj["thumbnailUrl"]
    divChild.appendChild(thumbnailUrl)

    let url = document.createElement("p")
    url.textContent = "url: " + obj["url"]
    divChild.appendChild(url)

    let hr = document.createElement("hr")
    divChild.appendChild(hr)

    divParent.appendChild(divChild)
}

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');

    if (!response.ok) {
      throw new Error(`Erro de Rede: ${response.status}`);
    }

    const data = await response.json();

    for (i = 0; i < data.length; i++) {
        let obj = data[i]
        
        setObj(obj)
    }    
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
  }
}

fetchData();