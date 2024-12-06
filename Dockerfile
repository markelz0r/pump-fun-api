# Step 1: Use the official Node.js 20 image as the base image
FROM node:20-alpine AS build

# Step 2: Set the working directory inside the Docker image
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install dependencies (this also ensures the image layers are cached efficiently)
RUN npm install

# Step 5: Copy the rest of the project files to the Docker image
COPY . .

# Step 6: Install TypeScript globally
RUN npm install -g typescript

# Step 7: Build the TypeScript code
RUN npm run build

# Step 8: Use a minimal Node.js runtime image for the final image
FROM node:20-alpine

# Step 9: Set the working directory for the final image
WORKDIR /app

# Step 10: Copy the built application from the build image to the runtime image
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./

# Step 11: Install production dependencies (if needed)
RUN npm ci --only=production

# Step 13: Start the application
CMD ["node", "dist/server.js"]