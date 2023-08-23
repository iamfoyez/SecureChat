import React from 'react'


const Login = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Secure Chat</span>
                <span className='title'>Register</span>
                <form>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login