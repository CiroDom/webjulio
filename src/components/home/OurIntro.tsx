function OurIntro() {
    return (
        <section className="intro-section">
            <div className="intro-div">
                <h1>Introduce Your Product Quickly & Effectively</h1>
                <p className="text-card">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                    massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                    enim.
                </p>
                <div className="intro-buttons">
                    <button className="dark-button intro-button">
                        Purchase UI Kit
                    </button>

                    <button className="clear-button intro-button">
                        Learn More
                    </button>
                </div>
            </div>

            <img id="biggest-img" src="src\assets\images\designer_1.png" alt="Girl in a jacket"/>
        </section>
    );
}

export default OurIntro