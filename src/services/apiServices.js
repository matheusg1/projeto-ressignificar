import axios from 'axios';

export async function RecebeLocais() {
    const token = process.env.REACT_APP_RESSIGNIFICAR_API_KEY;
    const config = {
        headers: {
            'apikey': token,
        }
    };
    const url = `https://jyjmwqsaqkzbomxqsvjd.supabase.co/rest/v1/Local`;

    const { data } = await axios.get(url, config);
    return data;
}

export async function AdicionaLocal(nome, idadeMinima) {
    const token = process.env.REACT_APP_RESSIGNIFICAR_API_KEY;
    const config = {
        headers: {
            'apikey': token,
        }
    };
    const url = `https://jyjmwqsaqkzbomxqsvjd.supabase.co/rest/v1/Local`;

    try {
        const response = await axios.post(url, {
            nome: nome,
            limite_idade: idadeMinima
        }, {
            headers: {
                'apikey': token,
            }
        });
        return response;
    }
    catch (error) {
        console.error('Erro ao criar local:', error);
    }    
}