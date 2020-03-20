import React, { useState, useEffect } from 'react';
import { AiOutlineLoading } from "react-icons/ai";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { Redirect } from 'react-router-dom';
import * as API from '../api';
import * as CONSTANTS from '../actions/constants';

import { connect } from 'react-redux';

export function Login({ customer, dispatch }) {

    const [request, setRequest] = useState(false);
    const [error, setError] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    function login() {
        setRequest(true);
        API.customerLogin(credentials)
            .then(
                res => {
                    if (res.errors) {
                        setRequest(false);
                        setError(true);
                    } else {
                        console.log(res)
                        dispatch({
                            type: CONSTANTS.CUSTOMER_SET,
                            customer: res.data.customerLogin
                        });
                    }
                }
            ).catch(
                error => {
                    console.log(error);
                    setRequest(false);
                }
            )
    }

    useEffect(() => {
        console.log(customer)
    }, [customer])

    return (

        <div className="container login">
            {
                customer !== null && <Redirect to="/main" />
            }
            <div className="container" id="container-login-bg" />
            <div className="container-overlay" />
            <div className="container-login">
                <div className="container-login-form">
                    <div className="logo" />
                    {
                        error && (
                            <div className="alert-box">Por favor, verifique suas credenciais.</div>
                        )
                    }
                    <form>
                        <input value={credentials.username} type="text" placeholder="Usuário" required onChange={event => setCredentials({ ...credentials, username: event.target.value })} />
                        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                            <input style={{ paddingRight: 60 }} value={credentials.password} type={showPass ? "text" : "password"} placeholder="Senha" required onChange={event => setCredentials({ ...credentials, password: event.target.value })} />
                            <div className="login-password" onClick={() => setShowPass(!showPass)}>
                                {
                                    showPass ? <IoMdEyeOff color="#b0b0b0" size="1.5em" /> : <IoMdEye color="#b0b0b0" size="1.5em" />
                                }
                            </div>
                        </div>

                        {
                            !request && (
                                <div>
                                    <span id="login-forgot">Esqueci minha senha</span>
                                    <button onClick={login} className="btn primary">Entrar</button>
                                </div>
                            )
                        }
                        {
                            request && (
                                <div className="login-loading">
                                    <div className="spin">
                                        <AiOutlineLoading color="#bae82d" size="3em" />
                                    </div>
                                </div>
                            )
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Login);