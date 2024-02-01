let name , subject , msg;

name = document.getElementById('name').value;
subject = document.getElementById('subject').value;
msg = document.getElementById('message').value;

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');

    if (!response.ok) {
      throw new Error(`Erro de Rede: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
  }
}

fetchData();