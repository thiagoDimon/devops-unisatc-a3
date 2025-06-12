#!/bin/bash
apt-get update -y
apt-get install -y docker.io docker-compose

usermod -aG docker ubuntu

# Puxar a imagem pública do Docker Hub
docker pull ${image_tag}

# Rodar o container da aplicação
docker run -d \
  --name strapi \
  -p 1337:1337 \
  ${image_tag}
