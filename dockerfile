FROM node:16
WORKDIR /app
COPY package.json ./
RUN npm install
# ARG NODE_ENV
# RUN if [ "$NODE_ENV" = "development"]; \
#         then npm install; \
#         fi

COPY . ./
EXPOSE 3000