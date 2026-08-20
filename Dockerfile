# Build the static export
FROM node:20-slim AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Serve the exported static files (out/) — copied explicitly from the
# builder stage, independent of .gitignore/.dockerignore semantics.
FROM node:20-slim
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/out ./out
CMD ["sh", "-c", "serve out -l tcp://0.0.0.0:${PORT:-3000}"]
