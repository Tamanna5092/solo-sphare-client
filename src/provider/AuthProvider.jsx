import { createContext, useEffect, useState } from "react";



export const AuthContext = createContext(null)
// const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // const [loading, setLoading] = useState(true)

    // // create user
    // const createUser = (email, password) => {
    //     return createUserWithEmailAndPassword(auth, email, password)
    // }
    // //  sign In
    // const signIn = (email, password) => {
    //     return signInWithEmailAndPassword(auth, email, password)
    // }

    // // Log out
    // const logOut =  () =>{
    //     return signOut(auth)
    // }

    // // google login
    // const signInWithGoogle = () => {
    //     setLoading(true)
    //     return signInWithPopup(auth, googleProvider)
    // }

    // // update user profile
    // const updateUserProfile = () => {
    //     return updateProfile(auth.currentUser, {
    //         displayName: name,
    //         photoURL: photo,
    //     })
    // }

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser)
    //     })
    //     return () => {
    //         unsubscribe
    //     }
    // },[])

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