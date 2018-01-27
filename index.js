let store = { drivers: [], passengers: [], trips: []};

let driverId = 0
// has many trips, has many passengers through trips
class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name
    // insert in the driver to the store
    store.drivers.push(this)
  }
  //returns all trips of driver
  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id;
    });
  }
  //returns all passengers that a drivers has taken
  passengers() {
    return this.trips().map(trip => {
      return trip.passenger();
    });
  }
}

let passengerId = 0
//has many trips, has many drivers through trips
class Passenger {
  constructor(name){
    this.id = ++passengerId
    this.name = name
    // insert in the passenger to the store
    store.passengers.push(this)
  }
  //returns all trips a passenger has taken
  trips() {
    return store.trips.filter(trip => { return trip.passengerId === this.id; });
  }
  //returns all drivers a passenger has taken trip with
  drivers() {
    return this.trips().map(trip => {
      return trip.driver()
    })
  }
}

let tripId = 0
// belongs to a driver, belongs to a passenger
class Trip {
  constructor(driver, passenger){
    this.id = ++tripId
    this.name = name
    if(driver){
      this.driverId = driverId
    }
    if(passenger){
      this.passengerId = passengerId
    }
    // insert in the trip to the store
    store.trips.push(this)
  }
  //return driver associated with trip
  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    });
  }
  //return passenger associated with trip
  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    });
  }
}
