#Most recent Node.js offcial image
FROM node

#Set the working directory inside the container
WORKDIR /app

#Copy package.json and package-lock.json to the working directory
COPY ./client/package*.json ./

#Copy the rest of the application
COPY ./client .

#Install dependencies
RUN npm i

# Build the React app
#RUN npm run build

#Expose the port that app will run on
EXPOSE 5173

#Set the command to run your application
CMD ["npm", "run", "dev"]