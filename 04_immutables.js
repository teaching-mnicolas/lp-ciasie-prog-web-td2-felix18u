describe ("Immutables", function() {

  describe ("Numbers", function() {
    it ("are immutables", function() {
      let a = 1;
      expect(typeof(a)).toEqual("number");
      a.test = 24;
      expect(a.test).toBe__();
      expect(a.test).__.toEqual(24);          // this line fail, add a not
    });

    it ("are still objects", function() {
      expect((1).__).toEqual("1");            // call the method toString() on (1)
    });
  });

  describe ("Strings", function() {
    it ("are immutables", function() {
      let a = "coucou";
      expect(typeof(a)).toEqual("string");
      a.test = 24;
      expect(a.test).toBe__();
      expect(a.test).__.toEqual(24);          // this line fail, add a not
    });

    it ("are still objects", function() {
      expect("coucou".__).toEqual("COUCOU");  // call the method toUpperCase() on "coucou"
    });
  });

  describe ("Booleans", function() {
    it ("are immutables", function() {
      let a = true;
      expect(typeof(a)).toEqual("boolean");
      a.test = 24;
      expect(a.test).toBe__();
      expect(a.test).__.toEqual(24);          // this line fail, add a not
    });

    it ("are still objects", function() {
      expect(true.__).toEqual("true");        // call the method toString() on true
    });
  });

});
