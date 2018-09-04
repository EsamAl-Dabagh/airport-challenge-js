function Airport() {

  this.planes = []

  this.land = function(flightNum) {
    this.planes.push(flightNum = new Plane(flightNum));
  }
}