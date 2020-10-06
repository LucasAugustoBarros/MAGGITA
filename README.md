echo "# MAGGITA" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/LucasAugustoBarros/MAGGITA.git
git push -u origin main
                
…or push an existing repository from the command line
git remote add origin https://github.com/LucasAugustoBarros/MAGGITA.git
git branch -M main
git push -u origin main





1 - Passo Abrir o Terminal e criar uma pasta para que fique o Projeto Ir até a raiz do sistema 'cd Nome Pasta' Para Criar a Pasta 'Mkdir nome da pasta' 
2 - Passo Entrar na pasta criada e dar o setup do projeto 'npm init' Irá fazer umas perguntas Package name = Nome do Projeto Versão Descrição do Projeto Criar arquivo index.js Comando de test = npx wdio ./config/local.conf.js repositório GIT = Palavras Chaves do Projeto : "WebdriverIO", "Cucumber" "BDD", "E2E", "PageObject", "Appium", "JavaScript" Nome do Author do Projeto Tipo de Licencà (Estudar) = MIT(Licença que pode ser usada desde que se referencie) Irá mostrar como esta sendo criado o Projeto 
3 - Abrir o Vscode e abrir a pasta que foi criada ou digitar .code 
4 - Instalar o Pacote 'npm i --save-dev @wdio/cli' 
5 - Verificar se existe o npx 'which npx' 
6 - Configurar o wdio 'npx wdio config' On my Local Machine Cucumber Sync or Async NomeProjeto/features/.feature NomeProjeto/stepDefinitions/.js O sistema pergunta se quer que gere arquivos de teste. Babel(Compilador) Escolher o tipo de Report (Allure, Spec,Video,Cucumber entre outros) Servico de teste --> selenium-standalone Base Url : Só apertar enter Irá comecar a instalar os pacotes 
7 - Criar a Pasta Config Mover o wdio.conf.js e modificar o nome para local.conf.js 
8 - Adicionar os pacotes em package.json "@babel/cli": "^7.10.3", "@babel/core": "^7.10.3", "@babel/preset-env": "^7.10.3", "@babel/register": "^7.10.3", "@babel/runtime": "^7.10.3" 9 - Rodar no Terminal Rodar 'npm i'

Iniciar o Git git init git add --all :/ git pull git push git commit -m "initial commit"

git push origin master

quando eu quiser subir, o comando é git add --all, git commit -m "initial commit", git push