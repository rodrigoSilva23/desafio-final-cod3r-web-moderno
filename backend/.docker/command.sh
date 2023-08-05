#!/bin/sh

#cp  .env.exemple .env
knex migrate:up
yarn start
tail -f /dev/null