/* --- CRUD DE TAREFAS --- */

async function carregarTarefas() {
  const token = localStorage.getItem("token");
  // Lógica fetch GET /api/Tarefas...
}

async function excluirTarefa(id) {
  const confirmou = await perguntarConfirmacao(
    "Excluir",
    "Deseja deletar esta tarefa?"
  );
  
  if (confirmou) {
    // Lógica fetch DELETE /api/Tarefas/id...
    mostrarMensagem("Tarefa excluída!", "sucesso");
  }
}
