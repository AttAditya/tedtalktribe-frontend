let userData = {
    "AttAditya": {
        password: "1234567890",
        username: "AttAditya",
        email: "attaditya@example.com",
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
}

async function login(caller, username, password) {
    return new Promise((resolve, reject) => {
        if (!userData[username]) {
            return reject({
                status: "error",
                message: "User not found"
            });
        }

        if (userData[username].password !== password) {
            return reject({
                status: "error",
                message: "Invalid password"
            });
        }

        setTimeout(() => {
            return resolve({
                status: "logged in",
                user: {
                    ...userData[username],
                    password: undefined
                }
            });
        }, 1000);
    });
}

function signup() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return reject({
                status: "Failed"
            });
        }, 1000);
    });
}

export function authCalls(caller) {
    return {
        login: (username, password) => login(caller, username, password),
        signup: () => signup()
    }
}