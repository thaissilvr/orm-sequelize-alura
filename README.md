## ORM com NodeJS: API com Sequelize e MySQL

API Rest de uma Escola de Inglês, criada durante o curso de ORM com NodeJs da Alura.

### O que foi utilizado?
✅NodeJS
✅Express
✅Nodemon
✅Path

#### Banco de dados
✅Sequelize
✅MySQL

---

## Rodando o servidor
Clone o projeto
```bash
https://github.com/thaissilvr/orm-sequelize-alura.git
```
Acesse a pasta do projeto
```bash
cd orm-sequelize-alura
```
Instale as dependências
```bash
npm install
```
Rode o servidor
```bash
npm run start
```

---
## Rotas da API
A API possui rotas para todas as entidades (Pessoas, Niveis, Turmas e Matriculas.

Pessoas
~~~
GET: /pessoas
GET: /pessoas/:id
POST: /pessoas
PUT: /pessoas/:id
DELETE: /pessoas/:id
~~~

Niveis
~~~
GET: /niveis
GET: /niveis/:id
POST: /niveis
PUT: /niveis/:id
DELETE: /niveis/:id
~~~

Turmas
~~~
GET: /turmas
GET: /turmas/:id
POST: /turmas
PUT: /turmas/:id
DELETE: /turmas/:id
~~~

Matriculas (se encontra no mesmo arquivo que a rota de Pessoas)
~~~
GET: /pessoas/:estudanteId/matricula/:matriculaId
POST: /pessoas/:estudanteId/matricula
PUT: /pessoas/:estudanteId/matricula/:matriculaId
DELETE: /pessoas/:estudanteId/matricula/:matriculaId
~~~
