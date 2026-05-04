# 🚀 Projeto NestJS SQL com Interface React

## 📌 Descrição

Aplicação full-stack completa com **API REST** desenvolvida em **NestJS** e **MySQL**, com autenticação via **JWT**, sistema de gestão de usuários e CRUD completo de clientes. Inclui **interface gráfica moderna** em **React 18** com TypeScript e Vite para uma experiência de usuário responsiva e intuitiva.

---

## 🛠️ Stack Tecnológico

### Backend
- **Node.js** com TypeScript
- **NestJS 11** - Framework robustos para APIs
- **Sequelize 6** - ORM para MySQL
- **MySQL 8** - Banco de dados relacional
- **JWT (JSON Web Tokens)** - Autenticação segura
- **bcrypt** - Hash de senhas
- **Passport.js** - Estratégia de autenticação
- **Concurrently** - Executar múltiplos processos

### Frontend
- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool rápido
- **CSS** - Estilização responsiva
- **Fetch API** - Comunicação com backend

---

## 📂 Estrutura do Projeto

```
projeto-nestjs-sql/
│
├── src/                                # 📁 Backend NestJS
│   ├── auth/                          # 🔐 Módulo de Autenticação
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.module.ts
│   │   └── auth.service.spec.ts
│   │
│   ├── user/                          # 👤 Módulo de Usuários
│   │   ├── user.service.ts
│   │   ├── user.service.spec.ts
│   │   ├── user.model.ts
│   │   └── user.module.ts
│   │
│   ├── client/                        # 🏢 Módulo de Clientes
│   │   ├── client.controller.ts
│   │   ├── client.service.ts
│   │   ├── client.model.ts
│   │   ├── client.module.ts
│   │   ├── dto/
│   │   │   ├── create-client.dto.ts
│   │   │   └── update-client.dto.ts
│   │   └── client.service.spec.ts
│   │
│   ├── app.controller.ts              # Controller principal
│   ├── app.service.ts                 # Serviço principal
│   ├── app.module.ts                  # Módulo raiz
│   └── main.ts                        # Entry point
│
├── frontend/                          # 🎨 Frontend React
│   ├── src/
│   │   ├── App.tsx                    # Componente principal
│   │   ├── App.css                    # Estilos
│   │   ├── api.ts                     # Integração com API
│   │   ├── main.tsx                   # Entry point React
│   │   ├── index.css                  # Estilos globais
│   │   └── vite-env.d.ts
│   │
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── package-lock.json
│
├── test/                              # 🧪 Testes
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
│
├── dist/                              # 📦 Saída compilada
├── node_modules/                      # 📚 Dependências
├── .gitignore
├── .prettierrc
├── eslint.config.mjs
├── nest-cli.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.build.json
└── README.md
```

---

## 🚀 Como Começar

### Pré-requisitos

- **Node.js** 18+ e npm
- **MySQL** 8.0+ (XAMPP ou Docker)
- **Git**

### 1️⃣ Clonar o Repositório

```bash
git clone https://github.com/julya-garcia/projeto-nestjs-sql.git
cd projeto-nestjs-sql
```

### 2️⃣ Instalar Dependências

```bash
# Instalar dependências do backend
npm install

# Instalar dependências do frontend
cd frontend
npm install
cd ..
```

### 3️⃣ Configurar o Banco de Dados

#### Opção A: Usar XAMPP (Recomendado para desenvolvimento)
1. Abra o **XAMPP Control Panel**
2. Clique em **Start** no módulo **MySQL**
3. Acesse **phpMyAdmin** (http://localhost/phpmyadmin)
4. Crie um banco de dados chamado `projeto_nest`

#### Opção B: Usar Docker
```bash
docker run --name mysql-nest \
  -e MYSQL_ROOT_PASSWORD=root \
  -e MYSQL_DATABASE=projeto_nest \
  -p 3306:3306 \
  -d mysql:8.0
```

#### Opção C: MySQL Direto
```sql
CREATE DATABASE projeto_nest;
USE projeto_nest;
```

### 4️⃣ Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Database
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=root
DB_DATABASE=projeto_nest

# JWT
JWT_SECRET=sua_chave_secreta_aqui
JWT_EXPIRES_IN=24h

# Port
PORT=3000
```

### 5️⃣ Executar o Projeto

#### 🔥 Desenvolvimento (Backend + Frontend simultâneo)
```bash
npm run dev
```

#### Backend apenas
```bash
npm run start:dev
```

#### Frontend apenas
```bash
npm run frontend:dev
```

#### Produção
```bash
npm run build          # Compilar backend
npm run frontend:build # Compilar frontend
npm run start:prod     # Iniciar em produção
```

---

## 🌐 Acessar a Aplicação

Após executar o projeto:

- **Frontend (UI)**: http://localhost:5173
- **Backend (API)**: http://localhost:3000
- **API Root**: http://localhost:3000/api

---

## 📚 Rotas da API

### 🔐 Autenticação (`/auth`)

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/auth/register` | Registrar novo usuário |
| `POST` | `/auth/login` | Fazer login |
| `GET` | `/auth/profile` | Obter perfil do usuário (requer JWT) |

**Exemplo de Requisição de Login:**
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"user","password":"123456"}'
```

### 👤 Usuários (`/user`)

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/user` | Listar todos os usuários |
| `GET` | `/user/:id` | Obter usuário por ID |

### 🏢 Clientes (`/client`)

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/client` | Listar todos os clientes |
| `GET` | `/client/search?nome=termo` | Buscar clientes por nome |
| `POST` | `/client` | Criar novo cliente |
| `PUT` | `/client/:id` | Atualizar cliente |
| `DELETE` | `/client/:id` | Deletar cliente |

**Exemplo de Criar Cliente:**
```bash
curl -X POST http://localhost:3000/client \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "João Silva",
    "email": "joao@example.com",
    "telefone": "(11) 98765-4321"
  }'
```

---

## 🧪 Testes

### Executar Testes Unitários
```bash
npm run test
```

### Modo Watch (Executar novamente ao fazer mudanças)
```bash
npm run test:watch
```

### Cobertura de Testes
```bash
npm run test:cov
```

### Testes E2E
```bash
npm run test:e2e
```

### Debug de Testes
```bash
npm run test:debug
```

---

## 🏗️ Scripts Disponíveis

```json
{
  "build": "Compilar o projeto NestJS",
  "format": "Formatar código com Prettier",
  "start": "Iniciar a aplicação",
  "start:dev": "Iniciar em modo desenvolvimento com hot reload",
  "start:debug": "Iniciar em modo debug",
  "start:prod": "Iniciar em produção",
  "frontend:dev": "Iniciar frontend em desenvolvimento",
  "frontend:build": "Compilar frontend",
  "frontend:preview": "Visualizar build do frontend",
  "dev": "Executar backend e frontend simultâneamente",
  "lint": "Executar ESLint e corrigir problemas",
  "test": "Executar testes",
  "test:watch": "Executar testes em modo watch",
  "test:cov": "Executar testes com cobertura",
  "test:debug": "Executar testes em debug",
  "test:e2e": "Executar testes end-to-end"
}
```

### Registrar Usuário

**POST** `/auth/register`

**Request:**
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "usuario",
    "password": "senha123"
  }'
```

**Response:**
```json
{
  "id": 1,
  "username": "usuario",
  "createdAt": "2024-05-04T10:30:00.000Z"
}
```

### Fazer Login

**POST** `/auth/login`

**Request:**
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "usuario",
    "password": "senha123"
  }'
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Obter Perfil (Requer Autenticação)

**GET** `/auth/profile`

```bash
curl -X GET http://localhost:3000/auth/profile \
  -H "Authorization: Bearer SEU_TOKEN_JWT"
```

---

## 💾 Modelo de Dados

### User
- `id` (PK)
- `username` (UNIQUE)
- `password` (ENCRYPTED)
- `createdAt`
- `updatedAt`

### Client
- `id` (PK)
- `nome`
- `email`
- `telefone`
- `createdAt`
- `updatedAt`

---

## 🛠️ Ferramentas para Testar API

Você pode usar as seguintes ferramentas para testar a API:

- **Postman** - Interface gráfica completa
- **Insomnia** - Alternativa ao Postman
- **Thunder Client** - Extensão VSCode
- **curl** - Linha de comando
- **PowerShell** - Nativo do Windows
- **Frontend React** - Interface integrada

---

## 🔄 Fluxo de Autenticação

```
1. Usuário acessa http://localhost:5173
2. Faz login/registro na interface
3. Recebe JWT token do backend
4. Token é armazenado localmente
5. Todas as requisições incluem o token
6. Backend valida o JWT
7. Acesso concedido aos endpoints
8. Operações CRUD de clientes
```

---

## 📝 Modelo de Requisição/Resposta

### Sucesso
```json
{
  "status": 200,
  "data": { /* dados */ }
}
```

### Erro
```json
{
  "statusCode": 400,
  "message": "Descrição do erro",
  "error": "Bad Request"
}
```

---

## 🐛 Troubleshooting

### Erro: "Cannot connect to MySQL"
- Verifique se o MySQL está rodando
- Confirme as credenciais no `.env`
- Verifique a porta (padrão: 3306)

### Erro: "Port 3000 already in use"
```bash
# Matar processo na porta 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Ou em PowerShell:
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process
```

### Erro: "Port 5173 already in use"
```bash
# Matar processo na porta 5173
lsof -i :5173
kill -9 <PID>
```

### JWT não funciona
- Confirme que a chave `JWT_SECRET` está definida no `.env`
- Verifique se o token está sendo enviado no header `Authorization: Bearer <token>`

---

## 📚 Documentação Oficial

- [NestJS Documentation](https://docs.nestjs.com/)
- [Sequelize Documentation](https://sequelize.org/)
- [Passport.js Documentation](http://www.passportjs.org/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está licenciado sob a licença **UNLICENSED**.

---

## 👤 Autor

**Julya Garcia**

- GitHub: [@julya-garcia](https://github.com/julya-garcia)
- Repositório: [projeto-nestjs-sql](https://github.com/julya-garcia/projeto-nestjs-sql)

---

## ⭐ Se este projeto foi útil, dê uma estrela!

```
╔════════════════════════════════════════════╗
║   Obrigado por usar este projeto! ⭐      ║
╚════════════════════════════════════════════╝
```
