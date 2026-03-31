FROM nginx:alpine

# Remove os arquivos padrão do servidor Nginx
RUN rm -rf /usr/share/nginx/html/*

COPY public/ /usr/share/nginx/html/

# O Nginx roda na porta 80 por padrão
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]