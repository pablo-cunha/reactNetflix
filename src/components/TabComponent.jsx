import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../css/TabsNav.css'
// TABS IMPORTS
import TabDoor from './tabsNav/TabDoor';
import TabDevice from './tabsNav/TabDevice';
import TabPrice from './tabsNav/TabPrice';

import FirstTab from './FirstTab'
import SecondTab from './SecondTab';
import ThirdTab from './ThirdTab';

class TabComponent extends Component {
    state = {
        tabIndex: 0
    }

    render() {
        return (
            <div>
                <Tabs className="main-tabs" selectedIndex={this.state.tabIndex} 
                onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList className='tab-nav'>
                        <Tab className={`${this.state.tabIndex === 0 ? 'active tab-selected' : null }`}>
                            <TabDoor />
                            <p className="lgScreen" style={{ marginBottom: '1.875rem' }}><strong>No commitments <br />
                            Cancel online at anytime</strong></p>
                            <br />
                            <span className="mdScreen" style={{ marginTop: '0.4rem' }}>Cancel</span>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 1 ? 'active tab-selected' : null }`}>
                            <TabDevice />
                            <p className="lgScreen" style={{ marginTop: '-5.3125rem' }}><strong>Watch anywhere</strong></p>
                            <span className="mdScreen" style={{ marginTop: '-5.3125rem' }}>Devices</span>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 2 ? 'active tab-selected' : null }`}>
                            <TabPrice />
                            <p className="lgScreen"><strong>Pick your price</strong></p>
                            <br />
                            <span className="mdScreen" style={{}}>Prices</span>
                        </Tab>
                    </TabList>
                    {/* Tabs Content */}
                    <TabPanel>
                        <FirstTab />
                    </TabPanel>
                    <TabPanel>
                        <SecondTab />
                    </TabPanel>
                    <TabPanel>
                        <ThirdTab />
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default TabComponent
