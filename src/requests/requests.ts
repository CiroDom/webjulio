export async function postMsg(name: string, subject: string, message: string) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name,
                subject,
                message,
              }),
        });
    
        if (!response.ok) {
          throw new Error(`Erro de Rede: ${response.status}`);
        }
      }
      catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
}

export async function fetchItens() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    
        if (!response.ok) {
          throw new Error(`Erro de Rede: ${response.status}`);
        }
    
        const jsonData =  await response.json();

        return jsonData
        
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
}