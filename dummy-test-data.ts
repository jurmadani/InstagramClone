export interface PeopleProps {
    id: number;
    nume: string;
    poza: any;
}

export const People: PeopleProps[] = [
    {
        id: 1,
        nume: "maria_3",
        poza: require('./assets/Images/random-5.jpg'),
    },
    {
        id: 2,
        nume: "zackjohn",
        poza: require('./assets/Images/random-6.jpg'),


    },
    {
        id: 3,
        nume: "elliot_johsnon",
        poza: require('./assets/Images/dummy-picture-2.jpg'),

    },
    {
        id: 4,
        nume: "maximus2303",
        poza: require('./assets/Images/random-1.jpg'),

    },
    {
        id: 5,
        nume: "alexandru0723",
        poza: require('./assets/Images/random-2.jpg'),

    },
    {
        id: 6,
        nume: "marius432",
        poza: require('./assets/Images/random-3.jpg'),

    },
    {
        id: 7,
        nume: "alexx_2014",
        poza: require('./assets/Images/random-4.jpg'),

    },
]

export const data = [
    {
        user_id: 1,
        user_image:
            require('./assets/Images/random-4.jpg'),
        user_name: 'Ahmet Çağlar Durmuş',
        stories: [
            {
                story_id: 1,
                story_image:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
                swipeText: 'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image:
                    'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
                swipeText: 'Custom swipe text for this story',
                onPress: () => console.log('story 2 swiped'),
            },
            {
                story_id: 3,
                story_image:
                    'https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg',
                swipeText: 'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            },
        ],
    },
    {
        user_id: 2,
        user_image:
            'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        user_name: 'Test User',
        stories: [
            {
                story_id: 1,
                story_image:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
                swipeText: 'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image:
                    'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
                swipeText: 'Custom swipe text for this story',
                onPress: () => console.log('story 2 swiped'),
            },
            {
                story_id: 3,
                story_image:
                    'https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg',
                swipeText: 'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            },
        ],
    },
    {
        user_id: 3,
        user_image:
            'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        user_name: 'Test User',
        stories: [
            {
                story_id: 1,
                story_image:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
                swipeText: 'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image:
                    'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
                swipeText: 'Custom swipe text for this story',
                onPress: () => console.log('story 2 swiped'),
            },
            {
                story_id: 3,
                story_image:
                    'https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg',
                swipeText: 'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            },
        ],
    },
];