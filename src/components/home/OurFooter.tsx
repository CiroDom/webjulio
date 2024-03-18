function OurFooter() {
    return (
        <div className="bg-bgFooter pt-16 pb-8">
            <div className="flex items-center justify-between mb-10 px-24">
                <p className="text-grayFooterCopy mx-2 font-roboto text-sm font-medium leading-6">
                    ©2023 Yourcompany
                </p>

                <h3 className="text-blueGrayDark font-roboto text-2xl font-extrabold leading-9">
                    Landing
                </h3>

                <button className="dark-button footer-button">
                    Purchase now
                </button>
            </div>

            <div className="px-24">
                <hr className="bg-grayFooterHr border-grayFooterHr"/>
            </div>

            <div className="relative flex items-center justify-between px-24">
                <div className="relative flex items-center mt-5">
                    <a className="text-grayFooterCopy mx-2 font-roboto text-sm font-medium leading-6">
                        Home
                    </a>

                    <a className="text-grayFooterCopy mx-2 font-roboto text-sm font-medium leading-6" href="/about_page" target="_blank">
                        About
                    </a>

                    <a className="text-grayFooterCopy mx-2 font-roboto text-sm font-medium leading-6" href="/contact_page">
                        Contact
                    </a>
                </div>

                <div className="flex gap-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                            d="M9 5.5V3.5C9 2.948 9.448 2.5 10 2.5H11V0H9C7.343 0 6 1.343 6 3V5.5H4V8H6V16H9V8H11L12 5.5H9Z"
                            fill="#B0B8BC" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M3.5 1.75C3.5 2.7165 2.7165 3.5 1.75 3.5C0.783502 3.5 0 2.7165 0 1.75C0 0.783502 0.783502 0 1.75 0C2.7165 0 3.5 0.783502 3.5 1.75ZM0 5H3.578V16H0V5ZM13.2998 5.12119C13.2954 5.11973 13.2909 5.11825 13.2864 5.11678C13.2616 5.10856 13.2367 5.10033 13.21 5.093C13.162 5.082 13.114 5.073 13.065 5.065C12.875 5.027 12.667 5 12.423 5C10.337 5 9.014 6.517 8.578 7.103V5H5V16H8.578V10C8.578 10 11.282 6.234 12.423 9V16H16V8.577C16 6.915 14.861 5.53 13.324 5.129C13.3159 5.12643 13.3078 5.12382 13.2998 5.12119Z"
                            fill="#B0B8BC" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                            d="M16 2.87225C15.405 3.13325 14.771 3.30625 14.11 3.39025C14.79 2.98425 15.309 2.34625 15.553 1.57725C14.919 1.95525 14.219 2.22225 13.473 2.37125C12.871 1.73025 12.013 1.33325 11.077 1.33325C9.261 1.33325 7.799 2.80725 7.799 4.61425C7.799 4.87425 7.821 5.12425 7.875 5.36225C5.148 5.22925 2.735 3.92225 1.114 1.93125C0.831 2.42225 0.665 2.98425 0.665 3.58925C0.665 4.72525 1.25 5.73225 2.122 6.31525C1.595 6.30525 1.078 6.15225 0.64 5.91125C0.64 5.92125 0.64 5.93425 0.64 5.94725C0.64 7.54125 1.777 8.86525 3.268 9.17025C3.001 9.24325 2.71 9.27825 2.408 9.27825C2.198 9.27825 1.986 9.26625 1.787 9.22225C2.212 10.5213 3.418 11.4763 4.852 11.5073C3.736 12.3803 2.319 12.9063 0.785 12.9063C0.516 12.9063 0.258 12.8943 0 12.8613C1.453 13.7983 3.175 14.3333 5.032 14.3333C11.068 14.3333 14.368 9.33325 14.368 4.99925C14.368 4.85425 14.363 4.71425 14.356 4.57525C15.007 4.11325 15.554 3.53625 16 2.87225Z"
                            fill="#B0B8BC" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M13.456 2.75875C14.415 2.81275 14.886 2.95475 15.32 3.72675C15.772 4.49775 16 5.82575 16 8.16475V8.16775V8.17275C16 10.5007 15.772 11.8387 15.321 12.6017C14.887 13.3737 14.416 13.5137 13.457 13.5787C12.498 13.6337 10.089 13.6667 8.002 13.6667C5.911 13.6667 3.501 13.6337 2.543 13.5777C1.586 13.5127 1.115 13.3727 0.677 12.6007C0.23 11.8377 0 10.4997 0 8.17175V8.16975V8.16675V8.16375C0 5.82575 0.23 4.49775 0.677 3.72675C1.115 2.95375 1.587 2.81275 2.544 2.75775C3.501 2.69375 5.911 2.66675 8.002 2.66675C10.089 2.66675 12.498 2.69375 13.456 2.75875ZM11 8.16675L6 5.16675V11.1667L11 8.16675Z"
                            fill="#B0B8BC" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M5 0H11C13.761 0 16 2.239 16 5V11C16 13.761 13.761 16 11 16H5C2.239 16 0 13.761 0 11V5C0 2.239 2.239 0 5 0ZM11 14.5C12.93 14.5 14.5 12.93 14.5 11V5C14.5 3.07 12.93 1.5 11 1.5H5C3.07 1.5 1.5 3.07 1.5 5V11C1.5 12.93 3.07 14.5 5 14.5H11ZM4 8C4 5.791 5.791 4 8 4C10.209 4 12 5.791 12 8C12 10.209 10.209 12 8 12C5.791 12 4 10.209 4 8ZM5.5 8C5.5 9.378 6.622 10.5 8 10.5C9.378 10.5 10.5 9.378 10.5 8C10.5 6.621 9.378 5.5 8 5.5C6.622 5.5 5.5 6.621 5.5 8ZM12.833 3.7C12.833 3.99437 12.5944 4.233 12.3 4.233C12.0057 4.233 11.767 3.99437 11.767 3.7C11.767 3.40564 12.0057 3.167 12.3 3.167C12.5944 3.167 12.833 3.40564 12.833 3.7Z"
                            fill="#B0B8BC" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default OurFooter;