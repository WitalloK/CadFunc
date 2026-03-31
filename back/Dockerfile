FROM node:20-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências primeiro (otimiza o cache)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o conteúdo da pasta back para o container
COPY . .

# Expõe a porta do seu servidor Express
EXPOSE 3000

# Comando para rodar o servidor
CMD ["node", "src/server.js"]