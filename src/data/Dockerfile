FROM postgres

USER postgres

# run create.sql on init
ARG ENV=prod 
RUN if [ "$ENV" == "dev" ]; \
    then export create.sql /docker-entrypoint-initdb.d \
    # else export SOMEVAR=world; \
    fi 

