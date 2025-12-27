FROM node:22-slim

# Enable pnpm via corepack
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

# Copy package configuration files first for better caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the project files
COPY . .

# Install tsx globally to execute TypeScript files directly
RUN pnpm add -g tsx

# Default command to run the game
CMD ["tsx", "src/index.ts"]
