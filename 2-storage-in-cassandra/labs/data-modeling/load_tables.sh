#!/bin/bash

# prepare dot env file - TODO. Now we assume .env is there already
source ./jupyter/.env

# run create-tables script
echo "$(tput setaf 2)[INFO]$(tput setaf 7) - Initializing Schema"
astra db cqlsh track3  -k booking -f create_tables.cql

# dsbulk calls to populate tables
echo "$(tput setaf 2)[INFO]$(tput setaf 7) - Import DataSet in table"
astra db load booking
  -url hotels_by_city.csv \
  -c csv \
  -k "data_exploration" \
  -t hotels_by_city

