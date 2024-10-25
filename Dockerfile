FROM node:22-alpine

WORKDIR /cmt-plan
COPY package.json .
RUN npm install
COPY . .

RUN npm run build
CMD ["npm", "run", "preview"]

#CMD ["npm", "run", "dev"]