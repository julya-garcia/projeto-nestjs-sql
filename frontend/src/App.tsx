import { useEffect, useState } from "react";
import "./App.css";
import { getClients } from "./api";

function App() {
  const [username, setUsername] = useState("");
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadClients() {
      setLoading(true);
      setError("");

      try {
        const clientsData = await getClients();
        setClients(clientsData);
      } catch (err) {
        setError("Não foi possível carregar os clientes. Verifique se o backend está rodando.");
      } finally {
        setLoading(false);
      }
    }

    loadClients();
  }, []);

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
          <h2>Clientes do backend</h2>
          {loading && <p>Carregando clientes...</p>}
          {error && <p className="error-message">{error}</p>}
          {!loading && !error && (
            <ul>
              {clients.length > 0 ? (
                clients.map((client) => (
                  <li key={client.id ?? client.name ?? Math.random()}>
                    <strong>{client.name ?? `Cliente ${client.id ?? "sem nome"}`}</strong>
                    {client.email ? ` — ${client.email}` : ""}
                  </li>
                ))
              ) : (
                <li>Nenhum cliente encontrado.</li>
              )}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
