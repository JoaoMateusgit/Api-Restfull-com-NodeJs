import express from "express";

const app = express();
const PORT = 3000;
var ArrResponse = [
    {
        id: 1,
        name: "David Sales Bohrer",
        Idade: 34,
        Personagem: "Usopp"
    },
    {
        id: 2,
        name: "João Mateus Perachi",
        Idade: 21,
        Personagem: "Noturno"
    },
    {
        id: 3,
        name: "Terceiro",
        Idade: 33,
        Personagem: "Bolsobosta"
    }
]

app.use(express.json()); 

//GET
app.get('/', (request, response) => {
    response.send(ArrResponse)
})

//DELETE
app.delete('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const index = ArrResponse.findIndex(u => u.id === id); // Encontrar índice

        if (index === -1) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
          }

        ArrResponse.splice(index, 1); // Remove 1 item na posição "index"
        res.json({ mensagem: `Usuário com ID ${id} removido com sucesso.` });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
})

//PUT
app.put('/',(req, res) => {
    try {
        const novoItem = req.body;
        ArrResponse.push(novoItem); // Agora estamos salvando apenas os dados, não o objeto req inteiro

        // Pega o índice do último item inserido (última posição do array)
        const index = ArrResponse.length - 1;

        res.json({ mensagem: `Item adicionado na posição ${index}` });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
})

app.listen(PORT, () => {
    console.log('Rodando na porta: '+ PORT)
})