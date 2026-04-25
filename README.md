# 🚀 API NestJS com JWT e MySQL

## 📌 Descrição

API REST desenvolvida com **NestJS**, utilizando **Sequelize** e **MySQL**, com autenticação via **JWT** e CRUD completo de clientes.

---

## 🛠️ Tecnologias

* Node.js
* NestJS
* Sequelize
* MySQL
* JWT
* bcrypt
* TypeScript

---

## 📂 Estrutura

```
src/
 ├── auth/
 ├── user/
 ├── client/
 ├── app.module.ts
 ├── main.ts
```

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

## 🧪 Fluxo do Sistema

Usuário → Login → JWT → Acesso → CRUD de Clientes


