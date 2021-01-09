import axios from 'axios';

export default {
   
    // Gets all Exercises
    getRecord: function () {
        return axios.get("/api/record");
    },

    // Gets the Recrod with the given id
    getRecordById: function (id) {
        return axios.get("/api/record/" + id);
    },

    //Gets Record by Name
    getRecordByName: function (query) {
        return axios.get("/api/record/?name=" + query);
    },

  
    // Saves a Recrod to the database
    saveRecord: function (savedRecord) {
        return axios.post("/api/record", savedRecord);
    },

    // Deletes the Record with the given id
    deleteRecord: function (id) {
        return axios.delete("/api/record/" + id);
    }
}