/* eslint-disable import/first */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import wave from "assets/img/wavee.png";
import bg from "assets/img/bg.svg";
import avatar from "assets/img/avatar.svg";
import { Link } from "react-router-dom"
import "assets/css/styles.css"



function initialState() {
    return { user: '', password: '' };
}

const UserLogin = () => {
    const [values, setValues] = useState(initialState);

    function onChange(event: { target: { value: any; name: any; }; }) {
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value,
        })
    }



    return (
        <div>
            <img src={wave} className="wave" alt=""></img>
            <div className="containerr">
                <div className="bg">
                    <img src={bg} className="bg" alt=""></img>
                </div>
                <div className="login-content">
                    <form action="index.html">
                        <img src={avatar} className="avatar" alt="icon"></img>
                        <h2 className="title">Welcome</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <h5>Username</h5>
                                <input

                                    type="text"
                                    className="imput"

                                />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <h5>Password</h5>
                                <input

                                    type="password"
                                    className="password"

                                />
                            </div>
                            
                        </div>
                        <div className="forgot">
                            <a href='#'>Forgot Password?</a>
                        </div>
                        <Link className="btn" type="submit" to={'/main'}>
                            Login
                        </Link>

                    </form>
                </div>
            </div>
        </div>
    );
};
export default UserLogin;

