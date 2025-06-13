FROM node:22-alpine

# Set working directory
WORKDIR /app

# Install sqlite for the database
RUN apk add --no-cache sqlite

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 1337

# Start the application
CMD ["npm", "start"]
