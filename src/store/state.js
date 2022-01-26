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

    groups: [
        'Bonsais',
        'Kids 1',
        'Kids 2',
        'Jugend/Erwachsene',
    ],

    mockTrainings: [
        {
            date: '01.02.2021',
            group: 'Kids 1',
            title: 'Kihon 1',
            content: 'Übungsreihenaufbau von (A) Low-Kick über (B) Front-Kick zu (C) High-Kick. Übungsreihenaufbau von (A) Low-Kick über (B) Front-Kick zu (C) High-Kick.',
            createdBy: 'Sascha',
            attendShow: false,
            attendees: [
                {
                    name: 'Anna',
                    age: 8,
                    grade: 'yellow',
                },
                {
                    name: 'Felix',
                    age: 12,
                    grade: 'blue',
                },
                {
                    name: 'Malte',
                    age: 8,
                    grade: 'white',
                },
                {
                    name: 'Dennis',
                    age: 8,
                    grade: 'yellow',
                },
                {
                    name: 'Kevin',
                    age: 9,
                    grade: 'orange',
                }
            ]
        },
        {
            date: '01.02.2021',
            group: 'Kids 2',
            title: 'Kihon 1',
            content: 'Übungsreihenaufbau von (A) Low-Kick über (B) Front-Kick zu (C) High-Kick.',
            createdBy: 'Claudia',
            attendShow: false,
            attendees: [
                {
                    name: 'Malte',
                    age: 8,
                    grade: 'white',
                },
                {
                    name: 'Jan',
                    age: 8,
                    grade: 'yellow',
                },
                {
                    name: 'Kevin',
                    age: 9,
                    grade: 'orange',
                },
                {
                    name: 'Anna',
                    age: 8,
                    grade: 'yellow',
                }
                

            ]
        },
        {
            date: '01.02.2021',
            group: 'Bonsais',
            title: 'Kihon 2',
            content: 'Übungsreihenaufbau von (A) Low-Kick über (B) Front-Kick zu (C) High-Kick. Übungsreihenaufbau von (A) Low-Kick über (B) Front-Kick zu (C) High-Kick. Übungsreihenaufbau von (A) Low-Kick über (B) Front-Kick zu (C) High-Kick.',
            createdBy: 'Alex',
            attendShow: false,
            attendees: [
                {
                    name: 'Malte',
                    age: 8,
                    grade: 'white',
                },
                {
                    name: 'Dennis',
                    age: 8,
                    grade: 'yellow',
                },
                {
                    name: 'Jan',
                    age: 8,
                    grade: 'yellow',
                },
                {
                    name: 'Kevin',
                    age: 9,
                    grade: 'orange',
                },
                {
                    name: 'Anna',
                    age: 8,
                    grade: 'yellow',
                }
                

            ]
        },
        {
            date: '01.02.2021',
            group: 'Erwachsene',
            title: 'Kihon 1',
            content: 'Übungsreihenaufbau (A) Low-Kick ',
            createdBy: 'Sascha',
            attendShow: false,
            attendees: [
                {
                    name: 'Malte',
                    age: 8,
                    grade: 'white',
                },
                {
                    name: 'Dennis',
                    age: 8,
                    grade: 'yellow',
                },
                {
                    name: 'Jan',
                    age: 8,
                    grade: 'yellow',
                },
                {
                    name: 'Kevin',
                    age: 9,
                    grade: 'orange',
                }
            ]
        },
        {
            date: '01.02.2021',
            group: 'Erwachsene',
            title: 'Kihon 1',
            content: 'Übungsreihenaufbau (A) Low-Kick Übungsreihenaufbau von (A) Low-Kick über (B) Front-Kick zu (C) High-Kick.',
            createdBy: 'Alex',
            attendShow: false,
            attendees: [
                {
                    name: 'Anna',
                    age: 8,
                    grade: 'yellow',
                },
                {
                    name: 'Felix',
                    age: 12,
                    grade: 'blue',
                },
                {
                    name: 'Malte',
                    age: 8,
                    grade: 'white',
                },
                {
                    name: 'Dennis',
                    age: 8,
                    grade: 'yellow',
                },
                {
                    name: 'Jan',
                    age: 8,
                    grade: 'yellow',
                },
                {
                    name: 'Kevin',
                    age: 9,
                    grade: 'orange',
                }
                

            ]
        },
    ]
    
};

export default state