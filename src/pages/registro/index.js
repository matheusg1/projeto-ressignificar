import { useState } from 'react';
import { supabase, MensagemSucesso, MensagemErro } from '../../services/apiServices'
import { useAuth } from "../../hooks/useAuth";
import { useNavigate  } from 'react-router-dom';

export default function Registro() {
    const { user, setUser } = useAuth();

    const navigate = useNavigate();

    /*if(user){
        navigate('/login')
    }*/

    const [values, setValues] = useState({
        email: "",
        password: "",
        //passwordConfirm: ""
    })

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

        let { data, error } = await supabase.auth.signUp({
            email: values.email,
            password: values.password
        })        

        if (error) {
            //tratar
            MensagemErro("Erro ao cadastrar usuário");
            return;
        }

        setUser(data);        
        MensagemSucesso('Cadastro realizado!')        
    }

    return (
        <form className="d-flex justify-content-center align-items-center col-12 col-sm-12 flex-fill"
            onSubmit={handleSubmit}>
            <div className="my-auto p-4 form-card rounded-1">
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="InputEmail"
                        required
                        name="email"
                        onChange={handleChangeValues}
                        value={values.email}
                        placeholder="Email"
                    />
                    <label for="InputEmail">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="InputSenha"
                        required
                        name="password"
                        onChange={handleChangeValues}
                        value={values.password}
                        placeholder="Senha"
                    />
                    <label for="InputSenha">Senha</label>
                </div>
                <button type="submit" className="btn btn-lg btn-outline-primary w-100 rounded-2">Cadastrar</button>
            </div>
        </form>
    )
}