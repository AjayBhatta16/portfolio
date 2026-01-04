import Slider from "react-slick";
import { sliderSettings } from "../about.api";
import { SkillCard } from "./SkillCard";

export default function SkillCarousel(props) {
    return (
        <Slider {...sliderSettings}>
            {props.skills.map((skill, index) => (
                <div key={index}>
                    <SkillCard skill={skill} />
                </div>
            ))}
        </Slider>
    )
}