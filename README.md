# Daily Diet > Projeto Ignite

Este é um projeto baseado no desafio da Rocketseat de API NodeJs em Restful, onde o usuário pode logar e conferir sua dieta, registrar e remover uma dieta e conferir seu resumo.

## Requisitos da aplicação

### Requisitos Funcionais

[x] Deve ser possível criar um usuário<br>
[x] Deve ser possível identificar o usuário entre as requisições<br>
[] Deve ser possível registrar uma refeição feita, com as seguintes informações:<br>
As refeições devem ser relacionadas a um usuário.<br>

- Nome<br>
- Descrição<br>
- Data e Hora<br>
- Está dentro ou não da dieta<br><br>

[] Deve ser possível editar uma refeição, podendo alterar todos os dados acima<br>
[] Deve ser possível apagar uma refeição<br>
[] Deve ser possível listar todas as refeições de um usuário<br>
[] Deve ser possível visualizar uma única refeição<br>
[] Deve ser possível recuperar as métricas de um usuário<br>
[] Quantidade total de refeições registradas<br>
[] Quantidade total de refeições dentro da dieta<br>
[] Quantidade total de refeições fora da dieta<br>
[] Melhor sequência de refeições dentro da dieta<br>
[] O usuário só pode visualizar, editar e apagar as refeições o qual ele criou<br>

### Regras de Negócio<br>

[] O usuário deve informar email e senha para criação<br>
[] O usuário terá um uuid para busca de dados<br>
[] <br>
[]<br>
[]<br>
[]<br>


## Passo a passo (desde o ínicio)

Escrevi este passo a passo para fixar meu aprendizado.

### Preparando ambiente

npm i:<br>
📦 init -y<br>
⬇️ fastify<br>
⬇️ -D tsx<br>
⬇️ -D typescript<br>
⬇️ eslint @rocketseat/eslint-config -D<br>
📦 npx tsc --init<br>
⬇️ npm install knex sqlite3 @types/knex @types/sqlite3<br>
⬇️ npm i -D zod<br>

Scripts:<br>
⚙️ "lint": "eslint src --ext .ts --fix"<br>
⚙️ "dev": "tsx --watch src/server.ts "<br>