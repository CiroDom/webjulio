interface LastCardProps {
    title: string;
    text: string;
}

function OurLastCard(props: LastCardProps) {
    return(
        <div className="flex justify-between mt-40 px-24">
            <img src="src/assets/images/undraw_mention_6k5d.png" alt="Girl in a jacket"/>

            <div className="flex flex-col items-start ml-40">
                <h2 className="text-start text-blueGrayDark font-roboto text-2xl font-medium leading-12">
                    Light, Fast & Powerful
                </h2>
                <p className="text-start text-blueGrayClear font-roboto text-base font-normal leading-6 mt-4 mb-20">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                    massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                    enim.
                </p>
                <button className="dark-button w-40">
                    Purchase Now
                </button>
            </div>
        </div>
    );
}

export default OurLastCard;