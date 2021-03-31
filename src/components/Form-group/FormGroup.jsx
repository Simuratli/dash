import React from 'react'
import './FormGroup.css'

function FormGroup(props) {
    return (
        <div className='form-group'>
            <label>{props.label}</label>
            <input onChange={props.onChange} type={props.type}  placeholder={props.placeholder} />
        </div>
    )
}

export default FormGroup
