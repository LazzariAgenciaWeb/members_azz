---
description: Como colocar seu código no GitHub
---

# Enviando o código para o GitHub

Para colocar seu projeto no servidor, primeiro precisamos salvá-lo no GitHub.

## 1. Criar o Repositório
1.  Acesse [github.com/new](https://github.com/new).
2.  Nome do repositório: `portal-cliente`.
3.  Deixe como **Public** (ou Private se preferir).
4.  Clique em **Create repository**.

## 2. Enviar o Código
Volte para o seu terminal (no VS Code) e rode os comandos abaixo.
*Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub.*

```bash
# 1. Iniciar o Git (se ainda não fez)
git init

# 2. Adicionar todos os arquivos
git add .

# 3. Salvar a versão inicial
git commit -m "Primeira versão do portal"

# 4. Renomear a branch principal para 'main'
git branch -M main

# 5. Conectar com o GitHub (ATENÇÃO: Troque o link abaixo pelo do SEU repositório)
git remote add origin https://github.com/SEU_USUARIO/portal-cliente.git

# 6. Enviar os arquivos
git push -u origin main
```

Se der algum erro de permissão, você precisará fazer login no Git. O terminal vai te pedir usuário e senha (ou token).
