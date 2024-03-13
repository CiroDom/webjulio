import Header from "../buy_now/Header";
import React, { useState, useEffect } from 'react';
import ItemCard from "./ItemCard";
import { fetchItens } from "../../requests/requests";


function BuyNow() {
    const [itens, setItens] = useState([]);

    
    const getItens = async () => setItens(await fetchItens())
    useEffect(() => {getItens()}, []);

    return (
        <div>
            <Header content={'Itens para compra:'} />

            <div className="grid grid-cols-4 gap-8">
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