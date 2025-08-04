import { useEffect, useRef } from 'react';

export default function ProjectInfoDialog(props) {
    const dialogRef = useRef(null);

    // https://medium.com/@dimterion/modals-with-html-dialog-element-in-javascript-and-react-fb23c885d62e
    useEffect(() => {
        if (props.openModal) {
            dialogRef?.current?.showModal();
        } else {
            dialogRef?.current?.close();
        }
    }, [props.openModal]);

    return (
        <dialog
            ref={dialogRef}
            onCancel={props.closeModal}
            className='project-info-dialog'
        >
            <div className='dialog-header'>
                <img src={props.data.appLogoURI} alt={props.data.title} />
                <h1>{props.data.title}</h1>
                <button className='close-button' onClick={props.closeModal}>&times;</button>
            </div>
            <hr/>
            <div className='dialog-content'>
                <div className='content-section'>
                    <div className='flex-col project-details'>
                        <div className='flex-row'>
                            <a href={props.data.mainLink} target='_blank' rel='noopener noreferrer'>Live Demo&nbsp;↗</a>
                            <a href={props.data.srcLink} target='_blank' rel='noopener noreferrer'>Source Code&nbsp;↗</a>
                        </div>
                        <p>{props.data.detailDescription}</p>
                    </div>
                    <img className='project-screenshot' src={props.data.screenshotUri1}/>
                    <img className='project-screenshot' src={props.data.screenshotUri2}/>
                </div>
                <h3>Technical Details</h3>
                <div className='content-section'></div>
            </div>
        </dialog>
    )
}