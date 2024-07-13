FROM node:lts-iron AS builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn run build


FROM node:lts-iron
WORKDIR /app
COPY --from=builder /app/build /app/build
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
EXPOSE 3000
ENV NODE_ENV=production
ENTRYPOINT [ "node", "build" ]