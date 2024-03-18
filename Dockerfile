# Use a minimal base image
FROM scratch

# Set the working directory inside the container
WORKDIR /app

# Copy the application files into the container
COPY . .

# Expose the port on which your Node.js application will run
EXPOSE 3000

# Define any environment variables your application needs
ENV NODE_ENV=production

# Command to run your Node.js application
CMD ["node", "app.js"]
