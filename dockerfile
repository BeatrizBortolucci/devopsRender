FROM node: 14
COPY . /app-node
RUN npm install
ENTRYPOINT npm start
