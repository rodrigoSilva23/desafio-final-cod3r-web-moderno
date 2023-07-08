#!/bin/bash

cp  .env.exemple .env
yarn install
yarn start
tail -f /dev/null