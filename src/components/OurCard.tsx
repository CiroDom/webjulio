interface CardProps {
    srcImg: string;
    title: string;
    text: string;
}

const OurCard = (props: CardProps) => {
    return (
        <div className="our-card">
            <img src={props.srcImg} alt="Girl in a jacket"/>

            <div>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default OurCard;