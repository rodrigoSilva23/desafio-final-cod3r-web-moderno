FROM node:18.16-alpine

WORKDIR /home/node/app
COPY . .
RUN yarn install
RUN yarn global add knex 
USER node

CMD ["/home/node/app/.docker/command.sh"]




