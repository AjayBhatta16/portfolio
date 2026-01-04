export function SkillCard(props) {
    return (
        <div className="skill-card">
            <i className={props.skill.iconClassList}></i>
            <h4>{props.skill.name}</h4>
        </div>
    )
}