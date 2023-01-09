import React from 'react'
import Signup from './Signup'

const Login = () => {
    const [signup,setSignup] = React.useState(Signup)
    const handler = () => {
        if (signup == Signup)
            setSignup(Login)
        else    
            setSignup(Signup)
    }
    return (
        <div className='main-body'>
            <h1>Login</h1>
            <input type="text" placeholder='Enter Mail' />
            <input type="text" placeholder='Enter Password'/>
            <button onClick={()=>handler()}>Create new Account?</button>
        </div>
    )
}

export default Login
