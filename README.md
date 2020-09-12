# Swim Bike Run - App for new Triathletes
## Introduction
I am new to triathlon and I don't know where to start, which interest group to connect with, and how different it is to other sports. I boiled it down to 2-3 categories as MVP: equipment, training, and diet</br>

## Methodology and Approach
### Principles
1. Use personal own experience as a reference, as I will be the main user
2. Key categories of new triathletes are: training schedules, watch their diet, as well as equipment
3.The app should store and record an input by the dates.

### Scope of MVP
The MVP of the app will have features for user to:
* enter a new tip entry
* edit, view and delete the tip entry
* select and store a tip as favorite
* de-select the tip as favorite

## Technology Utilized
1. React and CSS for frontend web design
2. Flexbox for website to be responsive
3. MongoDB Atlas Cluster, to store database. It is hosted on Azure
4. Heroku to host the backend application
5. Netlify to host the website

## User Journey
### User Journey 1
1. Input by date and the fields, select category
2. Submit button
4. Store entry into db
5. Call tips from db and render it

### User Journey 2
1. View all tips that are stored as favorites
2. Select and deselect as like

## Wishlist
1. User authentication with gmail
2. Like button feature
3. Search and view by categories of tips
4. Search and view tips by keywords

## Learnings
1. Using react router to render page on the header
2. Using functional vs class component to map props out
3. CORS issue - setting up .env to be condusive for hosting on Heroku 
