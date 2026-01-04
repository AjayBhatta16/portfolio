import { useState } from "react";
import ReactCardFlip from "react-card-flip";

export function SkillCard(props) {
    var [flipped, setFlipped] = useState(false);

    const handleClick = e => {
        e.preventDefault();
        setFlipped(!flipped);
    }

    return (
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
            <div className="skill-card" onClick={handleClick}>
                <i className={props.skill.iconClassList}></i>
                <h4>{props.skill.name}</h4>
            </div>
            <div className="skill-card" onClick={handleClick}>
                <p className="skill-description">{props.skill.descriptiveText}</p>
            </div>
        </ReactCardFlip>
    )
}