const menus = [
    {
        id: 1,
        name: "Home",
        links: "/",
    },
    {
        id: 2,
        name: "Marketplace",
        links: "/marketplace",
    },
    {
        id: 3,
        name: "Collections",
        namesub: [
            {
                id: 1,
                sub: "All Collections",
                links: "/collections",
            },
            {
                id: 2,
                sub: "BVM Studios",
                links: "/bvm_studios",
            },
            {
                id: 3,
                sub: "No Nerds Inc",
                links: "/no_nerds_inc",
            }
            
        ]
    },
    {
        id: 5,
        name: "My Profile",
        connected: true,
        namesub: [
            {
                id: 1,
                sub: "My profile",
                links: "/profile/:address",
            },
            {
                id: 2,
                sub: "Edit Profile",
                links: "/edit-profile",
            },
        ],
    },
];

export default menus;
