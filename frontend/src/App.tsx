import { useEffect, useState } from "react";
import "./App.css";
import { createClient, deleteClient, getClients, searchClients, updateClient } from "./api";

interface Client {
  id: number;
  nome: string;
  email?: string;
  telefone?: string;
}

function App() {
  const [username, setUsername] = useState("");
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

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

  useEffect(() => {
    loadClients();
  }, []);

  async function handleSave() {
    setLoading(true);
    setError("");

    try {
      if (!nome.trim()) {
        throw new Error("Nome é obrigatório.");
      }

      if (editingId) {
        await updateClient(editingId, { nome, email, telefone });
      } else {
        await createClient({ nome, email, telefone });
      }

      setEditingId(null);
      setNome("");
      setEmail("");
      setTelefone("");
      await loadClients();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Falha ao salvar o cliente.");
    } finally {
      setLoading(false);
    }
  }

  function handleEdit(client: Client) {
    setEditingId(client.id);
    setNome(client.nome);
    setEmail(client.email ?? "");
    setTelefone(client.telefone ?? "");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleDelete(id: number) {
    setLoading(true);
    setError("");

    try {
      await deleteClient(id);
      await loadClients();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Falha ao deletar o cliente.");
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch() {
    if (!search.trim()) {
      await loadClients();
      return;
    }

    setLoading(true);
    setError("");

    try {
      const results = await searchClients(search);
      setClients(results);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Falha ao buscar clientes.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Interface React do Projeto NestJS SQL</h1>
        <p>Interface de CRUD para clientes com nome, e-mail e telefone.</p>
      </header>

      <main className="app-content">
        <section className="card">
          <h2>{editingId ? "Editar cliente" : "Novo cliente"}</h2>

          <label>
            Nome
            <input value={nome} onChange={(event) => setNome(event.target.value)} placeholder="Nome do cliente" />
          </label>

          <label>
            Email
            <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email do cliente" />
          </label>

          <label>
            Telefone
            <input value={telefone} onChange={(event) => setTelefone(event.target.value)} placeholder="Telefone do cliente" />
          </label>

          <div className="button-row">
            <button className="primary-button" onClick={handleSave} disabled={loading}>
              {editingId ? "Atualizar" : "Salvar"}
            </button>
            {editingId && (
              <button
                className="secondary-button"
                onClick={() => {
                  setEditingId(null);
                  setNome("");
                  setEmail("");
                  setTelefone("");
                }}
                disabled={loading}
              >
                Cancelar
              </button>
            )}
          </div>

          <div className="search-row">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar por nome"
            />
            <button className="secondary-button" onClick={handleSearch} disabled={loading}>
              Buscar
            </button>
          </div>

          {error && <p className="error-message">{error}</p>}
        </section>

        <section className="card">
          <h2>Clientes do backend</h2>
          {loading && <p>Carregando clientes...</p>}
          {!loading && clients.length === 0 && <p>Nenhum cliente encontrado.</p>}
          {!loading && clients.length > 0 && (
            <ul className="client-list">
              {clients.map((client) => (
                <li key={client.id} className="client-item">
                  <div>
                    <strong>{client.nome}</strong>
                    <p>{client.email ?? "Sem email"}</p>
                    <p>{client.telefone ?? "Sem telefone"}</p>
                  </div>
                  <div className="button-row button-row-small">
                    <button className="secondary-button" onClick={() => handleEdit(client)} disabled={loading}>
                      Editar
                    </button>
                    <button className="danger-button" onClick={() => handleDelete(client.id)} disabled={loading}>
                      Excluir
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
