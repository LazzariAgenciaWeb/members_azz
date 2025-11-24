# Deploy no seu Servidor DigitalOcean (Ubuntu)

Vi que você tem um Droplet **Ubuntu** com **2GB de RAM**. É suficiente para rodar seu Portal do Cliente junto com o n8n!

## 1. Acessar o Servidor
Abra seu terminal no computador e acesse via SSH (troque `SEU_IP` pelo IP do droplet):
```bash
ssh root@SEU_IP
```

## 2. Instalar Node.js e PM2
Como você já tem o n8n, talvez já tenha o Node.js. Vamos verificar e instalar se necessário.

```bash
# Verificar versão atual
node -v

# SE a versão for menor que 18 (ex: v14 ou v16), atualize:
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instalar o PM2 (para manter o site online)
sudo npm install -g pm2
```

## 3. Baixar o Projeto
Você precisa que seu código esteja no GitHub.

```bash
# Vá para a pasta de sites (ou crie uma)
cd /var/www
mkdir portal-cliente
cd portal-cliente

# Clone seu repositório (Troque pelo link do SEU GitHub)
git clone https://github.com/SEU_USUARIO/portal-cliente.git .

# Instalar dependências
npm install

# Build do projeto
npm run build
```

## 4. Colocar Online
Vamos usar o PM2 para rodar o Next.js na porta 3000.

```bash
# Iniciar o site
pm2 start npm --name "portal-cliente" -- start

# Salvar para iniciar automático se o servidor reiniciar
pm2 save
```

## 5. Acessar
Agora seu portal deve estar acessível em:
`http://SEU_IP_DO_DROPLET:3000`

> **Dica**: Se não abrir, pode ser que o firewall (UFW) esteja bloqueando a porta 3000. Libere com:
> `sudo ufw allow 3000`

## (Opcional) Configurar Domínio
Se quiser usar um domínio (ex: `portal.suaempresa.com`) em vez do IP:3000, precisaremos configurar o **Nginx**. Me avise se quiser ajuda com isso!
