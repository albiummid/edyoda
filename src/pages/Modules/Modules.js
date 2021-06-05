import React, { useState } from 'react';
import { Container, ContainerHeader, ModulesContainer, Summary } from './Modules.elements';
import modulesData from '../../FakeData/ModuesData.js';
import SideNavBar from '../../shared/SideNavBar/SideNavBar';

const Modules = () => {
    const [active, setActive] = useState(modulesData?.[0]);
    const dateFormat = require("dateformat");
    const now = new Date();
    return (
        <ModulesContainer>
            <SideNavBar
                active={active}
                setActive={setActive}
            />
            <Container>

                <ContainerHeader>
                    <h2>
                        {active?.name}
                    </h2>
                    <small>
                        {
                            dateFormat(now, "dd, mmmm, yyyy, dddd")
                        }
                    </small>

                </ContainerHeader>
                <Summary>
                    <h4>
                        Session Plan
                    </h4>
                    <ol>
                        {
                            active?.session?.map((data, index) =>
                                <li key={index}>{data.title}</li>)
                        }
                    </ol>

                </Summary>

            </Container>
        </ModulesContainer>
    );
};

export default Modules;