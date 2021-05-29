import React from 'react';
import { SidebarContainer } from './Sidebar.elements';
import homeImgWhite from '../../../images/home-white.svg'
import homeImgDark from '../../../images/home-dark.svg';
import modulesImgWhite from '../../../images/modules-white.svg'
import modulesImgDark from '../../../images/modules-dark.svg'
import instructorsImgWhite from '../../../images/instructors-white.svg'
import instructorsImgDark from '../../../images/instructors-dark.svg'
import BarItem from './BarItem/BarItem';

const Sidebar = ({ open }) => {
    return (
        <SidebarContainer open={open}>
            <BarItem
                path=''
                title='Home'
                imageWhite={homeImgWhite}
                imageDark={homeImgDark}
            />
            <BarItem
                path='modules'
                title='Modules'
                imageWhite={modulesImgWhite}
                imageDark={modulesImgDark}
            />
            <BarItem
                path='instructors'
                title='Instructors'
                imageWhite={instructorsImgWhite}
                imageDark={instructorsImgDark}
            />

        </SidebarContainer>
    );
};

export default Sidebar;