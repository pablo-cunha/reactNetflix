import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'
// Files Imports
import { Button } from './Button'
import logo from '../svg/logo.svg'
import {Icon} from 'react-icons-kit'
import {ic_navigate_next} from 'react-icons-kit/md/ic_navigate_next'

class Header extends Component {
    render() {
        return (
            <HeaderComponent className="header-container">
                <div className="header-top">
                    <Logo src={logo}/>
                    <NavLink to="/login" className="signin-btn">Sign In</NavLink>
                </div>
                {/* Header Content*/}
                <div className="header-content">
                    <Title>See whats next.</Title>
                    <Subtitle>WATCH ANYWHERE. CANCEL ANYTIME.</Subtitle>
                    <Link to="/plans">
                    <Button className="main-btn" primary>
                            try it now
                        <Icon className="text-icon" icon={ic_navigate_next} size={37}/>
                    </Button>
                    </Link>
                </div>
            </HeaderComponent>
        )
    }
}


export default Header

const customMedia = generateMedia({
    lgDesktop: '1350px',
    mdDesktop: '1150px',
    tablet: '960px',
    smTablet: '740px'
})

//Logo
const Logo = styled.img`
    width: 10rem;
    height: 3.5rem;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-left: 0;
    ${customMedia.lessThan('tablet')`
        left: 20%;
    `}
`;

//Header Container
const HeaderComponent = styled.header`
    .signin-btn {
        right: 0;
        margin: 1.125rem 3% 0;
        padding: 0.4375rem 1.0625rem;
        font-weight: 400;
        line-height: normal;
        border-radius: 0.1875rem;
        font-size: 1rem;
        background: var(--main-red);
        position: absolute;
        translate: transform(-50%, -50%);
        cursor: pointer;
        transition: background 0.2s ease-in;
        &:hover {
            background: var(--main-red-hover)
        }
        ${customMedia.lessThan('smTablet')`
            margin-top: 1.25rem;
            right: 5%;
        `}
    }

    .header-top {
        z-index: 1;
        position: relative;
        height: 10rem;
    }

    .header-content {
        z-index: 2;
        width: 65%;
        position: relative;
        margin: 4.5rem auto 0;
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
        flex-direction: column;
        ${customMedia.lessThan('smTablet')`
            display: grid;
            grid-template-rows: repeat(3, 60px);
            margin-top: 8rem;
        `}
    }

    .main-btn {
        ${customMedia.lessThan('lgDesktop')`
            margin: 0 33%;
            font-size: 1.5rem;
        `}

        ${customMedia.lessThan('mdDesktop')`
        margin: 0 25%;
        font-size: 1.5rem;
        `}

        ${customMedia.lessThan('tablet')`
        margin: 0 20%;
        font-size: 1.3rem;
        `}
    }

    .text-icon {
        vertical-align: bottom !important;
        margin-left: 1.5rem;
        
        ${customMedia.lessThan('smTablet')`
        display: none !important;
        `}
    }
`;

// Main title
const Title = styled.h1`
    margin: 0 0 1.2rem;
    font-size: 5rem;
    font-weight: 700;
    line-height: 1.1em;

    ${customMedia.lessThan('tablet')`
        font-size: 2.6rem;
    `}
`;

// Subtitle
const Subtitle = styled.h2`
    margin: 0 0 1.875rem;
    font-size: 1.875rem;
    font-weight: 400;
    line-height: 1.25em;
    text-transform: uppercase;

    ${customMedia.lessThan('smTablet')`
    font-size: 1.4rem;
    margin: 0;
`}
`;