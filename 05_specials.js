describe ("Specials", function() {

  describe ("Infinity", function() {
    it ("is immutable", function() {
      let a = Infinity;
      a.test = 24;
      expect(a.test).toBe__();
      expect(a.test).__.toEqual(24);                    // this line fail, add a not
    });

    it ("is still an object", function() {
      expect(Infinity.__).toEqual("Infinity");          // call the method toString() on Infinity
    });
  });

  describe ("NaN", function() {
    it ("NaN is immutable", function() {
      let a = NaN;
      a.test = 24;
      expect(a.test).toBe__();
      expect(a.test).__.toEqual(24);                    // this line fail, add a not
    });

    it ("is still an object", function() {
      expect(NaN.__).toEqual("NaN");                   // call the method toString() on NaN
    });
  });

  it ("undefined is NOT an object", function() {
    let fn = function() {
      undefined.test = 24;        // this should throw an exception
    };
    expect(fn).__;                // check that we get an exception, with toThrow()
  });

  it ("null is NOT an object", function() {
    let fn = function() {
      null.test = 24;             // this should throw an exception
    };
    expect(fn).__;                // check that we get an exception, with toThrow()
  });

});
