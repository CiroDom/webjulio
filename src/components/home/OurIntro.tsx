function OurIntro() {
    return (
        <section className="flex flex-col justify-center h-288 pl-24">
            <div className="max-w-150">
                <h1 className="text-start text-blueGrayDark font-roboto text-5xl font-medium leading-66 tracking-wide mt-1.5 mb-1.5">
                    Introduce Your Product Quickly & Effectively
                </h1>
                <p className="text-start text-card mt-5 mb-16">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                    massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                    enim.
                </p>
                <div className="div-intro-buttons">
                    <button className="dark-button intro-button">
                        Purchase UI Kit
                    </button>

                    <button className="intro-button rounded-md border-2 border-solid border-blueGrayDark bg-transparent py-2 px-4 text-blueGrayDark">
                        Learn More
                    </button>
                </div>
            </div>

            <img className="absolute -z-10 right-0" src="src\assets\images\designer_1.png" alt="Girl in a jacket"/>
        </section>
    );
}

export default OurIntro