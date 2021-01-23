<!-- TOP -->
# Group Project #3

## Community Fitness Workout App
 Community Fitness is the future of user driven exercise motivation and tracking. In a time where more and more people are working out at home,Community Fitness bridges the gap between social media interaction and group / personal fitness.

## Table of Contents

* [Deployed App](#deployed)
* [Installation](#installation)
* [Navigation](#Navigation)
* [Technology](#technology)
* [Contributors](#contributors)
* [License](#license)
* [Launch](#launch)

### Deployed

For [webpage](https://lit-headland-55854.herokuapp.com/)
For [github](https://github.com/VScacchitti/CommunityFitness-project-3)


### Installation

    ## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

[Table of Contents](#Table-of-Contents)

### Navigation
* [Login](#login)
* [Profile](#profile)
* [Create a Workout](#workout)
* [Weekly Plan](#plan)
* [Search by Muscle](#search-by-muscle)
* [Social](#social)

## Login / Sign Up
![Screen Shot](https://github.com/VScacchitti/CommunityFitness-project-3/blob/master/ScreenShots/LoginSS.jpg) </br>
![Screen Shot](https://github.com/VScacchitti/CommunityFitness-project-3/blob/master/ScreenShots/SignUpSS.jpg)

This page allows the User to create an account. As well as log into their existing account and access their workouts. 

[Back to Navigation](#Navigation)

## Plan  
![Screen Shot](https://github.com/VScacchitti/CommunityFitness-project-3/blob/master/ScreenShots/PlanSS.jpg)

This page allows the user to either select from the Workout tab, which lists all the workouts that they created and saved. Or they are able to click on the Exercise tab and select from a list of loaded workouts from the database. Once a user selects a workout from either pop up, that exercise falls into the weekly calendar and can be dragged to a different day.

[Back to Navigation](#Navigation)

## Profile 
![Screen Shot](https://github.com/VScacchitti/CommunityFitness-project-3/blob/master/ScreenShots/ProfileSS.jpg)

This page allows the User to enter in their current weight so they can monitor their progress while using the app and during their daily exercise. They can also enter in personal records (PR) for lifting weights or reps done. 

[Back to Navigation](#Navigation)

## Search by Muscle 
![Screen Shot](https://github.com/VScacchitti/CommunityFitness-project-3/blob/master/ScreenShots/MuscleManSS.jpg)

This page allows the user to select a muscle region and have a list of workouts appears that they can then select from to add to their weekly plan.

[Back to Navigation](#Navigation)

## Social 
![Screen Shot](https://github.com/VScacchitti/CommunityFitness-project-3/blob/master/ScreenShots/SocialSS.jpg)

This page is where the general public can add comments or remarks to the exercises that the user has done. Future implementation would have a user to user group feature where the main user can limit the comments to only their friends or other users that they've allowed access to. 

[Back to Navigation](#Navigation)


## Workout 
![Screen Shot](https://github.com/VScacchitti/CommunityFitness-project-3/blob/master/ScreenShots/WorkoutSS.jpg)

On this page the User can create a workout that they can then save and recall later should they want to do the same workout another time.

[Table of Contents](#Table-of-Contents)

### Technology

* React
* MERN
* Axios
* Express
* Mongoose
* React-dnd
* Cogo-toast
* Jsonwebtoken
* Bcrpyt


### Contributors

* Vince Scacchitti </br>
* Joy Meredith </br>
* Brennan Doehring </br>
* Michael Kolek </br>

[Table of Contents](#Table-of-Contents) 

### License
MIT
  ![badge](https://img.shields.io/badge/license-MIT-red) 


[Table of Contents](#Table-of-Contents)
