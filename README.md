# Design Maturity Survey

This is a service which allows for a user to complete a design maturity survey response. 

Data is stored in a free AirTable database.

## Install the service

run `npm install`

create a .env file on the root of the project

Add a key `AIRTABLE_API_KEY=`

## AirTable

Crerate a free AirTable account at https://airtable.com

Name it Design Maturity

Create the following fields and Types:

Date (Date with time)
Q1 - Number (Integer)
Q2 - Number (Integer)
Q3 - Number (Integer)
Q4 - Number (Integer)
Q5 - Number (Integer)
Q6 - Number (Integer)
Q7 - Number (Integer)
Q8 - Number (Integer)
Q9 - Number (Integer)
Q10 - Number (Integer)
Q11 - Number (Integer)
Q12 - Number (Integer)
Q13 - Number (Integer)
Role - Text string
Area - Text string
Score - Formula - SUM(Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10,Q11,Q12,Q13)

Generate an API and add this as the value for AIRTABLE_API_KEY= in your service .env file.

## Run the service

run `npm run dev`