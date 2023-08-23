import { createContext, useState, useContext, useEffect } from "react";
import { supabase } from "../services/apiServices";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState('');

    useEffect(() => {
        async function fetchUser() {
            try {
                const user = await supabase.auth.getUser();
                
                if (user.data.user) {
                    setUser(user);

                } else if(user.error) {
                    setUser('');                    
                }
            } catch (error) {
                //tratar
            }
        }
        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
