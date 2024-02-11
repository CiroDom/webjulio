interface BelowSectionProps {
    text: string;
}

function OurBelowSection(props: BelowSectionProps) {
    return(
        <div>
            <div className="flex-column justify-around align-center margin-bottom-little margin-top-price">
                <h2>A Price To Suit Everyone</h2>
                <p className="text-end">
                    {props.text}
                </p>
            </div>

            <div className="flex-column justify-around align-center margin-bottom-big">
                <h1>$40</h1>
                <p className="text-end-price">
                    UI Design Kit
                </p>
            </div>

            <div className="flex-column justify-around align-center margin-bottom-biggest">
                <p className="text-end-price">
                    See, One price. Simple.
                </p>
                <button className="dark-button under-price-button">
                    Purchase Now
                </button>
            </div>
        </div>
    );
}

export default OurBelowSection;