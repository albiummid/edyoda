import React, { useState } from 'react';
import { ActionBar, ModuleTop, ProgressContainer, TitleContainer, TopbarContainer } from './Topbar.elements';
import dropdown from '../../../images/dropdown-icon-white.svg'
import { Line } from 'rc-progress';
const Topbar = () => {
    const percent = 33;
    const [program, setProgram] = useState('Web Development');
    const [click, setClick] = useState(false);
    const programPicker = (title) => {
        setProgram(title);
    }
    const currentPath = window.location.pathname;

    return (
        <>
            <TopbarContainer>
                <TitleContainer>
                    <div>
                        <p>{program}</p>
                        <img className={click ? 'open' : 'close'} onClick={() => setClick(!click)} src={dropdown} alt="" />
                    </div>
                    <h4>
                        Full Stack Developer Program
                </h4>
                </TitleContainer>
                {currentPath === '/modules' ?
                    <ModuleTop>
                        <small>
                            Beginis in 12 Mins
                        </small>
                        <button>
                            Join Session
                        </button>
                    </ModuleTop>
                    :
                    <ProgressContainer>
                        <p>{percent} %</p>
                        <Line strokeWidth="5" trailWidth="5" percent={percent} />
                    </ProgressContainer>

                }
            </TopbarContainer>
            {
                <ActionBar onClick={() => setClick(!click)} click={click}>
                    <small>Select Program</small>
                    <div>
                        <p
                            className={program === 'Web Development' ? 'active-program' : ''}
                            onClick={() => programPicker('Web Development')}>
                            Web Development
                            </p>

                        <p className={program === 'Graphics Design' ? 'active-program' : ''}
                            onClick={() => programPicker('Graphics Design')}>
                            Graphics Design
                            </p>
                        <p
                            className={program === 'Machine Learning' ? 'active-program' : ''}
                            onClick={() => programPicker('Machine Learning')}>
                            Machine Learning
                             </p>
                    </div>
                </ActionBar>
            }
        </>
    );
};

export default Topbar;