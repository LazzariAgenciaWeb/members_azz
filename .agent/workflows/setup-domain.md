---
description: Configurando Domínio (Cloudflare) e Traefik
---

# Configuração de Domínio e Traefik

Para acessar o portal via `members.azzagencia.com.br` com HTTPS (cadeado), siga estes passos.

## 1. Configurar o DNS (Cloudflare)
1.  Acesse sua conta no **Cloudflare**.
2.  Selecione o domínio `azzagencia.com.br`.
3.  Vá em **DNS** > **Records**.
4.  Clique em **Add record**:
    *   **Type**: `A`
    *   **Name**: `members`
    *   **IPv4 address**: O IP do seu servidor DigitalOcean.
    *   **Proxy status**: Pode deixar **Proxied** (Nuvem laranja) ou **DNS Only** (Cinza). Recomendo **DNS Only** (Cinza) inicialmente para evitar conflitos de certificado com o Traefik, depois pode ativar.

## 2. Descobrir a Rede do Traefik
No seu Portainer ou terminal do servidor, precisamos saber o nome da rede onde o Traefik está rodando.
1.  Acesse o servidor via SSH.
2.  Rode: `docker network ls`
3.  Procure por algo como `proxy`, `web`, `traefik_public` ou `traefik-net`.
4.  **Ajuste o arquivo docker-compose.yml**: Se o nome não for `proxy`, você precisa editar a linha `networks: - proxy` e `proxy: external: true` no final do arquivo.

## 3. Atualizar no Portainer
1.  Como eu já atualizei o arquivo `docker-compose.yml` com as configurações do Traefik, basta atualizar a Stack.
2.  No Portainer, vá na stack `portal-cliente`.
3.  Clique em **Editor**.
4.  Clique em **Update the stack** (marque a opção "Re-pull image" se quiser garantir).

## 4. Verificar
Acesse `https://members.azzagencia.com.br`.
Se der erro de certificado ou "404 page not found", verifique:
1.  Se o nome da rede está correto.
2.  Se o `certresolver` no docker-compose (linha `tls.certresolver`) tem o mesmo nome configurado no seu Traefik (geralmente é `myresolver` ou `letsencrypt`).
