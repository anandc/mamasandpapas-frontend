Frontend app using common backend app

#To run
git clone https://github.com/anandc/mamasandpapas-frontend.git  
cd mamasandpapas-frontend  
docker build -t mamasandpapas-fe .  
docker run -it -p 3000:3000 mamasandpapas-fe  

#For backend  
git clone https://github.com/anandc/commonBackendApp.git  
docker build -t common-be .  
docker run -it -p 4000:4000 common-be  

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
