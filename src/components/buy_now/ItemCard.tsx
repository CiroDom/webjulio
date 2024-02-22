interface ItemProps {
    thumbnailUrl: string;
    title: string;
    price: number;
    url: string;
}

function ItemCard(props: ItemProps) {
    let realPrice: string = "R$ " + (props.price * 2)
    let oldPrice: string = "R$ " + (props.price)   
    
    return (
        <div className="div-item">
            <img src={props.thumbnailUrl}/>

            <div className="div-infos">
                <h1 className="title-prod">
                    {props.title}
                </h1>

                <div className="div-price">
                    <h3 className="old-price">
                        {oldPrice}
                    </h3>

                    <div className="div-horiz">
                        <h2 className="real-price">
                            {realPrice}
                        </h2>

                        <p className="fifty-off">
                            50% OFF
                        </p>
                    </div>
                </div>

                <a href={props.url}>
                    <button className="button">
                        Buy Now
                    </button>
                </a>
            </div>
        </div>
    );
}

export default ItemCard;