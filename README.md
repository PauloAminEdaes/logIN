# logIN

Uma tela de login simples com o báscio bem feito (HTML / CSS / Javascript) com alguns frik frik....

### ERROS quando vc cria um READ.MD ao criar o repositório mas ele não existe no PC

git push -u origin main

To https://github.com/PauloAminEdaes/logIN
! [rejected] main -> main (non-fast-forward)
error: failed to push some refs to 'https://github.com/PauloAminEdaes/logIN'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. If you want to integrate the remote changes,
hint: use 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

Como o GitHub tem uma versão "mais nova" da história do projeto, ele impede o push para evitar que você apague arquivos sem querer.

Aqui está o passo a passo para resolver isso de forma segura:

1. Sincronize o seu repositório local
   Você precisa trazer as mudanças do GitHub (o README) para a sua máquina antes de enviar as suas. Use o comando abaixo:

bash
git pull origin main --rebase

Por que usar --rebase?
Isso fará com que os seus commits fiquem "em cima" do commit do README que você criou no site, mantendo o histórico limpo e linear.

2. Resolva conflitos (Se houver)
   Se o Git disser "Successfully rebased", pule para o passo 3.

Se houver conflitos, o Git avisará. Você precisará abrir os arquivos, escolher o que manter, salvar e digitar git rebase --continue.

3. Envie para o GitHub
   Agora que o seu computador está atualizado com o que existe no servidor, o comando de envio funcionará:

git push -u origin main

Dica sobre o novo Token
Como você gerou um token novo, se o Windows ou o seu terminal pedir a senha ao executar o git pull ou git push, lembre-se: não use a sua senha do GitHub. Use o Token que você gerou no lugar da senha.

######### TarefasAPP (ASP.NET) versão WEB em desenvolvimento

Banco de dados SQL SERVER

TarefasApp/
├── Controllers/
├── Models/
├── Data/
├── Program.cs
└── appsettings.json
