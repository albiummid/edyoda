import React from 'react';
import { useParams } from 'react-router';
import Sidebar from '../../components/Dashboard/Sidebar/Sidebar';
import Topbar from '../../components/Dashboard/Topbar/Topbar';
import Home from '../Home/Home';
import Instructors from '../Instructors/Instructors';
import Modules from '../Modules/Modules';
import { Main, Section } from './Dashboard.elements';

const Dashboard = () => {
    const { currentPath } = useParams();
    return (
        <Main>
            <Topbar />
            <Section>
                <Sidebar />
                {currentPath === 'instructors' &&
                    <Instructors />
                }

                {
                    currentPath === undefined &&
                    <Home />
                }
                {
                    currentPath === 'modules' &&
                    <Modules />


                }
            </Section>
        </Main>
    );
};

export default Dashboard;