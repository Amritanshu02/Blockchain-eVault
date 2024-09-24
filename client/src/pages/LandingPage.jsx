import React, { useContext } from 'react';
import "../styles/LandingPage.css";
import Navbar from '../components/Navbar';
import Button from '@mui/material/Button';
import { AppContext } from '../useContext/userContext';
import AdvantageSection from '../components/AdvantageSection';
import OurTeam from '../components/OurTeam';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const { accountData } = useContext(AppContext);

    return (
        <>
            <div className='landing-main-container'>
                <Navbar account={accountData} />

                <div className="landing-content">
                    <div className="landing-content-left">
                        <h1><span>Revolutionary way</span> to <br />save your legal documents</h1>
                        <p>Secure Legal Records Management with Blockchain Technology - Scalable and Integrated Solution</p>
                        {/* <button>LEARN MORE</button> */}
                        <Button variant="contained" style={{ backgroundColor: 'blueviolet' }}><Link to="https://drive.google.com/file/d/1wRGlbtslD2cBvGSnAEb1235RIF66j7RD/view?usp=drivesdk" target='_blank' style={{ textDecoration: "none", color: "white" }}>LEARN MORE</Link></Button>
                    </div>

                    <div className="landing-content-right">
                        <div id="design">
                            <div className="home-bg"></div>
                            <div className="home-bg bg2"></div>
                            <div className="home-bg bg3"></div>
                        </div>
                        {/* <img src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000" alt="image" /> */}
                    </div>
                </div>
            </div>
            <AdvantageSection />
            <OurTeam />
        </>
    )
}

export default LandingPage;