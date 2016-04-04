FROM node:5.10.0
MAINTAINER Lxxyx <Lxxyxzj@gmail.com>
COPY ./ ./
WORKDIR ./
RUN npm install --registry=https://registry.npm.taobao.org
EXPOSE 5050
CMD ["npm", "start"]