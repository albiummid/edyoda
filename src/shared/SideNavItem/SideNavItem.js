import React from 'react';
import { SideItem } from './SideNavItem.elements';

const SideNavItem = ({ data, active, setActive }) => {
    const { name, icon, courses } = data;
    return (
        <SideItem onClick={() => setActive(data)}>
            <div className={data === active ? 'active' : ''}>
                <img src={icon} alt="" />

                <p>
                    {name}

                    {courses &&
                        courses.slice(0, 3).map((data, index) =>
                            <li key={index}>{data.title}</li>
                        )
                    }
                </p>

            </div>


        </SideItem>
    );
};

export default SideNavItem;