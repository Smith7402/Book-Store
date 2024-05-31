# Use an official Node runtime as a parent image
FROM node:14 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the contents of the local src directory to the working directory
COPY . .

# Build the application
RUN npm run build

# Use Nginx as the base image for serving the application
FROM nginx:alpine

# Copy the build output to the Nginx public directory
COPY --from=dist /app/dist /var/www/web001.chinhvn.online/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
