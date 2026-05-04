import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Interface React do Projeto NestJS SQL</h1>
        <p>Uma base inicial para conectar o frontend React ao backend NestJS.</p>
      </header>

      <main className="app-content">
        <section className="card">
          <h2>Teste de interface</h2>
          <p>Digite seu nome e veja o React renderizar o conteúdo dinamicamente.</p>
          <input
            type="text"
            placeholder="Seu nome"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          {username && <p>Olá, <strong>{username}</strong>! Bem-vindo(a) ao projeto.</p>}
        </section>

        <section className="card">
          <h2>Próximos passos</h2>
          <ul>
            <li>Conectar o React ao backend NestJS via API REST.</li>
            <li>Mostrar clientes, usuários e autenticação.</li>
            <li>Adicionar roteamento e formulários.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
