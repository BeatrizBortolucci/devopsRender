FROM openjdk
RUN npm install
ENTRYPOINT npm start
