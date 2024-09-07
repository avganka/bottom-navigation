FROM node:20-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --production --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "preview"]