interface BelowSectionProps {
    text: string;
}

function OurBelowSection(props: BelowSectionProps) {
    return(
        <div className="bg-bgBelow mt-11 pt-60 pb-44">
            <div className="flex flex-col items-center justify-around mb-9 mt-60">
                <h2 className="text-blueGrayDark font-roboto text-4xl font-medium leading-12 mt-2 mb-2">
                    A Price To Suit Everyone
                </h2>
                <p className="text-blueGrayClear text-center font-roboto text-base font-normal leading-4.5 max-w-150">
                    {props.text}
                </p>
            </div>

            <div className="flex flex-col items-center justify-around mb-16">
                <h1 className="text-blueGrayPrice font-roboto text-5xl font-medium leading-12 tracking-wide mt-1.5 mb-1.5">
                    $40
                </h1>
                <p className="text-blueGrayUnderPrice text-center font-roboto text-base font-normal leading-6">
                    UI Design Kit
                </p>
            </div>

            <div className="flex-column items-center justify-around margin-bottom-biggest">
                <p className="text-blueGraySeeOnePrice text-center font-roboto text-base font-normal leading-6">
                    See, One price. Simple.
                </p>
                <button className="dark-button w-40">
                    Purchase Now
                </button>
            </div>
        </div>
    );
}

export default OurBelowSection;