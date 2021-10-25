import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../svg/logo.svg'
import checkmark from '../images/Checkmark.png'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '../components/Button'
import PlansFooter from '../components/plans/PlansFooter'

class Plans extends Component  {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
    return (
        <MainContainer>
            <div className="header-top">
                <Link to="/">
                    <Img src={logo} alt="logo" />
                </Link>
                <NavLink to="/login" 
                className="btn sign-btn">
                    Sign in
                </NavLink>
            </div>
            <div className="header-content">
                <img className="check-logo" src={checkmark} alt="checkmark" />
                <p>Step <strong>1</strong> of <strong>3</strong></p>
                <h2>Choose your plan.</h2>
                <div className="checked-list">
                    <div className="bullet">No commitments, cancel anytime.</div>
                    <div className="bullet">Everything on Netflix for one low price.</div>
                    <div className="bullet">Unlimited viewing on all your devices.</div>
                </div>
              <Link to="/"><Button>See the plans</Button></Link>
            </div>
            <PlansFooter />
        </MainContainer>
    )
 }
}

export default Plans

//Main Container
const MainContainer = styled.div`
    background: #fff;
    // header top
    .header-top {
        background: #fff;
        height: 6rem;
        border-bottom: 1px solid #e6e6e6;
    }

    .header-content {
        display: grid;
        justify-content: center;
        background: #fff;
        color: var(--main-dark);
        margin: auto;
        margin-bottom: 6rem;
        margin-top: 4.5rem;
        width: 65%;
        position: relative;
        text-align: center;
        align-content: center;
        flex-direction: column;
        z-index: 2;
    }

    // checkmark img
    .check-logo {
        width: 3rem;
        margin-top: 3.125rem;
    }

    .header-content img {
        margin: 6.25rem auto 0.6rem;
    }

    .header-content h2 {
        margin-top: -0.8rem;
        margin-bottom: 7px;
    }

    //checked-list
    .checked-list {
        text-align: left;
        margin: 1rem auto 3rem;
        padding-left: 1.5625rem;
        width: 85%;
        font-size: 17px;
        padding: auto;
    }

    // bullets
    .bullet{
        margin-top: 1rem;
        margin-left: 1rem;
        text-indent: -1em;
        line-height: 1.2rem;
    }

    .checked-list .bullet::before {
        color: transparent;
        display: inline-block;
        position: relative;
        height: 0.3rem;
        width: 0.8rem;
        content: '';
        left: -0.9375rem;
        bottom: 0.1875rem;
        border-bottom: 1px solid #e50914;
        border-left: 1px solid #e50914;
        transform: rotate(-45deg);
    }

    // sign in btn
    .sign-btn {
        margin: 1.5625rem 3% 0;
        padding: 0.4375rem 1.0625rem;
        font-weight: 700;
        line-height: normal;
        color: var(--main-dark);
        font-size: 1.25rem;
        right: 0;
        position: absolute;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }

`;

//img
const Img = styled.img`
    width: 10.5rem;
    height: 3.5rem;
    position: absolute;
    top: 49%;
    left: 8%;
    transform: translate(-50%, -50%);
    margin-left: 0;
`;