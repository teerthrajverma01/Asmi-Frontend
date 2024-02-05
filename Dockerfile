FROM node:alpine3.18 as build

# Declare build time environment variables
# ARG REACT_APP_NODE_ENV
# ARG REACT_APP_SERVER_BASE_URL
ARG VITE_BASE_URL

# Set default values for environment variables
# ENV REACT_APP_NODE_ENV=$REACT_APP_NODE_ENV
# ENV REACT_APP_SERVER_BASE_URL=$REACT_APP_SERVER_BASE_URL
ENV VITE_BASE_URL=$VITE_BASE_URL

# Build App
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Serve with Nginx
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf *
COPY --from=build /app/dist .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]