import React from 'react';
import SideNavItem from '../SideNavItem/SideNavItem';
import { SideNav } from './SideNavBar.elements';
import modulesData from '../../FakeData/ModuesData.js'
import instructorsData from '../../FakeData/InstructorsData'
const SideNavBar = ({ active, setActive }) => {
    const currentPath = window.location.pathname;
    return (
        <SideNav >
            <h3>
                {currentPath === '/modules' ?
                    'Modules' : 'Instructors'
                }
            </h3>
            { currentPath === '/modules' ?
                modulesData.map((data, index) =>
                    <SideNavItem
                        key={index}
                        data={data}
                        active={active}
                        setActive={setActive}
                    />
                )
                :
                instructorsData.map((data, index) =>
                    <SideNavItem
                        key={index}
                        data={data}
                        active={active}
                        setActive={setActive}
                    />
                )
            }

        </SideNav>
    );
};

export default SideNavBar;