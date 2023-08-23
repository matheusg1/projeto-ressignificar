import { createClient } from "@supabase/supabase-js";
import axios from 'axios';
import Swal from 'sweetalert2';

const TOKEN = process.env.REACT_APP_RESSIGNIFICAR_API_KEY;
const URL_AUTH = 'https://jyjmwqsaqkzbomxqsvjd.supabase.co/'
const URL_LOCAL = `https://jyjmwqsaqkzbomxqsvjd.supabase.co/rest/v1/Local`;

export const supabase = createClient(URL_AUTH, TOKEN);

export async function RecebeLocais() {
    const config = {
        headers: {
            'apikey': TOKEN,
        }
    };

    const { data } = await axios.get(URL_LOCAL, config);
    return data;
}


export async function AdicionaLocal(nome, idadeMinima) {
    const { data, error } = await supabase
        .from('Local')
        .insert([
            {
                nome: nome,
                limite_idade: idadeMinima
            },
        ])

    if (error) {
        console.log(error)
        mensagemErro();
        return;
    }

    mensagemSucesso("Local adicionado com sucesso")
}

export async function EditaLocal(id, nome, idadeMinima) {
    const { data, error } = await supabase
        .from('Local')
        .update([
            {                
                nome: nome,
                limite_idade: idadeMinima
            },
        ]).eq('id', id)
        .select()
        

    if (!data.length) {        
        mensagemErro();
        return;
    }

    mensagemSucesso("Local alterado com sucesso")
}

export async function DeletaLocal(id) {
    const result = await Swal.fire({
        title: 'Deletar registro',
        text: "Tem certeza?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Deletar',
        cancelButtonText: 'Cancelar',
        customClass: {
            confirmButton: 'btn btn-outline-danger ms-2',
            cancelButton: 'btn btn-outline-secondary'
        },
        buttonsStyling: false,
        reverseButtons: true
    });

    if (result.isConfirmed) {
        const { error } = await supabase
            .from('Local')
            .delete()
            .eq("id", id);

        if (!error) {
            Swal.fire(
                'Sucesso!',
                'O local foi deletado.',
                'success'
            );
            
        } else {
            mensagemErro()
        }
    }
}


function mensagemSucesso(mensagem) {
    Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: mensagem
    })

}

function mensagemErro() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocorreu um erro'
    })
}



/*

        const { data, error } = await supabase
            .from('Local')
            .insert([
                {
                    id: values.id,
                    nome: values.nome,
                    limite_idade: values.limite_idade
                },
            ])
            .select()

*/