# syntax=docker/dockerfile:1
ARG NODE_VERSION=20
ARG PNPM_VERSION=9

FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src/app

# Install pnpm globally
RUN npm install -g pnpm@${PNPM_VERSION}

# Copy dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source files and build
COPY . .
RUN npm run build

FROM node:${NODE_VERSION}-alpine AS final
WORKDIR /app

# Copy build output and node_modules
COPY --from=base /src/app/node_modules ./node_modules
COPY --from=base /src/app/dist ./dist
COPY package.json ./

# Use non-root user
USER node

# Expose application port
EXPOSE 5173

# Start the application
CMD ["npm", "run", "preview"]
