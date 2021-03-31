import React,{useState} from 'react'
import FormGroup from '../../components/Form-group/FormGroup';
import Button from '../../components/Button/Button';
import MusicianNotExist from '../../components/MusicianNotExist/MusicianNotExist'
import MusicanExist from '../../components/MusicianExist/MusicianExist'

import './Musician.css';

function Musician() {

    const [exist, setExist] = useState(true)

    function changeMusician(id) { 
        setExist(!exist)
        let btn = document.querySelectorAll('.musician_search_button')
        if(id === 0){
            btn[0].classList.add('activebutton')
            btn[1].classList.remove('activebutton')
        }else if(id === 1){
            btn[0].classList.remove('activebutton')
            btn[1].classList.add('activebutton')
        }
    }
    

    return (
        <div className='musician-container'>
            <div className='musician'>
                <div className='musician_head'>
                    <button onClick={()=>changeMusician(0)} className='musician_search_button activebutton'>Movcudur</button>
                    <button onClick={()=>changeMusician(1)} className='musician_search_button'>Movcud deyil</button>
                </div>
                {!exist ? <MusicanExist/> : <MusicianNotExist/>}
            </div>
        </div>
    )
}

export default Musician
