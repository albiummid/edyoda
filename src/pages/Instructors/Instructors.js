import React, { useState } from 'react';
import { InstructorContainer } from './Instructors.elements';
import instructors from '../../FakeData/InstructorsData'
import InstructorContent from '../../components/Instructors/InstructorContent/InstructorContent';
import SideNavBar from '../../shared/SideNavBar/SideNavBar';

const Instructors = () => {
    const instructorsData = instructors;
    const [active, setActive] = useState(instructorsData?.[0]);

    return (
        <InstructorContainer>
            <SideNavBar
                active={active}
                setActive={setActive}
            />
            <InstructorContent data={active} />

        </InstructorContainer>
    );
};

export default Instructors;