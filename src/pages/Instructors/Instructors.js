import React, { useState } from 'react';
import SideNavItem from '../../shared/SideNavItem/SideNavItem';
import { Container, SideNav } from '../Modules/Modules.elements';
import { InstructorContainer } from './Instructors.elements';
import instructors from '../../FakeData/InstructorsData'
import InstructorContent from '../../components/Instructors/InstructorContent/InstructorContent';

const Instructors = () => {
    const instructorsData = instructors;
    const [open, setOpen] = useState(true);
    const [active, setActive] = useState(instructorsData?.[0]);

    return (
        <InstructorContainer>
            {open ?
                <SideNav open={open}>
                    <i onClick={() => setOpen(!open)} class="fas fa-times"></i>
                    <h3>
                        Instructors
                </h3>
                    {
                        instructorsData.map((data, index) =>
                            <SideNavItem key={index} data={data}
                                active={active}
                                setActive={setActive}
                            />
                        )
                    }
                </SideNav>
                :
                <i onClick={() => setOpen(!open)} class="fas fa-bars"></i>
            }
            <InstructorContent data={active} />

        </InstructorContainer>
    );
};

export default Instructors;