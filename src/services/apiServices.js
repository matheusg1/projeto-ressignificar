import { createClient } from "@supabase/supabase-js";
import axios from 'axios';
import Swal from 'sweetalert2';

const TOKEN = process.env.REACT_APP_RESSIGNIFICAR_API_KEY;
const URL_AUTH = 'https://jyjmwqsaqkzbomxqsvjd.supabase.co/'
const URL_LOCAL = `https://jyjmwqsaqkzbomxqsvjd.supabase.co/rest/v1/Local`;

export const supabase = createClient(URL_AUTH, TOKEN);

export async function RecebeLocais() {

    let { data: data, error } = await supabase
        .from('Local')
        .select('*')
        .order('nome', { ascending: true })

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
        MensagemErro();
        return;
    }

    MensagemSucesso("Local adicionado com sucesso")
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
        MensagemErro();
        return;
    }

    MensagemSucesso("Local alterado com sucesso")
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
            Swal.fire({
                title: 'Sucesso!',
                text: 'O local foi deletado.',
                icon: 'success'
            }).then((result) => {
                if (result.isConfirmed) {
                    document.location.reload(true);
                }
            });

        } else {
            MensagemErro();
        }
    }
}

export function MensagemSucesso(mensagem) {
    Swal.fire({
        icon: 'success',
        title: mensagem,
        /*text: mensagem*/
    }).then((result) => {
        if (result.isConfirmed) {
            document.location.reload(true);
        }
    });
}

export function MensagemErro(mensagem, reload = true) {
    Swal.fire({
        icon: 'error',
        title: mensagem,
        //text: 'Ocorreu um erro'
    }).then((result) => {
        if (result.isConfirmed && reload) {
            document.location.reload(false);
        }
    });
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