import { createContext, useEffect, useState } from "react";



export const AuthContext = createContext(null)
// const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)


    const authInfo = {
        user,
        // createUser,
        // signIn,
        // signInWithGoogle,
        // logOut,
        // updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;