import { useState } from 'react';
import { supabase, MensagemSucesso, MensagemErro } from '../../services/apiServices'
import { useAuth } from "../../hooks/useAuth";

export default function Registro() {
    const { user, setUser } = useAuth();

    const [values, setValues] = useState({
        email: "",
        password: "",
        passwordConfirm: ""
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
        if(values.password != values.passwordConfirm){
            MensagemErro("As senhas não coincidem.", false);
            return;
        }

        let { data, error } = await supabase.auth.signUp({
            email: values.email,
            password: values.password
        })        

        if (error) {
            MensagemErro("Erro ao cadastrar usuário");
            return;
        }

        setUser(data);        
        MensagemSucesso('Cadastro realizado!')        
    }

    return (
        <form className="d-flex justify-content-center align-items-center flex-fill"
            onSubmit={handleSubmit}>
            <div className="my-auto p-4 col-12 col-sm-8 col-md-6 col-lg-5 col-xl-3 form-card rounded-1">
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
                <div className="form-floating mb-3">
                    <input type="passwordConfirm" className="form-control" id="InputConfirmaSenha"
                        required
                        name="passwordConfirm"
                        onChange={handleChangeValues}
                        value={values.passwordConfirm}
                        placeholder="Confirmar senha"
                    />
                    <label for="InputConfirmaSenha">Confirmar Senha</label>
                </div>
                <button type="submit" className="btn btn-lg btn-outline-primary w-100 rounded-2">Cadastrar</button>
            </div>
        </form>
    )
}