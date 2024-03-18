interface OurHeaderProps {
    strings: string[];
}

const OurHeader = (props: OurHeaderProps) => {
    return (
        <header>
            <div className="flex justify-between items-center px-24 py-3">
                <div className="flex justify-center gap-4">
                    <a className="text-text-button">
                        {props.strings[0]}
                    </a>

                    <a id="about" className="text-text-button" href="./about_page/index.html" target="_blank">
                        {props.strings[1]}
                    </a>

                    <a className="text-text-button" href="./contact">
                        {props.strings[2]}
                    </a>
                </div>

                <h3 className="text-blueGrayDark font-roboto text-2xl font-extrabold leading-9">
                    {props.strings[3]}
                </h3>

                <a href="/buynow">
                    <button className="dark-button w-40">
                        {props.strings[4]}
                    </button>
                </a>
            </div>
        </header>
    );
}

export default OurHeader;