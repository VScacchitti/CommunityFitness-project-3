import axios from "axios"

export default {
   

    // Gets all Exercises
    getExercise: function () {
        return axios.get("/api/exercise");
    },

    // Gets the Exercise with the given id
    getExerciseById: function (id) {
        return axios.get("/api/exercise/" + id);
    },

   //Gets the Exercise by bodypart
    getExercisebyName: function (query) {
        return axios.get("/api/exercise/?bodypart=" + query);
    },

  //Gets the Eercises by name
    getExercisebyName: function (query) {
        return axios.get("/api/exercise/?name=" + query);
    },

    // Saves a Exercise to the database
    saveExercise: function (savedExercise) {
        return axios.post("/api/exercise", savedExercise);
    },

    // Deletes the Exercise with the given id
    deleteExercise: function (id) {
        return axios.delete("/api/exercise/" + id);
    }
}