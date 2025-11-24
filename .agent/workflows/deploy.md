---
description: Como colocar o projeto online (Deploy na Vercel)
---

# Como colocar seu site no ar (Deploy)

A maneira mais fácil e recomendada de colocar um projeto Next.js online é usando a **Vercel** (criadores do Next.js). É gratuito para projetos pessoais/hobbies.

## Pré-requisitos
1.  Uma conta no [GitHub](https://github.com/).
2.  Uma conta na [Vercel](https://vercel.com/) (pode criar usando sua conta do GitHub).

## Passo 1: Guardar o código no GitHub
Primeiro, precisamos enviar seu código para a nuvem (GitHub).

1.  Crie um **novo repositório** no GitHub (pode chamar de `portal-cliente`).
2.  No seu terminal (na pasta do projeto), rode os comandos:

```bash
# Iniciar o git (se já não tiver iniciado)
git init

# Adicionar todos os arquivos
git add .

# Salvar a versão
git commit -m "Primeira versão do portal"

# Conectar com o GitHub (troque SEU_USUARIO pelo seu user real)
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/portal-cliente.git
git push -u origin main
```

## Passo 2: Conectar na Vercel
1.  Acesse o [Dashboard da Vercel](https://vercel.com/dashboard).
2.  Clique em **"Add New..."** -> **"Project"**.
3.  Na lista "Import Git Repository", procure pelo seu projeto `portal-cliente` e clique em **Import**.

## Passo 3: Configurar e Deploy
1.  Na tela de configuração, você pode deixar tudo como está.
2.  Clique em **Deploy**.
3.  Aguarde alguns instantes (cerca de 1-2 minutos).

🎉 **Pronto!**
A Vercel vai te dar um link (ex: `portal-cliente.vercel.app`) onde seu projeto estará rodando online, acessível de qualquer lugar.

## Atualizações Futuras
Sempre que você fizer alterações no seu computador, basta rodar:
```bash
git add .
git commit -m "Descrição da mudança"
git push
```
A Vercel detectará a mudança e atualizará o site automaticamente!
