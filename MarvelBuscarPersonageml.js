import express from 'express';
import axios from 'axios';
import md5 from 'md5';
import dotenv from 'dotenv';
import path from 'path';
const helmet = require('helmet');
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
app.use(helmet());
app.use(express.static('public'));
const PORT = 3000;

// Para trabalhar com __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir arquivos estáticos do diretório "public"
app.use(express.static(path.join(__dirname, 'public')));

//pegar a chave privada do .env
const MARVEL_PUBLIC_KEY = process.env.PUBLIC_KEY;
const MARVEL_PRIVATE_KEY = process.env.PRIVATE_KEY;
const ts = Date.now();
const Hash = md5(ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY);
const url = `https://gateway.marvel.com/v1/public/characters`;

// Rota raiz que envia o HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Pagina.html'));
});

app.get('/personagem', async (req, res) => {

    try {
        const nome = req.query.nome;
        const params = {
            name: nome,
            ts,
            apikey: MARVEL_PUBLIC_KEY,
            hash: Hash
        }
        const response = await axios.get(url, { params });
        const personagem = response.data.data.results[0];

        if (!personagem) {
            return res.status(404).json({ erro: "Personagem não encontrado." });
        }

        const dados = {
            nome: personagem.name,
            descricao: personagem.description || "Sem descrição.",
            imagem: `${personagem.thumbnail.path}.${personagem.thumbnail.extension}`,
            quadrinhos: personagem.comics.available
        };

        res.json(dados);
    }
    catch {
        res.status(500).json({
            erro: "Erro ao buscar personagem.",
            detalhes: error.response?.data || error.message
        })
    }
})

app.listen(PORT, () => {
    console.log('Rodando na porta: ' + PORT)
})