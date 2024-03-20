import SignUp from "../Pages/Authentication/SignUp";

export const Routes = [
    {
        key: 'signup',
        displayName: "Sign Up",
        link: "signup",
        component: <SignUp/>
    },
    {
        key: "profile",
        displayName: "Josh Will",
        link: "profile",
        collapse: [
            {
                key: "profile",
                displayName: "Josh Will",
                link: "profile",
                // component: <MyProfile />
            },
            {
                key: "setting",
                displayName: "setting",
                link: "/profile/settings",
                // component: <Settings />
            },
            {
                key: "logout",
                displayName: "Log out",
                link: "setting",
            }
        ]
    },
    {
        key: "profile",
        displayName: "Josh Will",
        link: "profile",
        // icon: <AccountCircleIcon />,
        showOnSideBar: true,
        // component: <UnderDevelopment />,
        isProfileSection: true,
        isBorderBottom: true,  
    },
]