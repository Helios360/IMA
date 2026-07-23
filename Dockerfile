# syntax=docker/dockerfile:1

# ==========================================================
# Étape 1 — Build du site statique avec Bun
# ==========================================================
FROM oven/bun:1-alpine AS build
WORKDIR /app

# Installe les dépendances à partir du lockfile (couche mise en cache
# tant que package.json / bun.lock ne changent pas).
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copie le reste du projet et génère le site prérendu dans /app/build.
COPY . .
RUN bun run build

# ==========================================================
# Étape 2 — Service des fichiers statiques via nginx
# ==========================================================
FROM nginx:1.27-alpine AS runtime

# Configuration nginx adaptée au site (URLs en dossiers, cache des assets).
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Uniquement le résultat du build est copié dans l'image finale.
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
	CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
