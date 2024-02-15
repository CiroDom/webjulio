interface HeaderContent {
    content: string;
}

function Header(props: HeaderContent) {
    return (
        <h1>
            {props.content}
        </h1>
    );
}

export default Header;