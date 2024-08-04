async function login(caller, username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                status: "logged in",
                user: {
                    username: username,
                    email: username + "@example.com",
                    name: "Aditya Prasad Dash",
                    avatar: "https://picsum.photos/200/200",
                    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    permissions: [
                        "creator",
                        "moderator",
                        "admin",
                        "superadmin",
                        "developer"
                    ],
                    badges: [
                        {
                            id: 1,
                            content: "Badge 1",
                            icon: "https://picsum.photos/50/50"
                        },
                        {
                            id: 2,
                            content: "Badge 2",
                            icon: "https://picsum.photos/50/50"
                        }
                    ],
                    timezone: "UTC-5",
                    joined: "January 1, 2021",
                    communities: ["community1", "community2"],
                    social: {
                        linkedin: "https://linkedin.com/attachment-aditya",
                        instagram: "https://instagram.com/attachment-aditya",
                        github: "https://github.com/AttAditya",
                        leetcode: "https://leetcode.com/AttAditya",
                        codeforces: "https://codeforces.com/profile/attaditya"
                    }
                }
            });
        }, 1000);
    });
}

export function authCalls(caller) {
    return {
        login: (username, password) => login(caller, username, password)
    }
}