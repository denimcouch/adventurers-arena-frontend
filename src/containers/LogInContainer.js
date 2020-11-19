import React from 'react'
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'

function LogInContainer (props) {

    const {signUpUser} = props

    return(
        <div>
            <h1>LogInContainer</h1>
            <LogIn />
            <SignUp signUpUser={signUpUser} />
        </div>
    )
}

export default LogInContainer