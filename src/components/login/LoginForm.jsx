import React, { Component } from 'react'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'
import { Link } from 'react-router-dom'
import fbLogo from '../../images/fb-logo.png'

const regexp = RegExp(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/);

const initialState = {
    checked: true,
    email: '',
    password: '',
    emailError: '',
    passwordError: ''
}

class LoginForm extends Component {
    
    state = initialState;

    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        });
    }

    handlePasswordChange = e => {
        this.setState({
            password: e.target.value
        });
    }

    // Validate
    validate = () => {
        let inputError = false;
        const errors = {
            emailError: '',
            passwordError: '',
        }

        if(!this.state.email) {
            inputError = true;
            errors.emailError = 'Please enter a valid email.'
        } else if (!this.state.email.match(regexp)) {
            inputError = true;
            errors.emailError = (
                <span style={{color: 'red'}}>Your email address must be valid</span>
            )
        }

        if(this.state.password.length < 4) {
            inputError = true;
            errors.passwordError = 'Your password must contain between 4 and 60 characters'
        }

        this.setState({
            ...errors
        })

        return inputError;
    };

    onSubmit = e => {
        e.preventDefault() 
        
        const err = this.validate();
        if(!err) {
            this.setState(initialState);
        }
    };

    // Checkbox
    handlerCheckbox = e => {
        this.setState({
            checked: e.target.checked
        })
    }

    render() {
        return (
            <FormContainer>
                <div className="form-container">
                    <form>
                        <h1>Sign In</h1>
                        <div className="input-container">
                            <input 
                            className={this.state.emailError ? 'input-error input-empty' : 'input-empty'}
                            type="email"
                            onChange= {this.handleEmailChange}
                            value={this.state.email}
                            required/>
                            <label>Enter a valid email</label>
                            <span style={{ color: '#db7302' }}>{this.state.emailError}</span>
                        </div>
                        <div className="input-container">
                            <input
                            className={this.state.passwordError ? 'input-error input-empty' : 'input-empty'}
                            type="password"
                            onChange= {this.handlePasswordChange}
                            value={this.state.password}
                            required/>
                            <label>Password</label>
                            <span style={{ color: '#db7302' }}>{this.state.passwordError}</span>
                        </div>
                        <div className="input-container">
                            <Button type="submit" onClick={e => this.onSubmit(e)}>Sign In</Button>
                        </div>
                        <label className="checkbox-container">
                            Remember me
                            <input
                            type="checkbox" 
                            defaultChecked={this.state.checked} 
                            onChange={this.handlerCheckbox} />
                            <span className="checkmark"></span>
                        </label>
                        <Link to="/" className="help">Need Help?</Link>
                        <div className="bottom-form">
                            <img src={fbLogo} alt="facebook login"/>
                            <Link to="/" className="login-fb">Login with Facebook</Link>
                            <br />
                            <br />
                            <span style={{ color: '#999' }}>New to Netflix?</span>&nbsp;
                            <Link to="/" className="sign-up-text">Sign up now</Link>
                        </div>
                    </form>
                </div>
            </FormContainer>
        )
    }
}

export default LoginForm

// Media Query

const customMedia = generateMedia({
    tablet: '640px'
})

const FormContainer = styled.div`
    display: grid;
    justify-content: center;
    position: relative;
    z-index: 5;
    ${customMedia.lessThan('tablet')`
    border-bottom: 0.9px solid #999;
`}

    .form-container {
        background: rgba(0,0,0,0.8);
        position: relative;
        width: 28.125rem;
        height: 41.25rem;
        padding: 4rem;

     ${customMedia.lessThan('tablet')`
            padding: 0.6rem;
            height: 35rem;
        `}
    }

    .input-container {
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 1.2rem;
    }

    .input-empty {
        color: #fff;
        background: #333;
        border: 0;
        border-radius: 0.25rem;
        height: 3rem;
        padding: 0.9rem 1.25rem 0;
    }

    form div label {
        position: absolute;
        top: 0.625rem;
        left: 1.25rem;
        poiner-events: none;
        color: #8a8a8a;
        font-size: 1rem;
        transition: transform 150ms ease-out, font-size 150ms ease-out;
    }

    form div {
        position: relative;
    }

    input:focus ~ label {
        top: 0.4375rem;
        font-size: 0.7rem;
    }

    input:focus {
        outline: none;
    }

    .input-error {
        border-bottom: 3px solid #db7302;
    }

    //CHECK-BOX
    .checkbox-container {
        margin-left: 0.75rem;
        padding-left: 1.875rem;
        position: relative;
        font-size: 0.9rem;
        cursor: pointer;
    }

    .checkbox-container input {
        display: none;
    }

    .checkbox-container .checkmark {
        display: inline-block;
        background: #454545;
        width: 1.1rem;
        height: 1.1rem;
        left: 0;
        top: 0;
        border-radius: 0.1rem;
        position: absolute;
    }

    .checkbox-container input:checked + .checkmark:after {
        content: '';
        position: absolute;
        height: 0.25rem;
        width: 0.625rem;
        border-left: 2px solid #000;
        border-bottom: 2px solid #000;
        top: 25%;
        left: 21%;
        transform: rotate(-45deg);
    }

    .help {
        text-decoration: none;
        color: #828282;
        margin-left: 6.6rem;
        font-size: 0.9rem;
        ${customMedia.lessThan('tablet')`
        margin-left: 13rem;
    `}
    }

    // Bottom Form
    .bottom-form img {
        width: 1.5625rem;
        margin: 0.625rem  0.625rem -0.4375rem 0;
    }

    .login-fb {
        color: #828282;
        font-size: 0.9rem;
    }

    .bottom-form {
        position: absolute;
        bottom: 0;
        margin-bottom: 4rem;
    }

    .sign-up-text {
        font-size: 1.1rem;
        color: #fff;
        &:hover {
            text-decoration: underline;
        }
    }
`;

// Button
const Button = styled.button`
    color: #fff;
    background: rgba(229, 9, 20);
    border: none;
    outline: none;
    padding: 0.8rem 1.3rem;
    border-radius: 0.125rem;
    font-size: 1rem;
    text-align: center;
    box-shadow: 0 1px 0 rgba(0,0,0,0.45);
    transition: opacity .2s ease-in;
    cursor: pointer;
    text-decoration: none;
    margin: 1rem 0;
`;
