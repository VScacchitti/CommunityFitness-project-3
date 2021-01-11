import axios from 'axios';

export default {
   
    // Gets all Exercises
    getMeasurement: function () {
        return axios.get("/api/measurement");
    },

    // Gets the Recrod with the given id
    getMeasurementById: function (id) {
        return axios.get("/api/measurement/" + id);
    },

    // Saves a Recrod to the database
    saveMeasurement: function (savedMeasurement) {
        return axios.post("/api/measurement", savedMeasurement);
    },

    // Deletes the Record with the given id
    deleteMeasurement: function (id) {
        return axios.delete("/api/measurement/" + id);
    }
}