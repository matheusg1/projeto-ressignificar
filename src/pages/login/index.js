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

        let { data, error } = await supabase.auth.signInWithPassword({
            email: values.email,
            password: values.password
        })

        if (error) {
            MensagemErro();
            return;
        }
        setUser(data);

        navigate('/menu');
    }

    return (
        <form className="d-flex justify-content-center align-items-center col-12 col-sm-12 flex-fill"
            onSubmit={handleSubmit}>
            <div className="my-auto p-4 form-card rounded-1">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Login</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        name="email"
                        value={values.email}
                        onChange={handleChangeValues}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                        name="password"
                        value={values.password}
                        onChange={handleChangeValues}
                    />
                </div>
                <button type="submit" className="btn btn-outline-primary w-100">Entrar</button>
                {user && (
                    <button type="button" className="btn btn-danger">Usuario existe</button>
                )}
            </div>
        </form>
    )
}