import React, { useState } from 'react';

export default function Login() {

    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('submit')
        console.log(login)
        console.log(senha)
    }

    return (
        <form className="d-flex justify-content-center align-items-center col-12 col-sm-12 flex-fill"
            onSubmit={handleSubmit}>
            <div className="my-auto p-4 about-card rounded-1">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Login</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={login} 
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Entrar</button>
            </div>
        </form>
    )
}