import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../../components/Dashboard/Sidebar/Sidebar';
import Topbar from '../../components/Dashboard/Topbar/Topbar';
import Home from '../Home/Home';
import Instructors from '../Instructors/Instructors';
import Modules from '../Modules/Modules';
import { Main, Section } from './Dashboard.elements';


const Dashboard = () => {
    const { currentPath } = useParams();
    const [open, setOpen] = useState(false);
    window.addEventListener('resize', function (event) {
        const width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        if (width < 600) {
            setOpen(false)
        }
        else {
            setOpen(true)
        }
    });
    return (
        <Main>
            <Topbar open={open} setOpen={setOpen} />
            <Section>
                <Sidebar open={open} />
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