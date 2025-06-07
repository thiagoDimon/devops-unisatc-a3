# Step 1: Base Image
FROM node:22-alpine AS base

# Step 2: Build Stage
FROM base AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

# Step 3: Production Stage
FROM base AS production
WORKDIR /app
COPY --from=build /app/package.json /app/package-lock.json* ./
RUN npm install --omit=dev
COPY --from=build /app/dist ./dist
COPY --from=build /app/database ./database
COPY --from=build /app/public ./public
COPY --from=build /app/src ./src

EXPOSE 1337
CMD ["npm", "run", "start"]
