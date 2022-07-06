import { useState, useEffect } from 'react'
import {  Link } from "react-router-dom";
import './SignUp.css'

function SignUp(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isStrong, setIsStrong] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailConfirmed, setEmailConfirmed] = useState('')
    const [isConfirmed, setIsConfirmed] = useState(false)

    const handleFirstName = e => {
        setFirstName(e.target.value);
    }

    const handleLastName = e => {
        setLastName(e.target.value);
    }

    useEffect(() => {
        if ((email.localeCompare(emailConfirmed) === 0) &&  (emailConfirmed!=='')){
        setIsConfirmed(true)
        }
        else setIsConfirmed(false)
    },[emailConfirmed, email])
    
    const handleEmailInput = e => {
        setEmail(e.target.value);
    }

    const handleEmailConfirmationInput = e => {
        setEmailConfirmed(e.target.value);
    }

    const handlePasswordInput = e => {
        setPassword(e.target.value);
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (re.test(e.target.value)) setIsStrong(true)
    }
    
    return (
        <div className = 'signup-container'>
            <h1>Struggling with your budget planning?</h1>
            <h2>With <span style={{color: "#F5793B"}}>My Finance</span> end of the month will never come unexpected anymore!</h2>

        <div className = 'signup-wrapper'>
            <p className = 'free-account'><b>Sign up for a free account</b></p>
            <div className = 'name-wrapper'>
            <input type = 'text' id = 'first-name' placeholder = 'First name' value = {firstName} onChange = {handleFirstName}/>
            <input type = 'text' id = 'last-name' placeholder = 'Last name' value = {lastName} onChange = {handleLastName}/>
            </div>
            <input type="email" value = {email} placeholder="Email address" onChange={handleEmailInput}/>
                     
            <input type="email" value = {emailConfirmed} placeholder="Confirm your email address" onChange={handleEmailConfirmationInput}  />
            {isConfirmed && <p className='valid'>Email address confirmed succesfully!</p>}
            {!isConfirmed && <p className='invalid'>Email address doesn't match</p>}

            <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" value = {password} placeholder="Create a password" onChange={handlePasswordInput}/>
            {isStrong && <p className='valid'>Your password is strong</p>}
            {!isStrong && <p className='invalid'>Your password is too weak</p>}

            <button className ='sign-up-button'>
            <Link to="/homepage">Sign Up</Link>
            </button>
        
        </div>
        </div>
    )
}

export default SignUp