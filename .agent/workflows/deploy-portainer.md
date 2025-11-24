---
description: Como fazer deploy usando Portainer (Docker)
---

# Deploy via Portainer

Como você já usa **Portainer**, essa é a melhor forma de rodar o projeto! Ele vai ficar isolado em um container, sem bagunçar seu servidor.

## Passo 1: Atualizar o Repositório
Como criamos arquivos novos (`Dockerfile` e `docker-compose.yml`), precisamos enviá-los para o GitHub primeiro.

No seu terminal local:
```bash
git add .
git commit -m "Adicionando configuração Docker"
git push
```

## Passo 2: Criar a Stack no Portainer
1.  Acesse seu **Portainer**.
2.  Vá em **Stacks** -> **Add stack**.
3.  Dê um nome, ex: `portal-cliente`.
4.  Escolha a opção **Repository** (Git).
5.  **Repository URL**: `https://github.com/LazzariAgenciaWeb/members_azz.git`
6.  **Repository reference**: `refs/heads/main`
7.  Em **Compose path**, deixe `docker-compose.yml`.
8.  Clique em **Deploy the stack**.

## O que vai acontecer?
O Portainer vai ler o arquivo `Dockerfile` que criei, baixar o código, instalar tudo e rodar o site automaticamente.

## Acessando
O site estará disponível em: `http://SEU_IP_DO_SERVIDOR:3000`

> **Nota**: Se você já tiver algo rodando na porta 3000, precisaremos mudar a porta no arquivo `docker-compose.yml` antes de enviar.
