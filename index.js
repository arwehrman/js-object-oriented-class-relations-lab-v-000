let store = { drivers: [], passengers: [], trips: []};

let driverId = 0

class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name

    // insert in the user to the store
    store.drivers.push(this)
  }
}

let passengerId = 0

class Passenger {
  constructor(name){
    this.id = ++passengerId
    this.name = name

    // insert in the user to the store
    store.passengers.push(this)
  }
}

let tripId = 0

class Trip {
  constructor(name){
    this.id = ++tripId
    this.name = name
    if(driver){
      this.driverId = driverId
    }
    if(passenger){
      this.passengerId = passengerId
    }


    // insert in the user to the store
    store.trips.push(this)
  }
  setDriver(driver){
    this.driverId = driver.id
  }
  setPassenger(passenger){
    this.passengerId = passengerId
  }
}
