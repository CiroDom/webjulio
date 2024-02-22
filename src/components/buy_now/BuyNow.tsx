import Header from "../buy_now/Header";
import React, { useState, useEffect } from 'react';
import ItemCard from "./ItemCard";


function BuyNow() {
    const [itens, setItens] = useState([]);

    useEffect(() => {
        async function fetchItens() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos');
            
                if (!response.ok) {
                  throw new Error(`Erro de Rede: ${response.status}`);
                }
            
                const jsonData =  await response.json();
                setItens(jsonData);
                
                
              } catch (error) {
                console.error('Erro ao buscar os dados:', error);
              }
        }
    
        fetchItens();
    }, []);

    return (
        <div>
            <Header content={'Itens para compra:'} />

            <div className="div-list">
                {
                    itens.map(item => (
                        <ItemCard thumbnailUrl={item["thumbnailUrl"]} title={item["title"]} price={item["id"]} url={item["url"]}/>
                    ))
                }
            </div>
        </div>
    );
}

export default BuyNow;