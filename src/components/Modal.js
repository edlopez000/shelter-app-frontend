import React from 'react'


const Modal = props => {
    if (!props.show) {
        return null
    }
    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h4 className='modal-title'>{props.title}</h4>
                </div>
                <div className='modal-body'>{props.children}</div>
            <div className='modal-footer'>
                <button onClick={props.onClose} className='button'>Yes</button>
            </div>
          </div>
        </div>
    )
}
export default Modal