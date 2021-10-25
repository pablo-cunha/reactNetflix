import React from 'react'
import { Button } from './Button'
import styled from 'styled-components'
import tvImg from '../images/tab-tv.png'
import padImg from '../images/tab-tablet.png'
import pcImg from '../images/tab-macbook.png'
import { Link } from 'react-router-dom'

import { generateMedia } from 'styled-media-query'

function SecondTab() {
    return (
        <TabContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span style={{ fontSize: '1.5rem' }}>Watch TV shows and movies anytime, anywhere -
                        personalized for you.
                    </span>
                    <Link className="btn" to="/plans">
                    <Button >try it now</Button>
                    </Link>
                </div>
                {/* Bottom content */}
                <div className="tab-bottom-content">
                     {/* TV IMAGE */}
                    <div>
                        <img src={tvImg} style={{ width: '18.75rem' }}/>
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players and
                            more.</p>
                    </div>
                        {/* TABLET IMAGE */}
                    <div>
                        <img src={padImg} style={{ width: '18.75rem', paddingTop: '0.625rem' }}/>
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players and
                            more.</p>
                    </div>
                        {/* PC IMAGE */}
                    <div>
                        <img src={pcImg} style={{ width: '18.75rem', paddingTop: '0.625rem', 
                        paddingBottom: '0.625rem' }}/>
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players and
                            more.</p>
                    </div>
                </div>
            </div>
        </TabContainer>
    )
}

export default SecondTab

// Media query
const customMedia = generateMedia({
    smDesktop: '1440px',
    tablet: '900px'
})

//Main Tab Content Container
const TabContainer = styled.div`
    background: var(--main-deepdark);

    .tab-content {
        margin: 0 15%;
    }

    .tab-top-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        justify-content: center;
        align-items: center;
        padding: 2.5rem 0;

        ${customMedia.lessThan('smDesktop')`
            grid-template-columns: repeat(2, 1fr);
        `}

        ${customMedia.lessThan('tablet')`
        grid-template-columns: 1fr;
        text-align: center;
        row-gap: 1.5rem;
        `}
    }

    span {
        grid-column: 1 / 8;
        ${customMedia.lessThan('tablet')`
        grid-column: 1 / -1;
        font-size: 1.5rem;
    `}
    }

   .btn {
        grid-column: 10 / 12 !important;
        ${customMedia.lessThan('tablet')`
        grid-column: 1 / -1;
        margin-left: 30%;
        margin-right: 30%;
        `}
    }

    img {
        width: 100%;
    }

    .tab-bottom-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        text-align: center;
        margin-top: 2rem;

        ${customMedia.lessThan('tablet')`
        grid-template-columns: 1fr; 
    `}
    }

    h3 {
        margin: 0.5rem 0;
    }

    p {
        color: var(--main-grey);
    }
`