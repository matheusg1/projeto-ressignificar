import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/apiServices'
import { useAuth } from "../../hooks/useAuth";
import { AdicionaLocal, EditaLocal, RecebeLocais, DeletaLocal } from '../../services/apiServices';
import Swal from 'sweetalert2';

export default function Menu() {

    const { user, setUser } = useAuth();
    const [locais, setLocais] = useState([]);
    const [values, setValues] = useState({
        id: "",
        nome: "",
        limite_idade: ""
    })

    useEffect(() => {
        async function fetchLocais() {
            try {
                const locaisResponse = await RecebeLocais();
                setLocais(locaisResponse);
            } catch (error) {
                console.error('Erro ao buscar locais:', error);
            }
        }
        fetchLocais();
    }, []);

    const handleChangeValues = (e) => {

        setValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value,
        }));

        console.log(e.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(values.id)
        if(values.id == 0){
            console.log('ADICIONOU id: ' + values.id)
            AdicionaLocal(values.nome, values.limite_idade)
        }
        else{
            console.log(values)
            console.log('EDITOU?? id: ' + values.id)
            EditaLocal(values.id, values.nome, values.limite_idade)                    
        }
        //AdicionaLocal(values.nome, values.limite_idade)
    }

    const handleEditar = (local) => {        

        setValues({
            ...values,
            id: local.id,
            nome: local.nome,
            limite_idade: local.limite_idade
        });
    }

    const handleCriar = () => {
        setValues({
            ...values,
            id: 0,
            nome: "",
            limite_idade:""
        });
    }

    const handleDeletar = (id) => {
        console.log(values.id)
        DeletaLocal(id)

    }


    return (
        <>
            <div className='d-flex justify-content-center align-items-center flex-fill'>
                <div className='col-12 col-lg-4'>
                    <button class="btn btn-sm btn-outline-primary my-3 d-flex ms-auto"
                        data-bs-toggle="modal" data-bs-target="#modalLocal"
                        type="button"
                        onClick={() => handleCriar()}
                    >Adicionar novo local
                    </button>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Local</th>
                                <th>Idade mínima</th>
                                <th className='text-center'>Editar/Deletar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {locais.length > 0 && (
                                locais.map(local => (
                                    <tr key={local.id}>
                                        <td>{local.id}</td>
                                        <td>{local.nome}</td>
                                        <td>{local.limite_idade}</td>
                                        <td className='text-center'>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-primary" data-bs-toggle="modal" data-bs-target="#modalLocal"
                                                    onClick={() => handleEditar(local)}
                                                >Editar</button>
                                                <button type="button" className="btn btn-sm btn-outline-danger"
                                                    onClick={() => handleDeletar(local.id)}
                                                >Deletar</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>


                <div className="modal fade" id="modalLocal"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="modalLocalLabel">Editar local</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label for="inputIdLocal" className="form-label">Id</label>
                                        <input type="text" name="id" className="form-control" id="inputIdLocal"
                                            value={values.id}
                                            onChange={handleChangeValues}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label for="inputNomeLocal" className="form-label">Nome do local</label>
                                        <input type="text" name="nome" className="form-control" id="inputNomeLocal"
                                            value={values.nome}
                                            onChange={handleChangeValues}
                                        />

                                    </div>
                                    <div className="mb-3 col-6">
                                        <label for="inputLimiteIdade" className="form-label">Limite mínimo de idade</label>
                                        <input type="number" name="limite_idade" className="form-control" id="inputLimiteIdade" min="0" max="99"
                                            value={values.limite_idade}
                                            onChange={handleChangeValues}
                                        />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                        <button type="submit" className="btn btn-primary">Salvar</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

/*
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
                    {userData && (
                        <button type="button" className="btn btn-danger">Usuario existe</button>
                    )}
                </div>
            </form>


*/