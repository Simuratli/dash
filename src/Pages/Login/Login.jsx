import React from 'react'
import Button from '../../components/Button/Button'
import FormGroup from '../../components/Form-group/FormGroup'
import Logo from '../../assets/img/logo.png'
import './Login.css'

function Login() {
    return (
        <section className='login'>
                <img className='login-logo' src={Logo} />
                <div className='login_form_container'>
                    <form className='login-form'>
                        <FormGroup 
                        type="text" 
                        placeholder="Username" 
                        label="Username"   
                        />
                        <FormGroup 
                        type="password" 
                        placeholder="Password" 
                        label="Password"   
                        />
                        <Button>Sign in</Button>
                    </form>
                </div>
        </section>
    )
}

export default Login
