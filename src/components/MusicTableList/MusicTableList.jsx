import React from 'react'
import FormGroup from '../Form-group/FormGroup'
import Button from '../Button/Button'

function MusicTableList(props) {

 

    return (
        <div className='music_table_list'>
                    <div className='border id'>1</div>
                    <div className='border musicianName'>Atarishi gakko</div>
                    <div className='music_links'>
                        <p className='music_url'><FormGroup placeholder="Music url" /></p>
                        <div>
                            <select className='music_selectbox'>
                                <option>var</option>
                                <option>yoxdu</option>
                            </select>
                        </div>
                        <div>
                            <Button>Submit</Button>
                        </div>
                        <div className='dots'>
                            <button onClick={props.onClick}>...</button>
                        </div>
                        
                    </div>
                </div>
    )
}

export default MusicTableList
