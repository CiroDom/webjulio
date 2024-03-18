interface CardProps {
    srcImg: string;
    title: string;
    text: string;
}

const OurCard = (props: CardProps) => {
    return (
        <div className="flex justify-between mt-44 px-24">
            <img src={props.srcImg} alt="Girl in a jacket"/>

            <div className="ml-40">
                <h2 className="text-start text-blueGrayDark font-roboto text-2xl font-medium leading-12">
                    {props.title}
                </h2>
                <p className="text-start text-blueGrayClear font-roboto text-base font-normal leading-6 mt-4 mb-20">
                    {props.text}
                </p>
            </div>
        </div>
    );
}

export default OurCard;