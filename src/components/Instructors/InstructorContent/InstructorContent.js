import React from 'react';
import { Container } from '../../../pages/Modules/Modules.elements';
import videoImg from '../../../images/intro-video-placeholder.jpg'
import { About, Header, SkillCard, Skills, Stats, TagLine, Title } from './InstructorContent.elements';

const InstructorContent = ({ data }) => {
    const { name, socialLink, icon, stats, skills, about, tagline } = data;
    return (
        <Container>
            <Header>
                <div className="profile">
                    <div className="social">
                        <img src={icon} alt="" />
                        <div>
                            <a href={socialLink.github} target='_blank' rel="noreferrer"  >
                                <i class="fab fa-github"></i>
                            </a>
                            <a href={socialLink.website} target='_blank' rel="noreferrer" >
                                <i class="fas fa-globe-americas" ></i>
                            </a>

                            <a href={socialLink.linkedIn} target='_blank' rel="noreferrer">
                                <i class="fab fa-linkedin" ></i>
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
                        skills?.map(data =>
                            <SkillCard>
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

        </Container>
    );
};

export default InstructorContent;