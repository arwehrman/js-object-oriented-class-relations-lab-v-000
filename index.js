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
