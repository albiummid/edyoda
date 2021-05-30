import React, { useState } from 'react';
import SideNavItem from '../../shared/SideNavItem/SideNavItem';
import { Container, ContainerHeader, ModulesContainer, SideNav, Summary } from './Modules.elements';
import ModulesData from '../../FakeData/ModuesData';

const Modules = () => {
    const modulesData = ModulesData;
    const [active, setActive] = useState(modulesData?.[2]);
    const [open, setOpen] = useState(true);
    const dateFormat = require("dateformat");
    const now = new Date();
    return (
        <ModulesContainer>
            {open ? <SideNav open={open}>
                <i onClick={() => setOpen(!open)} className="fas fa-times"></i>
                <h3>
                    Modules
                </h3>
                {
                    modulesData.map((data, index) =>
                        <SideNavItem
                            key={index}
                            data={data}
                            active={active}
                            setActive={setActive}
                        />
                    )
                }

            </SideNav>
                :
                <i onClick={() => setOpen(!open)} className="fas fa-bars"></i>
            }
            <Container>
                <ContainerHeader>
                    <h2>
                        {active.name}
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
                            active.session.map((data, index) =>
                                <li key={index}>{data.title}</li>)
                        }
                    </ol>

                </Summary>

            </Container>
        </ModulesContainer>
    );
};

export default Modules;