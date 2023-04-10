FROM ubuntu:18.04
USER root
WORKDIR /home/app

RUN apt-get update && apt-get install -y
RUN apt-get -y install apg
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_16.x  | bash -
RUN apt-get -y install nodejs
RUN node --version && apg


WORKDIR /home/app/apg-tool
COPY package.json package-lock.json* ./
RUN npm ci
COPY ./ ./

CMD npm run dev
