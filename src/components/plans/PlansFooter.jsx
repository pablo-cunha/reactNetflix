import React from 'react'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

function PlansFooter() {
    return (
    <FooterContainer>
        <div className="footer-wrapper">
              <span style={{ marginLeft: '8%', color:'#999' }}
                >Any questions? Call 1-877-742-1335</span>
                <div className="footer-columns">
                    <ul>
                        <li>FAQ</li>
                    </ul>
                    <ul>
                        <li>Terms of Use</li>
                    </ul>
                    <ul>
                        <li>Help Center</li>
                    </ul>
                    <ul>
                        <li>Privacy</li>
                    </ul>
                </div>
        </div>
    </FooterContainer>
    )
}

export default PlansFooter

//MEDIA QUERY
const customMedia = generateMedia({
    tablet: '640px'
 });
 
 const FooterContainer = styled.footer`
     display: grid;
     justify-content: center;
     background: #f3f3f3;
     padding: 1.875rem 0;
     margin-top: 10rem;
     position: relative;
     border-top: 1px solid #e6e6e6;
     z-index: 5;
 
     .footer-columns {
         display: grid;
         width: 80%;
         color: #999;
         margin: 1rem 3rem 0 3rem;
         font-size: 0.9rem;
         grid-template-columns: repeat(4, 15.625rem);
         grid-gap: 0.3rem;
 
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

     .footer-wrapper {
         margin: 0 auto;
         padding: 1.25rem;
     }
 `;