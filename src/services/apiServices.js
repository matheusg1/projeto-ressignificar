import { createClient } from "@supabase/supabase-js";
import axios from 'axios';

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

    try {
        const response = await axios.post(URL_LOCAL, {
            nome: nome,
            limite_idade: idadeMinima
        }, {
            headers: {
                'apikey': TOKEN,
            }
        });
        return response;
    }
    catch (error) {
        console.error('Erro ao criar local:', error);
    }    
}
