export async function getClients() {
  const response = await fetch("/api/client");

  if (!response.ok) {
    throw new Error(`Erro ao buscar clientes: ${response.status}`);
  }

  return response.json();
}

export async function createClient(data: { nome: string; email?: string; telefone?: string }) {
  const response = await fetch("/api/client", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Erro ao criar cliente: ${response.status}`);
  }

  return response.json();
}

export async function updateClient(id: number, data: { nome?: string; email?: string; telefone?: string }) {
  const response = await fetch(`/api/client/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Erro ao atualizar cliente: ${response.status}`);
  }

  return response.json();
}

export async function deleteClient(id: number) {
  const response = await fetch(`/api/client/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Erro ao deletar cliente: ${response.status}`);
  }

  return response.json();
}

export async function searchClients(nome: string) {
  const response = await fetch(`/api/client/search/${encodeURIComponent(nome)}`);

  if (!response.ok) {
    throw new Error(`Erro ao buscar cliente por nome: ${response.status}`);
  }

  return response.json();
}
