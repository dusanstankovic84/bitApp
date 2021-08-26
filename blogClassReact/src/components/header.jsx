import React from "react";

const Header = ({ title }) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">{title}</a>
            </div>
        </nav>
    )
}

export default Header;