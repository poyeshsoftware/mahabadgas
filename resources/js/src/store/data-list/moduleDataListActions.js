import axios from 'axios'

export default {
    // fetchEventLabels({ commit }) {
    //   return new Promise((resolve, reject) => {
    //     axios.get("/api/apps/calendar/labels")
    //       .then((response) => {
    //         commit('SET_LABELS', response.data)
    //         resolve(response)
    //       })
    //       .catch((error) => { reject(error) })
    //   })
    // },
    addDriver({commit}, item) {
        return new Promise((resolve, reject) => {
            console.log(item)
            axios.post("/drivers/new", item)
                .then((response) => {
                    commit('ADD_DRIVER', Object.assign(item, response.data.data))
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    fetchDrivers({commit}) {
        return new Promise((resolve, reject) => {
            axios.get("/drivers")
                .then((response) => {
                    commit('SET_DRIVERS', response.data.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    updateDriver({commit}, item) {
        return new Promise((resolve, reject) => {
            axios.post(`/drivers/update/${item.id}`, item)
                .then((response) => {
                    commit('UPDATE_DRIVER', response.data.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    removeDriver({commit}, itemId) {
        return new Promise((resolve, reject) => {
            axios.delete(`/drivers/remove/${itemId}`)
                .then((response) => {
                    commit('REMOVE_DRIVER', itemId)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    addVehicle({commit}, item) {
        return new Promise((resolve, reject) => {
            console.log(item)
            axios.post("/vehicles/new", item)
                .then((response) => {
                    commit('ADD_VEHICLE', Object.assign(item, response.data.data))
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    fetchVehicles({commit}) {
        return new Promise((resolve, reject) => {
            axios.get("/vehicles")
                .then((response) => {
                    commit('SET_VEHICLES', response.data.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    removeVehicle({commit}, itemId) {
        return new Promise((resolve, reject) => {
            axios.delete(`/vehicles/remove/${itemId}`)
                .then((response) => {
                    commit('REMOVE_VEHICLE', itemId)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    updateVehicle({commit}, item) {
        return new Promise((resolve, reject) => {
            axios.post(`/vehicles/update/${item.id}`, item)
                .then((response) => {
                    commit('UPDATE_VEHICLE', response.data.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },

    addCategory({commit}, item) {
        return new Promise((resolve, reject) => {
            console.log(item)
            axios.post("/categories/new", item)
                .then((response) => {
                    commit('ADD_CATEGORY', Object.assign(item, response.data.data))
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    fetchCategories({commit}) {
        return new Promise((resolve, reject) => {
            axios.get("/categories")
                .then((response) => {
                    commit('SET_CATEGORIES', response.data.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    updateCategory({commit}, item) {
        return new Promise((resolve, reject) => {
            axios.post(`/categories/update/${item.id}`, item)
                .then((response) => {
                    commit('UPDATE_CATEGORY', response.data.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    removeCategory({commit}, itemId) {
        return new Promise((resolve, reject) => {
            axios.delete(`/categories/remove/${itemId}`)
                .then((response) => {
                    commit('REMOVE_CATEGORY', itemId)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    addFactor({commit}, item) {
        return new Promise((resolve, reject) => {
            axios.post("/factors/new", item, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((response) => {
                    commit('ADD_FACTOR', Object.assign(item, response.data.data))
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    fetchFactors({commit}) {
        return new Promise((resolve, reject) => {
            axios.get("/factors")
                .then((response) => {
                    commit('SET_FACTORS', response.data.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    updateFactor({commit}, item) {
        return new Promise((resolve, reject) => {
            axios.post(`/factors/update/${item.id}`, item.form)
                .then((response) => {
                    commit('UPDATE_FACTOR', response.data.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    removeFactor({commit}, itemId) {
        return new Promise((resolve, reject) => {
            axios.delete(`/factors/remove/${itemId}`)
                .then((response) => {
                    commit('REMOVE_FACTOR', itemId)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    // eventDragged({ commit }, payload) {
    //   return new Promise((resolve, reject) => {
    //     axios.post(`/api/apps/calendar/event/dragged/${payload.event.id}`, {payload: payload})
    //       .then((response) => {

    //         // Convert Date String to Date Object
    //         let event = response.data
    //         event.startDate = new Date(event.startDate)
    //         event.endDate = new Date(event.endDate)

    //         commit('UPDATE_EVENT', event)
    //         resolve(response)
    //       })
    //       .catch((error) => { reject(error) })
    //   })
    // },
}
