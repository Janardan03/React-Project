import { createContext } from "react";

// this is like a global value which everyone can access
const UserContext = createContext({
    loggedInUser: "default User",
});

export default UserContext;