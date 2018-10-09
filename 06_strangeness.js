describe ("Strangeness", function() {

  it ("Infinity can be modified?", function() {
    __ = __;      // set Infinity to 1
    expect(Infinity).not.toEqual(1);
  });

  it ("NaN can be modified?", function() {
    __ = __;           // set NaN to 1
    expect(NaN).not.toEqual(1);
    expect(NaN).not.toEqual(NaN);
  });

  it ("undefined can be modified?", function() {
    __ = __;   // set undefined to 1
    expect(undefined).not.toEqual(1);
  });

  it ("null cannot be modified", function() {
    let fn = function() {
      __ = __;      // set null to 1 - this throw an exception
    };
    expect(fn).toThrow();
  });

});
