document.addEventListener("DOMContentLoaded", () => {
  const loginInput = document.getElementById("login");
  const passwordInput = document.getElementById("password");
  const btnEntrar = document.querySelector(".btn");
  const msgErro = document.getElementById("msg-erro");
  const loginCard = document.querySelector(".login-card");
  const toggleBtn = document.getElementById("toggleBtn");

  let contadorCliquesErro = 0;

  function validar() {
    const user = loginInput.value.trim();
    const pass = passwordInput.value.trim();

    contadorCliquesErro = 0;
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

  btnEntrar.addEventListener("click", async (e) => {
    e.preventDefault();

    if (!btnEntrar.classList.contains("ativo")) {
      contadorCliquesErro++;
      loginCard.classList.add("shake-card");
      setTimeout(() => loginCard.classList.remove("shake-card"), 300);

      if (contadorCliquesErro >= 2) {
        msgErro.classList.add("msg-critica");
      }
      return;
    }

    // --- LÓGICA DE LOGIN REAL ---
    const btnText = btnEntrar.querySelector(".btn-text");
    const loadingIcon = document.getElementById("loading-icon");

    btnEntrar.classList.add("loading");
    btnText.style.display = "none";
    loadingIcon.classList.remove("hidden");

    try {
      const response = await fetch("https://localhost:7154/api/Auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: loginInput.value,
          senha: passwordInput.value,
        }),
      });

      const data = await response.json();

      if (response.ok && data.sucesso) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("usuarioNome", data.usuario);
        localStorage.setItem("ehAdmin", data.isAdmin);

        mostrarMensagem(`Bem-vindo, ${data.usuario}!`, "sucesso");
        setTimeout(() => {
          window.location.href = data.isAdmin
            ? "admin_dashboard.html"
            : "tarefas.html";
        }, 1500);
      } else {
        mostrarMensagem(data.message || "Acesso negado", "erro");
        btnEntrar.classList.remove("loading");
        btnText.style.display = "block";
        loadingIcon.classList.add("hidden");
      }
    } catch (err) {
      mostrarMensagem("Erro ao conectar com o servidor", "erro");
      btnEntrar.classList.remove("loading");
    }
  });

  toggleBtn.addEventListener("click", () => {
    const isPass = passwordInput.type === "password";
    passwordInput.type = isPass ? "text" : "password";
    document.getElementById("eyeOpen").classList.toggle("hidden");
    document.getElementById("eyeClosed").classList.toggle("hidden");
  });

  loginInput.addEventListener("input", validar);
  passwordInput.addEventListener("input", validar);
  validar();
});
