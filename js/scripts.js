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

  // Clique no botão (mesmo quando "morto")
  btnEntrar.addEventListener("click", (e) => {
    // Se NÃO tiver a classe ativo, faz o shake e aumenta o erro
    if (!btnEntrar.classList.contains("ativo")) {
      e.preventDefault();
      cliquesErro++;

      // Vibra o card
      loginCard.classList.add("shake");
      setTimeout(() => loginCard.classList.remove("shake"), 300);

      // Se insistir no clique (2 ou mais vezes)
      if (cliquesErro >= 2) {
        msgErro.classList.add("msg-critica");
      }
    } else {
      alert("Login realizado com sucesso!");
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
