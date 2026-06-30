# --- Etapa 1: Construcción ---
FROM node:22-alpine AS build
WORKDIR /app

# Copiar archivos de configuración de paquetes e instalar dependencias
COPY package*.json ./
RUN npm ci

# Copiar el resto del código y compilar la app
COPY . .
RUN npm run build

# --- Etapa 2: Servidor de producción ---
FROM nginx:alpine

# Copiar los archivos estáticos generados por Vite al directorio de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto por defecto de Nginx
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]