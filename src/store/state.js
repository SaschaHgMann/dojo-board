const state =  {
    appBar: {
        title: 'Kyotokan e.V.', 
    },

    bottomNavigationItems: [
        {
            title: 'Trainings',
            linkTo: '/',
            icon: 'mdi-karate',
            active: null,
        },
        {
            title: 'Member',
            linkTo: '/membersOverview',
            icon: 'mdi-account-group',
            active: null,
        },
        {
            title: 'Termine',
            linkTo: '/scheduleOverview',
            icon: 'mdi-calendar',
            active: null,
        },
    ],
    
};

export default state