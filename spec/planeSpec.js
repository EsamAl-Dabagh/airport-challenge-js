describe("Plane", function() {
  it("has a flight number", function() {
    airplane = new Plane("BA123");
    expect(airplane.flightNumber).toEqual("BA123");
  });
});