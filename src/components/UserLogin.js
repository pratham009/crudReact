import React, { useRef } from 'react';
import Home from "./Home";
import "../App.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Styled from 'styled-components';


function UserLogin() {
    const email = useRef()
    const password = useRef()
    const getEmail = localStorage.getItem("emailData")
    const getPassword = localStorage.getItem("passwordData")
    const handleSubmit = () => {
        if (email.current.value === "abc@gmail.com" && password.current.value === "12345") {
            localStorage.setItem("emailData", "abc@gmail.com")
            localStorage.setItem("passwordData", "12345")
        }
    }
    
    return (
        
            <div>
            {
                getEmail && getPassword ?
                    <Home /> :
                    <form onSubmit={handleSubmit} >
                        <div className='iron' md="2">
                            <label>
                                Email:
                                <br></br>
                                <input className='roman'  name="Email" type="text" ref={email} />
                            </label>
                        </div>
                        <div className='iron' md="2">
                            <label>
                                Password:
                                <br></br>
                            <input className='roman'  type="password" ref={password} />
                            </label>
                        </div>
                        <Button size="lg" type="submit" className="login">Login</Button>
                    </form>
            }
            </div>
        
    );


}

export default UserLogin;