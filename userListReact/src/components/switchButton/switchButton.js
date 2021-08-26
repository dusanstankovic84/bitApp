import { useState } from "react";
import "../switchButton/switchButton.css";

const SwitchButton = (props) => {
    const [selected, setSelected] = useState(false);
    const [buttonText, setButtonText] = useState(false);

    const onSelect = () => {
        setSelected(!selected);
        setButtonText(!buttonText);

        //toggle UsersC and UsersG with .disapear
        var cards = document.querySelector(".UsersC__cards");
        cards.classList.toggle("disapear");

        var list = document.querySelector(".Users__list");
        list.classList.toggle("disapear");
    }

    const cName = selected ? "wrapper selected" : "wrapper";
    const bText = buttonText ? "List of Users" : "Cards";

    return (
        <div className={cName} onClick={onSelect}>
            <p>{bText}</p>
        </div>
    )
}

export default SwitchButton;