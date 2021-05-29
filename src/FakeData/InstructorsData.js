import htmlIcon from '../images/tech-html.svg'
import cssIcon from '../images/tech-css.svg'
import JavaScriptIcon from '../images/tech-javascript.svg'
import reactJsIcon from '../images/tech-reactjs.svg'
import dataIcon from '../images/tech-data-analysis.svg'
import avatar from '../images/default-avatar.svg'
const Instructors = [
    {
        name: 'John Doe',
        icon: avatar,
        skills: [
            {
                title: 'HTML5',
                icon: htmlIcon,
            },
            {
                title: 'CSS3',
                icon: cssIcon,
            },
            {
                title: 'JavaScript',
                icon: JavaScriptIcon,
            },
            {
                title: 'ReactJS',
                icon: reactJsIcon,
            },
        ]
        ,
        socialLink: {
            linkedIn: 'https://linkedin.com/in/albiummid',
            portfolio: 'https://albi.netlify.app',
            github: 'https://github.com/albiummid'
        },
        stats: { hours: 1320, students: 468 }
        ,
        tagline: 'Everything you want is outside of your comfort zone.'
        ,
        about: 'John is a Computer Science graduate. He has been part of the corporate circle since his college days. In his early days, he was part of a startup team delivering production grid android apps. Currently, he is a lead developer at www.edyoda.com. He is responsible for the entire front-end development & integration with the back-end. React, Python, Django are his areas of expertise. He has been delivering corporate training for Android, React, Javascript, Python & Django. '
    },
    {
        name: 'Daphne Doe',
        icon: avatar,
        skills: [
            {
                title: 'Python',
                icon: reactJsIcon,
            },
            {
                title: 'Data Structures & Algorithms',
                icon: dataIcon,
            },
        ]
        ,
        socialLink: {
            linkedIn: 'https://linkedin.com/in/albiummid',
            portfolio: 'https://albi.netlify.app',
            github: 'https://github.com/albiummid'
        },
        stats: { hours: 1000, students: 258 }
        ,
        tagline: 'Everything you want is outside of your comfort zone.'
        ,
        about: 'John is a Computer Science graduate. He has been part of the corporate circle since his college days. In his early days, he was part of a startup team delivering production grid android apps. Currently, he is a lead developer at www.edyoda.com. He is responsible for the entire front-end development & integration with the back-end. React, Python, Django are his areas of expertise. He has been delivering corporate training for Android, React, Javascript, Python & Django. '
    },
]

export default Instructors;