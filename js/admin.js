//(Para a lógica de Login e Logout)
function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

// Exemplo de busca de dados protegida
async function carregarUsuarios() {
  const token = localStorage.getItem("token");

  const response = await fetch("https://localhost:7154/api/Admin/usuarios", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 403) {
    alert("Você não tem permissão de administrador!");
    window.location.href = "tarefas.html";
  }
}
