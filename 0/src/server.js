const fastify = require("fastify");

const server = fastify({ logger: true });
const porta = 3000;


const contatosList = [];
let proximoId = 1;


// Listar todos os contatos
server.get("/contatos", (req, reply) => {
  reply.send(contatosList);
});

// Buscar contato por ID
server.get("/contatos/:id", (req, reply) => {
  const id = parseInt(req.params.id);
  const contato = contatosList.find(c => c.id === id);

  if (!contato) return reply.code(404).send({ erro: "Contato não encontrado" });
  reply.send(contato);
});

// Criar contato
server.post("/contatos", (req, reply) => {
  const { nome, email, telefone } = req.body;
  if (!nome || !email) return reply.code(400).send({ erro: "Nome e email são obrigatórios" });

  const novoContato = { id: proximoId++, nome, email, telefone };
  contatosList.push(novoContato);
  reply.code(201).send(novoContato);
});

// Atualizar contato
server.put("/contatos/:id", (req, reply) => {
  const id = parseInt(req.params.id);
  const index = contatosList.findIndex(c => c.id === id);

  if (index === -1) return reply.code(404).send({ erro: "Contato não encontrado" });

  contatosList[index] = { ...contatosList[index], ...req.body };
  reply.send(contatosList[index]);
});

// Remover contato
server.delete("/contatos/:id", (req, reply) => {
  const id = parseInt(req.params.id);
  const index = contatosList.findIndex(c => c.id === id);

  if (index === -1) return reply.code(404).send({ erro: "Contato não encontrado" });

  contatosList.splice(index, 1);
  reply.code(204).send();
});


server.listen({ port: porta }, (err) => {
  if (err) {
    console.error("Erro ao iniciar o servidor:", err);
    process.exit(1);
  }
  console.log(`Servidor rodando na porta ${porta}`);
});
