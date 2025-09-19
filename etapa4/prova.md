Aluna:Ana Julia Menegasso Cruz
ra:a2461226
Prova de 2° chamada

1. (0.5 ponto) Qual camada é a mais apropriada para conter uma regra de negócio como "verificar se um e-mail já existe no banco de dados antes de criar um novo usuário"?
c) Service

2. (0.5 ponto) Qual é a principal ideia por trás da "Arquitetura em Fatias Verticais" (Vertical Slice), vista
na Etapa 4?
b) Organizar o código por funcionalidade (feature), colocando todos os arquivos relacionados a uma feature
(controller, service, etc.) juntos em um mesmo módulo.

3. (1.5 ponto) Explique, com suas palavras, por que a testabilidade da aplicação melhora drasticamente
ao sair da "Etapa 2" (Acoplamento Forte) para a "Etapa 3" (Injeção de Dependência)
R: No acoplamento forte o service, o controller e o routes estao a baixo na hierarquia comparado a repository, então quando quero mudar algo é neccesario a mudanca em todas as paginas a fim de evitar bugs. Na injeção de dependencia as instancias são passadas na ultima camada, tranformando as instancias passadas antes em objetos de classe.

4. (0.5 ponto) Qual é a principal responsabilidade da camada de Controller em uma arquitetura MVC?
d) Receber requisições HTTP, chamar a camada de serviço e formatar a resposta.

5. (0.5 ponto) Na "Etapa 0", qual dos seguintes problemas NÃO era uma consequência direta da
abordagem de arquivo único?
a) Performance lenta da API devido ao uso do Fastify.

6. (0.5 ponto) Como uma dependência é tipicamente "injetada" em uma classe na abordagem vista na
Etapa 3?
d) A dependência é passada como um argumento para o construtor da classe.

7. (1.5 ponto) Descreva brevemente o fluxo de uma requisição DELETE /api/contatos/:id através das
camadas da arquitetura da Etapa 3 (Routes -> Controller -> Service -> Repository). Explique o papel de cada camada nesse processo.

R: server: configura a rota dos rotes
 Routes: faz as rotas das instancias que sao passadas por meio do arquivo.controller.js
arquivo.controller.js: 
arquivo.service.js:
arquivo.repository.js:Contem toda a logica de negocio necessarios para deletar o contato

8. (0.5 ponto) O que caracteriza o anti-padrão "Fat Model" (Modelo Gordo), visto na Etapa 1?
d) Uma classe de modelo que acumula tanto a lógica de negócio quanto a lógica de acesso a dados.

9. (0.5 ponto) Na Etapa 2, qual foi a principal função da camada de Repository?
c) Ser a única camada responsável pelo acesso aos dados (buscar, salvar, etc.).

10. (0.5 ponto) Qual problema principal a Injeção de Dependência (DI), introduzida na Etapa 3, resolve?
c) O "Acoplamento Forte", onde uma classe cria diretamente as instâncias de suas dependências.

