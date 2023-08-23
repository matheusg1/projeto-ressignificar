import { createContext, useState, useContext, useEffect } from "react";
import { supabase } from "../services/apiServices";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState('');

    useEffect(() => {
        async function fetchUser() {
            try {
                const user = await supabase.auth.getUser();
                console.log(user)

                if (user.data.user) {
                    setUser(user);
                    console.log(user)
                    console.log('usuario esta logado')
                } else if(user.error) {
                    setUser('');
                    console.log('usuario definido como null');
                }
            } catch (error) {
                console.error('Erro ao buscar usuário:', error.message);
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
