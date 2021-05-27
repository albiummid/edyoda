import React, { useState } from 'react';
import { ActionBar, ProgressContainer, TitleContainer, TopbarContainer } from './Topbar.elements';
import dropdown from '../../../images/dropdown-icon-white.svg'
import { Line } from 'rc-progress';
const Topbar = () => {
    const percent = 33;
    const [program, setProgram] = useState('JavaScript')
    const [click, setClick] = useState(false);
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
                <ProgressContainer>
                    <p>{percent} %</p>
                    <Line strokeWidth="5" trailWidth="5" percent={percent} />
                </ProgressContainer>
            </TopbarContainer>
            {
                click &&
                <ActionBar>
                    <small>Select Program</small>
                    <div>
                        <p className={program === 'JavaScript' && 'active-program'} onClick={() => setProgram('JavaScript')}>JavaScript</p>
                        <p className={program === 'React Js' && 'active-program'} onClick={() => setProgram('React Js')}>React Js</p>
                        <p className={program === 'Data Analysis' && 'active-program'} onClick={() => setProgram('Data Analysis')}>Data Analysis </p>
                    </div>
                </ActionBar>
            }
        </>
    );
};

export default Topbar;