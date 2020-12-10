FROM    ubuntu:bionic

# Create app directory
WORKDIR /CollaborativeWhiteBoard

RUN apt -update

RUN apt -y upgrade 

#Install Curl
RUN apt -y install curl dirmngr apt -transport-https lsb-release ca-certificates wget

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

#Install nodeJS
RUN apt -y install nodejs

# Bundle app source
COPY . .

#Ports 
EXPOSE 3000 3000    


CMD [ "npm", "start" ]