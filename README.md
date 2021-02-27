# used-item-market-api
Microservice version of used-item-market. Same functionality as original, but split into 3 microservices that communicate with each other.

This repository contains the API service.

[Original repository](https://github.com/samijouppila/used-item-market)

[Documentation](https://t8josa01-used-item-market.herokuapp.com/api/documentation)


# Setup
Requires running instances of login-service and posting-service.

[Login service](https://github.com/samijouppila/used-item-market-login)
[Posting service](https://github.com/samijouppila/used-item-market-posting)

Copy and rename .env.example to .env. Insert the following environment variables:
- LOGIN_SERVICE_URL= URL of running login-service instance
- POSTING_SERVICE_URL= URL of running posting-service instance

npm install

# Usage
npm start

# Test
npm test
