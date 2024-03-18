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
        <div className="flex flex-col justify-between p-2 border border-gray-300">
            <img src={props.thumbnailUrl}/>

            <div className="flex flex-col justify-between gap-6 p-2">
                <h1 className="text-start text-blue-400 font-light text-xl line-clamp-2">
                    {props.title}
                </h1>

                <div className="flex flex-col items-start justify-center">
                    <h3 className="text-black-alpha-55 font-sans text-base font-normal line-through">
                        {oldPrice}
                    </h3>

                    <div className="flex items-start justify-start">
                        <h2 className="text-black-alpha-90 font-sans text-3xl font-light">
                            {realPrice}
                        </h2>

                        <p className="text-green-600 font-sans text-base font-normal ml-2">
                            50% OFF
                        </p>
                    </div>

                    <a href={props.url}>
                        <button className="bg-blue-500 text-white mt-5 py-2 px-4 rounded">
                            Buy Now
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;