import React, { useState } from 'react';
import { supabase } from '../../services/apiServices'
import { useAuth } from "../../hooks/useAuth";

export default function Login() {

    const { user, setUser } = useAuth();

    const [values, setValues] = useState({
        email: "",
        password: ""
    })

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
            alert(error);
            return;
        }

        setUser(user);
        console.log("login realizado com sucesso")
        window.location.reload()
    }

    return (
        <form className="d-flex justify-content-center align-items-center col-12 col-sm-12 flex-fill"
            onSubmit={handleSubmit}>
            <div className="my-auto p-4 about-card rounded-1">
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
                <button type="submit" className="btn btn-primary">Entrar</button>
            </div>
        </form>
    )
}