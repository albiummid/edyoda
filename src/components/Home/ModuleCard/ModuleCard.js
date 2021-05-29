import React from 'react';
import { CardContainer } from './ModuleCard.elements';
import avatar from '../../../images/default-avatar.svg'
const ModuleCard = ({ data }) => {
    const { icon, name } = data;
    return (
        <CardContainer>
            <div className="title_bar">
                <img src={icon} alt="" />
                <div className="module_info">
                    <h2>
                        {name}
                    </h2>
                    <div>
                        <img src={avatar} alt="" />
                        <p className='text-brand'>John Doe </p>
                    </div>
                </div>
            </div>
            <div className="card_info">
                <div>
                    <h1>
                        2
                    </h1>
                    <small>
                        Weeks
                    </small>
                </div>
                <div>
                    <h1>
                        6
                    </h1>
                    <small>
                        Assignments
                    </small>
                </div>
                <div>
                    <h1>
                        9
                    </h1>
                    <small>
                        MCQ Quiz
                    </small>
                </div>
            </div>
        </CardContainer>
    );
};

export default ModuleCard;