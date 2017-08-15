#!/usr/bin/env bash
set -e

# start db
docker-compose down
docker-compose up -d

echo '[system] waiting for db..'
while ! docker-compose exec mongo mongo --version >/dev/null 2>&1; do
  sleep 1
done
sleep 1

# migration
echo '[system] sample data migrating..'
node_modules/.bin/ts-node ./migrate/index.ts

# start server
echo '[system] staring API server...'
node_modules/.bin/nodemon --exec "node_modules/.bin/ts-node" ./src/index.ts
docker-compose down
