import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { ItemContainer } from './BarItem.elements';

const BarItem = ({ path, imageWhite, imageDark, title }) => {
    const currentPath = window.location.pathname;
    useParams();
    return (
        <ItemContainer>
            <NavLink exact activeClassName='active-item'
                to={path}
            >
                <img
                    src={
                        currentPath === path ?
                            imageDark
                            :
                            imageWhite
                    } alt="" />

                <small>
                    {title}
                </small>

            </NavLink>
        </ItemContainer>
    );
};

export default BarItem;