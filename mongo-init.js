db.createUser(
        {
            user: "hobbymat",
            pwd: "password",
            roles: [
                {
                    role: "readWrite",
                    db: "hobbymat"
                }
            ]
        }
);
