import React from 'react'
import FormGroup from '../Form-group/FormGroup'
import Button from '../Button/Button'

function MusicianNotExist() {
    return (
        <div className='musician_content'>
                    <FormGroup label="URL" placeholder="musiqi linki" />
                    <div className='musician_selectbox'>
                        <label>Country index</label>
                        <select className='musician_select'>
                            <option disabled selected>country</option>
                            <option>231</option>
                            <option>312</option>
                            <option>534</option>
                            <option>2341241</option>
                        </select>
                    </div>
                    <div className='musician_selectbox'>
                        <label>Background Image</label>
                        <select className='musician_select'>
                            <option>var</option>
                            <option>yoxdu</option>
                        </select>
                    </div>
                    <div className='musician_submit_btn'>
                        <Button>Submit</Button>
                    </div>
                </div>
    )
}

export default MusicianNotExist
