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
            <br/>
            <div className='dialog-content'>
            </div>
        </dialog>
    )
}