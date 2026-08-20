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
# Fixed port, matching this service's Railway Networking target port.
# Not using $PORT here: Railway's edge for this service routes to a
# manually-configured target port (3000) that isn't kept in sync with
# whatever value the PORT env var happens to be at runtime.
EXPOSE 3000
CMD ["serve", "out", "-l", "tcp://0.0.0.0:3000"]
