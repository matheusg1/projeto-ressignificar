import { useState } from 'react';
import { supabase, MensagemSucesso } from '../../services/apiServices'
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

        let { data, error } = await supabase.auth.signUp({
            email: values.email,
            password: values.password
        })        

        if (error) {
            //tratar
            return;
        }

        setUser(data);        
        MensagemSucesso('Cadastro realizado com sucesso')        
    }

    return (
        <form className="d-flex justify-content-center align-items-center col-12 col-sm-12 flex-fill"
            onSubmit={handleSubmit}>
            <div className="my-auto p-4 form-card rounded-1">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        required
                        name="email"
                        onChange={handleChangeValues}
                        value={values.email}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                        required
                        name="password"
                        onChange={handleChangeValues}
                        value={values.password}
                    />
                </div>
                <button type="submit" className="btn btn-outline-primary w-100">Cadastrar</button>
            </div>
        </form>
    )
}