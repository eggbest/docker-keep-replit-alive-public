FROM node:latest
COPY . /src
RUN cd /src && npm install
EXPOSE 4000
CMD ["node", "/src/main.js"]