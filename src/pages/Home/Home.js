import React from 'react';
import { Container } from '../Modules/Modules.elements';
import { Header, ProgressBar } from './Home.elements';
import modulesData from '../../FakeData/ModuesData'
import { Line } from 'rc-progress';
import JavaScriptIcon from '../../images/tech-javascript.svg'
import avatar from '../../images/default-avatar.svg'
import ModuleCard from '../../components/Home/ModuleCard/ModuleCard';
const Home = () => {
    const dateFormat = require("dateformat");
    const now = new Date();
    return (
        <Container>
            <h1>
                Countinue Learning
            </h1>
            <Header>
                <div className="details">
                    <h4> View Module Detials </h4>
                    <div className="details_container">
                        <div className="modules">
                            <div className="title_bar">
                                <img src={JavaScriptIcon} alt="" />
                                <div className="module_info">
                                    <h2>
                                        JavaScript
                                    </h2>
                                    <div>
                                        <img src={avatar} alt="" />
                                        <p className='text-brand'>John Doe </p>
                                    </div>
                                </div>

                            </div>
                            <div className="visual_bar">
                                <p> Progress </p>
                                <div className="progress_bar">
                                    <p> 45 %</p>
                                    <Line strokeWidth="5" trailWidth="5" percent='50' />
                                </div>
                            </div>
                            <div className="visual_bar">
                                <p> Live Sessions </p>
                                <div className="progress_bar">
                                    <p> 15/35</p>
                                    <Line strokeWidth="5" trailWidth="5" percent='43' />
                                </div>
                            </div>
                            <div className="visual_bar">
                                <p> Assignments </p>
                                <div className="progress_bar">
                                    <p> 1/4</p>
                                    <Line strokeWidth="5" trailWidth="5" percent='25' />
                                </div>
                            </div>
                            <div className="visual_bar">
                                <p> MCQ Quiz </p>
                                <div className="progress_bar">
                                    <p> 5/6 </p>
                                    <Line strokeWidth="5" trailWidth="5" percent='83' />
                                </div>
                            </div>


                        </div>


                        <div className="plan">
                            <h2>
                                Today's Plan

                            </h2>
                            <small >
                                {
                                    dateFormat(now, "dd, mmmm, yyyy")
                                }
                            </small>
                            <h3 className='text-brand'>
                                JavaScript
                            </h3>
                            <div className="status">
                                <p>Quiz / Assignment</p>
                                <small className='text-brand'>
                                    opens at 7 PM
                                </small>
                            </div>
                            <div className="session_action">
                                <button>
                                    Join Live Session
                                </button>
                                <p>
                                    Session In Progress
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="progress">
                    <h3>
                        Progress Overview
                    </h3>
                    <ProgressBar>
                        <div className="bar_info">
                            <h2>
                                94%
                                </h2>
                            <p>Overall Grade</p>
                        </div>
                        <Line strokeColor="#08A66C" strokeWidth="5" trailColor='#D1DFD3' trailWidth="5" percent='94' />

                    </ProgressBar>
                    <ProgressBar>
                        <div className="bar_info">
                            <h2>
                                32%
                                </h2>
                            <p>Attendance</p>
                        </div>
                        <Line strokeColor="#ED4A4C" strokeWidth="5" trailWidth="5" trailColor='#DFD1D1' percent='32' />

                    </ProgressBar>
                    <h5 className='text-brand'>
                        VIEW DETAILED PROGRESS
                    </h5>
                </div>

            </Header>
            <div className="modules_section">
                <h1> Upcomming Modules </h1>
                <div className='card_container'>
                    {
                        modulesData.map((data, index) =>
                            <ModuleCard key={index} data={data} />
                        )
                    }
                </div>
                <div className='slider_buttons'>
                    <i className="fas fa-arrow-circle-left"></i>
                    <i className="fas fa-arrow-circle-right"></i>
                </div>
            </div>
        </Container>
    );
};

export default Home;