import React,{useState} from 'react'
import Modal from '../../components/Modal/Modal'
import MusicTableList from '../../components/MusicTableList/MusicTableList'
import './Music.css'

function Music() {

    const [modal, setModal] = useState(false)

    function openModal() {  
        setModal(!modal)
    }

    return (
        <div className='musician-container'>
        <Modal modal={modal} onClick={()=>openModal()}/>
            <div className='music'>
                <div className='music_head'>
                    <div className='bright idHead'> id</div>
                    <div className='bright musicanNameHead'>Name</div>
                    <div className='music-genre'>
                        <p>music url</p>
                        <p>music genre</p>
                    </div>
                </div>  
                <MusicTableList onClick={()=>openModal()}/>
                <MusicTableList onClick={()=>openModal()}/>
                <MusicTableList onClick={()=>openModal()}/>
                <MusicTableList onClick={()=>openModal()}/>
            </div>
        </div>
    )
}

export default Music
