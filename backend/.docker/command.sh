#!/bin/sh
yarn install
cp  .env.exemple .env
knex migrate:up
knex seed:run
yarn start
tail -f /dev/null