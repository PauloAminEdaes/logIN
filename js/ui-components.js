//(Para as Mensagens e Modais) Funções de Interface Reutilizáveis

/* --- COMPONENTES DE INTERFACE REUTILIZÁVEIS --- */

// Mensagem Flutuante (Toast)
function mostrarMensagem(texto, tipo = "sucesso") {
  let container = document.getElementById("msg-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "msg-container";
    document.body.appendChild(container);
  }

  const msgBox = document.createElement("div");
  msgBox.className = `msg-box msg-${tipo}`;
  msgBox.innerHTML = `<span>${texto}</span>`;

  container.appendChild(msgBox);

  setTimeout(() => {
    msgBox.classList.add("fade-out");
    setTimeout(() => msgBox.remove(), 500);
  }, 4000);

  msgBox.addEventListener("click", () => msgBox.remove());
}

// Modal de Confirmação Dinâmico
function perguntarConfirmacao(titulo, texto) {
  return new Promise((resolve) => {
    let modal = document.getElementById("modal-confirmacao");

    if (!modal) {
      modal = document.createElement("div");
      modal.id = "modal-confirmacao";
      modal.className = "modal-overlay hidden";
      modal.innerHTML = `
                <div class="modal-box">
                    <div class="modal-header"><h3 id="modal-titulo"></h3></div>
                    <div class="modal-body"><p id="modal-texto"></p></div>
                    <div class="modal-footer">
                        <button id="btn-modal-cancelar" class="btn-secundario">Cancelar</button>
                        <button id="btn-modal-confirmar" class="btn-perigo">Confirmar</button>
                    </div>
                </div>`;
      document.body.appendChild(modal);
    }

    const btnConfirmar = document.getElementById("btn-modal-confirmar");
    const btnCancelar = document.getElementById("btn-modal-cancelar");

    document.getElementById("modal-titulo").textContent = titulo;
    document.getElementById("modal-texto").textContent = texto;

    modal.classList.remove("hidden");

    const fechar = (confirmado) => {
      modal.classList.add("hidden");
      btnConfirmar.onclick = null;
      btnCancelar.onclick = null;
      resolve(confirmado);
    };

    btnConfirmar.onclick = () => fechar(true);
    btnCancelar.onclick = () => fechar(false);
  });
}
