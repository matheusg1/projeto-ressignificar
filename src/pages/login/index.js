import React, { useState, useEffect } from 'react';
import { supabase, MensagemErro } from '../../services/apiServices'
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const { user, setUser } = useAuth();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    useEffect(() => {
        if (user) {
            navigate('/menu');
        }
    }, [user]);

    const handleChangeValues = (e) => {

        setValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!values.email || !values.password){
            return;
        }

        let { data, error } = await supabase.auth.signInWithPassword({
            email: values.email,
            password: values.password
        })

        if (error) {
            MensagemErro("Login ou senha inválidos");
            return;
        }
        setUser(data);

        navigate('/menu');
    }

    return (
        <form className="d-flex justify-content-center align-items-center col-12 col-sm-12 flex-fill"
            onSubmit={handleSubmit}>
            <div className="my-auto p-4 form-card rounded-1">
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="InputEmail"
                        name="email"
                        value={values.email}
                        onChange={handleChangeValues}
                        placeholder='Email'
                        required
                        />
                    <label for="InputEmail" className="form-label">Login</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="InputSenha"
                        name="password"
                        value={values.password}
                        onChange={handleChangeValues}
                        placeholder='Senha'
                        required
                    />
                    <label for="InputSenha" className="form-label">Senha</label>
                </div>
                <button type="submit" className="btn btn-lg btn-outline-primary rounded-2 w-100">Entrar</button>
                {user && (
                    <button type="button" className="btn btn-danger">Usuario existe</button>
                )}
            </div>
        </form>
    )
}