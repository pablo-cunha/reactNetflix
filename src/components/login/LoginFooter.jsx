import React, { Component } from 'react'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <span style={{ marginLeft: '13%', color:'999' }}
                >Any questions? Call 1-877-742-1335</span>
                <div className="footer-columns">
                    <ul>
                        <li>Gift Card Terms</li>
                    </ul>
                    <ul>
                        <li>Terms of Use</li>
                    </ul>
                    <ul>
                        <li>Privacy Statement</li>
                    </ul>
                    <br />
                    <ul>
                        <li>Netflix Canada</li>
                    </ul>
                </div>
            </FooterContainer>
        )
    }
}

export default Footer

//MEDIA QUERY
const customMedia = generateMedia({
   tablet: '640px'
});

const FooterContainer = styled.footer`
    justify-content: center;
    background: rgba(0,0,0, 0.8);
    padding-top: 3rem;
    padding-bottom: 6rem;
    margin-top: 6rem;
    position: relative;
    z-index: 5;

    .footer-columns {
        width: 80%;
        color: #999;
        margin: 1rem auto 0;
        font-size: 0.9rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);

        ${customMedia.lessThan('tablet')`
        grid-template-columns: repeat(2, 1fr));
        `}
    }

    ul li {
        font-size: 0.9rem;
        list-style: none;
        line-height: 2.5;
        color: #999;
    }

    li:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;