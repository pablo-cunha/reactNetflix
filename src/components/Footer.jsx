import React, { Component } from 'react'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <span style={{ marginLeft: '18%', fontSize: '1.125rem' }}
                >Any questions? Call 1-877-742-1335</span>
                <div className="footer-columns">
                    <ul>
                        <li>FAQ</li>
                        <li>Investor Relations</li>
                        <li>Ways to Watch</li>
                        <li>Corporate Information</li>
                        <li>Netflix Originals</li>
                    </ul>
                    <ul>
                        <li>Help Center</li>
                        <li>Jobs</li>
                        <li>Terms of Use</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul>
                        <li>Account</li>
                        <li>Redeem Gift Cards</li>
                        <li>Privacy</li>
                        <li>Speed Test</li>
                    </ul>
                    <ul>
                        <li>Media Center</li>
                        <li>Buy Gift Cards</li>
                        <li>Cookie Preferences</li>
                        <li>Legal Notices</li>
                    </ul>
                </div>
            </FooterContainer>
        )
    }
}

export default Footer

//MEDIA QUERY
const customMedia = generateMedia({
   tablet: '740px'
})

const FooterContainer = styled.footer`
    background: var(--main-deepdark);
    padding-top: 10rem;
    padding-bottom: 3rem;
    color: #999;

    .footer-columns {
        width: 70%;
        margin: 1rem auto 0;
        font-size: 0.9rem;
        overflow: auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);

        ${customMedia.lessThan('tablet')`
        grid-template-columns: repeat(2, 1fr));
        `}
    }

    ul li {
        list-style: none;
        line-height: 2.5;
        color: #999;
    }

    li:hover {
        text-decoration: underline;
        cursor: pointer;
    }



`