import axios from 'axios';

export default {
   
    // Gets all Exercises
    getWeight: function () {
        return axios.get("/api/weight");
    },

    // Gets the Recrod with the given id
    getWeightById: function (id) {
        return axios.get("/api/weight/" + id);
    },

  
    // Saves a Recrod to the database
    saveWeight: function (savedWeight) {
        return axios.post("/api/weight", savedWeight);
    },

    // Deletes the Record with the given id
    deleteWeight: function (id) {
        return axios.delete("/api/weight/" + id);
    }
}