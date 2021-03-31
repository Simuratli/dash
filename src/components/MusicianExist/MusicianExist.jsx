import React from 'react'
import FormGroup from '../Form-group/FormGroup'
import Button from '../Button/Button'

function MusicianExist() {
    return (
        <div className='musician_content'>
                    <FormGroup label="Username" placeholder="set username" />
                    <FormGroup label="Country" placeholder="add musician country" />
                    <FormGroup type='email' label="Email" placeholder="set mail adress" />
                    <FormGroup type='password' label="Password"  />
                    <div className='musician_bottom_buttons'>
                        <div className='musician_button'>
                            Background Image
                            <label>
                                Upload file
                                <input type='file' />
                            </label>
                        </div>

                        <div className='musician_button'>
                            Background Image
                            <label>
                                Upload file
                                <input type='file' />
                            </label>
                        </div>
                    </div>
                    <div className='musician_submit_btn'>
                        <Button>Submit</Button>
                    </div>
                </div>
    )
}

export default MusicianExist
