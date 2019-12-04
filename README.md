## Run the project locally

npm start

## Docker

# Build the container

docker build . -t react-docker

# Run the containers

docker run -p 8000:80 react-docker nginx -g "daemon off;"
