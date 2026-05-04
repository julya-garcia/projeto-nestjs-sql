export async function getClients() {
  const response = await fetch("/api/client");

  if (!response.ok) {
    throw new Error(`Erro ao buscar clientes: ${response.status}`);
  }

  return response.json();
}
