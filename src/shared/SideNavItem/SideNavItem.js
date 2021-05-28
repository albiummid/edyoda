import React from 'react';
import { SideItem } from './SideNavItem.elements';

const SideNavItem = ({ data, active, setActive }) => {
    const { name, icon } = data;
    return (
        <SideItem onClick={() => setActive(data)}>
            <div className={data === active ? 'active' : ''}>
                <img src={icon} alt="" />
                <small>
                    {name}
                </small>

            </div>

        </SideItem>
    );
};

export default SideNavItem;