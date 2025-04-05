FROM node:alpine AS builder

RUN npm install -g pnpm

WORKDIR /app

# copy lock file for caching
COPY pnpm-lock.yaml ./
COPY package.json ./

# dont update dependencies automatically in the container
# just use the config in the lock file as is
# if the lock file is out of sync with package.json, we will get an error
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

#######################################

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

# dont let nginx daemonize as when the docker container
# stops, nginx would stop instantly which could lead to
# unexpected behaviour
CMD ["nginx", "-g", "daemon off;"]