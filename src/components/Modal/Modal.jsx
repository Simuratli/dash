import React from 'react'
import './Modal.css'

function Modal(props) {
    return (
       <div  onClick={props.onClick} className={`modal-outline ${props.modal && 'openModal'}`}>
            <div className='modal'>
                <div className='music-name'>
                    <h1>Atarishi gakko</h1>
                    <div>
                        <p>新しい学校のリーダーズ</p>
                        <p>新しい学校のリーダーズ</p>
                        <p>新しい学校のリーダーズ</p>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Modal
