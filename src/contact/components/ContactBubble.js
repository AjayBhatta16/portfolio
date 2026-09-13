
export default function ContactBubble(props) {
    const contactInfo = props.data;

    return (
        <div className='contact-bubble'>
            <i className={`contact-icon ${contactInfo.iconClassList}`}></i>
        </div>
    )
}