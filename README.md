# 🚀 Projeto NestJS SQL com Interface React

## 📌 Descrição

API REST desenvolvida com **NestJS**, utilizando **Sequelize** e **MySQL**, com autenticação via **JWT** e CRUD completo de clientes. Inclui interface gráfica em **React** com TypeScript e Vite.

---

## 🛠️ Tecnologias

### Backend
* Node.js
* NestJS
* Sequelize
* MySQL
* JWT
* bcrypt
* TypeScript

### Frontend
* React 18
* TypeScript
* Vite
* CSS Modules

---

## 📂 Estrutura

```
/
├── src/                    # Backend NestJS
│   ├── auth/
│   ├── user/
│   ├── client/
│   ├── app.module.ts
│   └── main.ts
├── frontend/               # Frontend React
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
└── README.md
```

---

## 🚀 Como executar

### 1. Instalar dependências

```bash
# Instalar dependências do backend
npm install

# Instalar dependências do frontend
cd frontend
npm install
cd ..
```

### 2. Configurar MySQL

#### Opção A: XAMPP (Recomendado)
1. Abra o **XAMPP Control Panel**
2. Clique em **Start** no módulo **MySQL**
3. No phpMyAdmin, crie o banco `projeto_nest`

#### Opção B: Docker
```bash
docker run --name mysql-nest -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=projeto_nest -p 3306:3306 -d mysql:8.0
```

### 3. Executar o projeto

#### Desenvolvimento (Backend + Frontend simultâneo)
```bash
npm run dev
```

#### Apenas Backend
```bash
npm run start:dev
```

#### Apenas Frontend
```bash
npm run frontend:dev
```

### 4. Acessar

- **Frontend React**: http://localhost:5173
- **Backend API**: http://localhost:3000
- **API Docs**: http://localhost:3000/client

---

## 🔐 Autenticação

### Registrar

**POST** `/auth/register`

```json
{
  "nome": "Julya",
  "email": "julya@email.com",
  "password": "123456"
}
```

### Login

**POST** `/auth/login`


**Resposta:**

```json
{
  "access_token": "TOKEN_JWT"
}
```

---

## 📦 CRUD de Clientes

* **POST** `/client`
* **GET** `/client`
* **GET** `/client/:id`
* **PUT** `/client/:id`
* **DELETE** `/client/:id`

---

## ▶️ Como executar

```bash
git clone https://github.com/julya-garcia/projeto-nestjs-sql.git
cd projeto-nestjs-sql
npm install
npm run start:dev
```

---

## 🧪 Testes

Pode testar usando:

* Postman
* Insomnia
* PowerShell

---

## 🔄 Fluxo do Sistema

Usuário → Login → JWT → Acesso → CRUD de Clientes
