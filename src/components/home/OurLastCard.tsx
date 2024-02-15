interface LastCardProps {
    title: string;
    text: string;
}

function OurLastCard(props: LastCardProps) {
    return(
        <div className="flex-row justify-between padding-top-card">
            <img src="src/assets/images/undraw_mention_6k5d.png" alt="Girl in a jacket"/>

            <div className="flex-column max-width-cards">
                <h2>Light, Fast & Powerful</h2>
                <p className="text-card">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                    massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                    enim.
                </p>
                <button className="dark-button last-card-button">
                    Purchase Now
                </button>
            </div>
        </div>
    );
}

export default OurLastCard;