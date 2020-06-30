/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
==========================================================================================*/


export default {
    // SET_LABELS(state, labels) {
    //   state.eventLabels = labels
    // },
    ADD_DRIVER(state, driver) {
        state.drivers.unshift(driver)
    },
    SET_DRIVERS(state, drivers) {
        state.drivers = drivers
    },
    UPDATE_DRIVER(state, driver) {
        const driverIndex = state.drivers.findIndex((p) => p.id == driver.id)
        Object.assign(state.drivers[driverIndex], driver)
    },
    REMOVE_DRIVER(state, itemId) {
        const ItemIndex = state.drivers.findIndex((p) => p.id == itemId)
        state.drivers.splice(ItemIndex, 1)
    },
    ADD_VEHICLE(state, vehicle) {
        state.vehicles.unshift(vehicle)
    },
    SET_VEHICLES(state, vehicles) {
        state.vehicles = vehicles
    },
    UPDATE_VEHICLE(state, vehicle) {
        const vehicleIndex = state.vehicles.findIndex((p) => p.id == vehicle.id)
        Object.assign(state.vehicles[vehicleIndex], vehicle)
    },
    REMOVE_VEHICLE(state, itemId) {
        const ItemIndex = state.vehicles.findIndex((p) => p.id == itemId)
        state.vehicles.splice(ItemIndex, 1)
    },
    ADD_CATEGORY(state, category) {
        state.categories.unshift(category)
    },
    SET_CATEGORIES(state, categories) {
        state.categories = categories
    },
    UPDATE_CATEGORY(state, category) {
        const categoryIndex = state.categories.findIndex((p) => p.id == category.id)
        Object.assign(state.categories[categoryIndex], category)
    },
    REMOVE_CATEGORY(state, itemId) {
        const ItemIndex = state.categories.findIndex((p) => p.id == itemId)
        state.categories.splice(ItemIndex, 1)
    }
    ,
    ADD_FACTOR(state, factor) {
        state.factors.unshift(factor)
    },
    SET_FACTORS(state, factors) {
        state.factors = factors
    },
    UPDATE_FACTOR(state, factor) {
        const factorIndex = state.factors.findIndex((p) => p.id == factor.id)
        Object.assign(state.factors[factorIndex], factor)
    },
    REMOVE_FACTOR(state, itemId) {
        const ItemIndex = state.factors.findIndex((p) => p.id == itemId)
        state.factors.splice(ItemIndex, 1)
    },
    ADD_ADMIN(state, admin) {
        state.admins.unshift(admin)
    },
    SET_ADMINS(state, admins) {
        state.admins = admins
    },
    UPDATE_ADMIN(state, admin) {
        const adminIndex = state.admins.findIndex((p) => p.id == admin.id)
        Object.assign(state.admins[adminIndex], admin)
    },
    REMOVE_ADMIN(state, itemId) {
        const ItemIndex = state.admins.findIndex((p) => p.id == itemId)
        state.admins.splice(ItemIndex, 1)
    }


}
