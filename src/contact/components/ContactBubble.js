import { useState } from 'react';

export default function ContactBubble(props) {
    const [displayDetails, setDisplayDetails] = useState(false);

    const contactInfo = props.data;

    function handleCopy() {
        navigator.clipboard.writeText(contactInfo.copyText)
    }

    return (
        <div className='flex-col contact-wrapper'>
            <div className='contact-bubble' onClick={() => setDisplayDetails(!displayDetails)}>
                <i className={`contact-icon ${contactInfo.iconClassList}`}></i>
            </div>
            {
                displayDetails && (
                    <div className='contact-details flex-col'>
                        <h4>{contactInfo.name}</h4>
                        <p>{contactInfo.linkDisplayText}</p>
                        <div className='flex-row contact-detail-icons'>
                            <a href={contactInfo.linkUrl} target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-external-link-alt"></i>
                            </a>
                            <i className="far fa-copy" onClick={handleCopy}></i>
                        </div>
                    </div>
                )
            }
        </div>
    )
}