import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdicionaLocal, EditaLocal, RecebeLocais, DeletaLocal } from '../../services/apiServices';

export default function Menu() {

    const [locais, setLocais] = useState([]);
    const [tituloModal, setTituloModal] = useState('Editar');
    const navigate = useNavigate();
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
                //console.error('Erro ao buscar locais:', error);
            }
        }
        fetchLocais();
    }, []);

    const handleChangeValues = (e) => {
        setValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (values.id == 0) {
            AdicionaLocal(values.nome, values.limite_idade)
        }
        else {
            EditaLocal(values.id, values.nome, values.limite_idade)
        }
    }

    const handleEditar = (local) => {
        setTituloModal('Editar')
        setValues({
            ...values,
            id: local.id,
            nome: local.nome,
            limite_idade: local.limite_idade
        });
    }

    const handleCriar = () => {
        setTituloModal('Adicionar')

        setValues({
            ...values,
            id: 0,
            nome: "",
            limite_idade: ""
        });
    }

    const handleDeletar = (id) => {
        DeletaLocal(id)
    }


    return (
        <>
            <div className='d-flex justify-content-center align-items-center flex-fill'>
                <div className='col-12 col-xl-5'>
                    <div className='container'>
                        <div className='d-flex justify-content-between mb-2'>
                            <button className="btn btn-sm btn-outline-primary"
                                data-bs-toggle="modal" data-bs-target="#modalLocal"
                                type="button"
                                onClick={() => handleCriar()}
                            >Adicionar novo local
                            </button>
                            <button className="btn btn-sm btn-outline-primary"
                                type="button"
                                onClick={() => navigate('/registro')}
                            >Registrar novo usuário
                            </button>
                        </div>
                        <table className='table table-hover shadow'>
                            <thead>
                                <tr>
                                    <th hidden>Id</th>
                                    <th>Local</th>
                                    <th>Idade mínima</th>
                                    <th className='text-center'>Editar/Deletar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {locais.length > 0 && (
                                    locais.map(local => (
                                        <tr key={local.id}>
                                            <td hidden>{local.id}</td>
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
                </div>

                <div className="modal fade" id="modalLocal"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="modalLocalLabel">{tituloModal} local</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>

                                    <div className="mb-3" hidden>
                                        <label for="inputIdLocal" className="form-label">Id</label>
                                        <input type="text" name="id" className="form-control" id="inputIdLocal"
                                            value={values.id}
                                            onChange={handleChangeValues}
                                        />
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" name="nome" className="form-control" id="inputNomeLocal"
                                            value={values.nome}
                                            onChange={handleChangeValues}
                                            placeholder="Nome"
                                            required
                                        />
                                        <label for="inputNomeLocal">Nome</label>
                                    </div>

                                    <div className="form-floating mb-3 col-6">
                                        <input type="number" name="limite_idade" className="form-control" id="inputLimiteIdade" min="0" max="99"
                                            value={values.limite_idade}
                                            onChange={handleChangeValues}
                                            required
                                            placeholder="Limite mínimo de idade"
                                        />
                                        <label for="inputLimiteIdade">Limite mínimo de idade</label>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Fechar</button>
                                        <button type="submit" className="btn btn-outline-primary">Salvar</button>
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
