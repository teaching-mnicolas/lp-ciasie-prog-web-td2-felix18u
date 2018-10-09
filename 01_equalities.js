describe ("Equalities", function() {

  describe ("==", function() {
    it ("converts string to number", function() {
      expect(0 == '0').toBe__();
    });

    it ("converts string to boolean", function() {
      expect(false == '').toBe__();
    });

    it ("converts number to boolean", function() {
      expect(false == 0).toBe__();
    });

    it ("converts string AND number to boolean", function() {
      expect(0 == '').toBe__();
    });

    it ("compare content of strings", function() {
      expect("test" == "test").toBe__();
    });

    it ("DOES NOT compare content of objects", function() {
      let o_1 = {
        a: 1
      };
      let o_2 = {
        a: 1
      };
      expect(o_1 == o_2).toBe__();
    });
  });

  describe ("===", function() {
    it ("DOES NOT converts string to number", function() {
      expect(0 === '0').toBe__();
    });

    it ("DOES NOT converts string to boolean", function() {
      expect(false === '').toBe__();
    });

    it ("DOES NOT converts number to boolean", function() {
      expect(false === 0).toBe__();
    });

    it ("DOES NOT converts string AND number to boolean", function() {
      expect(0 === '').toBe__();
    });

    it ("compare content of strings", function() {
      let o1 = "test";
      let o2 = 'test';
      expect(o1 === o2).toBe__();
    });

    it ("DOES NOT compare content of objects", function() {
      let o_1 = {
        a: 1
      };
      let o_2 = {
        a: 1
      };
      expect(o_1 === o_2).toBe__();
    });
  });

  describe("!!", function() {
    it ("convert object to boolean", function() {
      expect(typeof(!!{})).toEqual(__);       // typeof returns a string in all lowercase
    });

    it ("convert string to boolean", function() {
      expect(typeof(!!"test")).toEqual(__);   // typeof returns a string in all lowercase
    });
  });

});
