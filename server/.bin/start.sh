#!/usr/bin/env bash
set -e

# start db
docker-compose up -d

echo '[system] waiting db is ready..'
while ! docker-compose exec mongo mongo --version >/dev/null 2>&1; do
  sleep 1
done
sleep 1

# migration
echo '[system] migrating..'
node_modules/.bin/ts-node ./src/migrate/index.ts

# start server
echo '[system] staring API server...'
node_modules/.bin/nodemon --exec "node_modules/.bin/ts-node" ./src/index.ts
docker-compose down
