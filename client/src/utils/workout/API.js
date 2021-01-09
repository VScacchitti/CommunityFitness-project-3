import axios from "axios"

export default {
   

    // Gets all Exercises
    getWorkout: function () {
        return axios.get("/api/workout");
    },

    // Gets the Exercise with the given id
    getWorkoutById: function (id) {
        return axios.get("/api/workout/" + id);
    },

    //Need to do a get by Date**

  
    // Saves a Exercise to the database
    saveWorkout: function (savedWorkout) {
        return axios.post("/api/workout", savedWorkout);
    },

    // Deletes the Exercise with the given id
    deleteWorkout: function (id) {
        return axios.delete("/api/workout/" + id);
    }
}