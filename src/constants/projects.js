const projects = [
    {
        title: 'Smart Contracts Market',
        description:
            'Group project. Built an app that allows users to create code challenges to be solved and paid through smart contracts linked to Github Actions for automatic testing.',
        image: '/images/scmkt.png',
        tags: ['React', 'Node', 'Chainlink', 'Github'],
        source: 'https://github.com/zzzNitro/SCMKT_Back',
        visit: '',
        id: 0,
    },
    {
        title: 'Personality Feed',
        description:
            'Created an app that allows users to send personality quizzes to candidates and get a personality feedback based on Big Five, while keeping track of results on a dashboard.',
        image: '/images/pfeed.png',
        tags: ['React', 'REST', 'Django', 'MongoDB'],
        source: '',
        visit: 'https://dvmfront-7058c.web.app/',
        id: 1,
    },
    {
        title: 'Code Challenge: React',
        description:
            'Built an app to match the technical and visual requirements, backend checks for text sent through params and returns, front form inputs params and records previous results.',
        image: '/images/challenge.png',
        tags: ['React', 'Node', 'Redux', 'Express'],
        source: 'https://github.com/zzzNitro/copywritefront',
        visit: 'https://copywritefront.herokuapp.com/',
        id: 2,
    },
    {
        title: 'Countries',
        description:
            "An app that consumes an API that returns a list of countries and their corresponding attributes, on top of which vacation activities can be created with a React form.",
        image: '/images/countries.png',
        tags: ['React', 'Node', 'Express', 'PostgreSQL'],
        source: 'https://github.com/zzzNitro/Countries_PI',
        visit: '',
        id: 3,
    },
    {
        title: 'Dev Portfolio Website',
        description:
            'A mobile-first, responsive, sleek website to show off my skills.',
        image: '/images/portfolio.png',
        tags: ['NextJS', 'Node', 'Cypress', 'Happo.io'],
        source: 'https://github.com/zzzNitro/Portfolio',
        visit: 'https://pbreactprtfl.herokuapp.com/',
        id: 4,
    },
]
// this is the way to work with Jest
module.exports = { projects }