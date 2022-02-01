const state =  {
    appBar: {
        title: 'Kyotokan e.V.', 
    },

    navigationItems: [
        {
            title: 'Trainings',
            linkTo: '/trainings',
            icon: 'mdi-karate',
        },
        {
            title: 'Member',
            linkTo: '/member',
            icon: 'mdi-account-group',
        },
        {
            title: 'Termine',
            linkTo: '/schedule',
            icon: 'mdi-calendar',
        },
    ],
    
    navigationValue: null,

    groups: [
        'Bonsais',
        'Kids 1',
        'Kids 2',
        'Jugend/Erwachsene',
    ],

    mockTrainings: [
        {
            date: '2021-02-01',
            group: 'Kids 1',
            title: 'Kihon 1',
            content: 'Übungsreihenaufbau von (A) Low-Kick über (B) Front-Kick zu (C) High-Kick. Übungsreihenaufbau von (A) Low-Kick über (B) Front-Kick zu (C) High-Kick.',
            coach: 'Sascha',
            createdAt: null,
            createdBy: 'Sascha',
            editedAt: null,
            editedBy: null,
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
            date: '2021-02-02',
            group: 'Kids 2',
            title: 'Kihon 1',
            content: 'Übungsreihenaufbau von (A) Low-Kick über (B) Front-Kick zu (C) High-Kick.',
            coach: 'Claudia',
            createdAt: null,
            createdBy: 'Sascha',
            editedAt: null,
            editedBy: null,
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
            date: '2021-02-03',
            group: 'Bonsais',
            title: 'Kihon 2',
            content: 'Übungsreihenaufbau von (A) Low-Kick über (B) Front-Kick zu (C) High-Kick. Übungsreihenaufbau von (A) Low-Kick über (B) Front-Kick zu (C) High-Kick. Übungsreihenaufbau von (A) Low-Kick über (B) Front-Kick zu (C) High-Kick.',
            coach: 'Alex',
            createdAt: null,
            createdBy: 'Sascha',
            editedAt: null,
            editedBy: null,
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
            date: '2021-02-04',
            group: 'Jugend/Erwachsene',
            title: 'Kihon 1',
            content: 'Übungsreihenaufbau (A) Low-Kick ',
            coach: 'Sascha',
            createdAt: null,
            createdBy: 'Sascha',
            editedAt: null,
            editedBy: null,
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
            date: '2021-02-05',
            group: 'Bonsais',
            title: 'Kihon 1',
            content: 'Übungsreihenaufbau (A) Low-Kick Übungsreihenaufbau von (A) Low-Kick über (B) Front-Kick zu (C) High-Kick.',
            coach: 'Alex',
            createdAt: null,
            createdBy: 'Sascha',
            editedAt: null,
            editedBy: null,
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