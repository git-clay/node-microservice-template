#!/bin/bash

knex migrate:latest --env test --knexfile src/data/knexfile.ts
knex seed:run --env test --knexfile src/data/knexfile.ts
npm start
