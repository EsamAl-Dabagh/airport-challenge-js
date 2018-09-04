describe("Airport", function(){

  var airport

  beforeEach(function() {
    airport = new Airport();
  });

  describe("planes", function() {
    it("starts with an empty array", function() {
      expect(airport.planes.length).toBeLessThan(1);
    });
  });

  describe("land", function(){

    it("adds a plane to planes", function() {
      airport.land("BA123")
      expect(airport.planes.length).toBeGreaterThan(0);
    });

  });
});