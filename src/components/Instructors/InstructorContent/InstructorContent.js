import React from 'react';
import videoImg from '../../../images/intro-video-placeholder.jpg'
import { About, Header, InstructorContainer, SkillCard, Skills, Stats, TagLine, Title } from './InstructorContent.elements';

const InstructorContent = ({ data }) => {
    const { name, socialLink, icon, stats, skills, about, tagline } = data;
    return (
        <InstructorContainer>
            <Header>
                <div className="profile">
                    <div className="social">
                        <img src={icon} alt="" />
                        <div>
                            <a href={socialLink.github} target='_blank' rel="noreferrer"  >
                                <i className="fab fa-github"></i>
                            </a>
                            <a href={socialLink.website} target='_blank' rel="noreferrer" >
                                <i className="fas fa-globe-americas" ></i>
                            </a>

                            <a href={socialLink.linkedIn} target='_blank' rel="noreferrer">
                                <i className="fab fa-linkedin" ></i>
                            </a>
                        </div>
                    </div>
                    <h1>
                        {name}
                    </h1>
                </div>
                <img className='video' src={videoImg} alt="" />
            </Header>

            <Stats>
                <Title> STATS </Title>
                <div>
                    <div>
                        <h1>
                            {stats.hours}
                        </h1>
                        <small>
                            Total Hours Taught
                            </small>
                    </div>
                    <div>
                        <h1>
                            {stats.students}
                        </h1>
                        <small>
                            Students Taught
                            </small>
                    </div>
                </div>

            </Stats>
            <Skills>
                <Title>
                    TECHNICAL EXPERTISE
                </Title>
                <div className="skillContainer">
                    {
                        skills?.map((data, index) =>
                            <SkillCard key={index}>
                                <img src={data.icon} alt="" />
                                <p>{data.title}</p>
                            </SkillCard>
                        )
                    }

                </div>

            </Skills>
            <TagLine>
                <Title>
                    TAGLINE
                </Title>
                <p>
                    {tagline}
                </p>

            </TagLine>
            <About>
                <Title>
                    ABOUT
                </Title>
                <p>
                    {about}
                </p>

            </About>
        </InstructorContainer>
    );
};

export default InstructorContent;