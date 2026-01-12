document.addEventListener("DOMContentLoaded", () => {
  const loginInput = document.getElementById("login");
  const passwordInput = document.getElementById("password");
  const btnEntrar = document.querySelector(".btn");
  const msgErro = document.getElementById("msg-erro");
  const loginCard = document.querySelector(".login-card");
  const toggleBtn = document.getElementById("toggleBtn");

  let cliquesErro = 0;

  function validar() {
    const user = loginInput.value.trim();
    const pass = passwordInput.value.trim();

    // Sempre que digitar, reseta o estado crítico
    cliquesErro = 0;
    msgErro.classList.remove("msg-critica");

    let texto = "";
    if (user === "") texto = "Preencha o login";
    else if (user.length < 3) texto = "O login precisa de 3 caracteres";
    else if (pass === "") texto = "Digite a senha";
    else if (pass.length < 6) texto = "A senha precisa de 6 caracteres";

    msgErro.textContent = texto;

    if (user.length >= 3 && pass.length >= 6) {
      btnEntrar.classList.add("ativo");
      msgErro.textContent = "";
    } else {
      btnEntrar.classList.remove("ativo");
    }
  }

  btnEntrar.addEventListener("click", (e) => {
    if (!btnEntrar.classList.contains("ativo")) {
      e.preventDefault();
      contadorCliques++;
      loginCard.classList.add("shake-card");
      setTimeout(() => loginCard.classList.remove("shake-card"), 300);

      if (contadorCliques >= 2) {
        msgErro.classList.add("msg-critica");
      }
    } else {
      // --- INÍCIO DO SISTEMA DE LOADING ---
      e.preventDefault(); // Evita o recarregamento da página imediato

      const btnText = btnEntrar.querySelector(".btn-text");
      const loadingIcon = document.getElementById("loading-icon");

      // Ativa o estado de loading
      btnEntrar.classList.add("loading");
      btnText.style.display = "none"; // Esconde o texto
      loadingIcon.classList.remove("hidden"); // Mostra o spinner

      // Simula uma requisição ao servidor de 2 segundos
      setTimeout(() => {
        alert(
          "Login realizado! Redirecionando...\n \n TRAVADO !!! \n \n tela: SCRIPT.JS"
        );
        // Aqui você faria o redirecionamento real:
        // window.location.href = "dashboard.html";
      }, 2000);
      // --- FIM DO SISTEMA DE LOADING ---
    }
  });

  // Mostrar/Esconder Senha
  toggleBtn.addEventListener("click", () => {
    const isPass = passwordInput.type === "password";
    passwordInput.type = isPass ? "text" : "password";
    document.getElementById("eyeOpen").classList.toggle("hidden");
    document.getElementById("eyeClosed").classList.toggle("hidden");
  });

  loginInput.addEventListener("input", validar);
  passwordInput.addEventListener("input", validar);

  validar(); // Inicia o estado
});
