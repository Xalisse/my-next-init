ARG NODE_VERSION=16-alpine
ARG NODE_ENV=production

FROM node:$NODE_VERSION AS builder

WORKDIR /usr/src/app

COPY . .
RUN npm ci

RUN npm run build
RUN npm prune --omit=dev

FROM node:$NODE_VERSION AS production

ARG NODE_ENV

USER node
WORKDIR /usr/src/app

COPY --from=builder --chown=node:node /usr/src/app/node_modules node_modules
COPY --from=builder --chown=node:node /usr/src/app/public public
COPY --from=builder --chown=node:node /usr/src/app/.next .next


EXPOSE 3000

CMD ["npx", "next", "start"]
