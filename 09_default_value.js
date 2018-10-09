describe ("Default value", function() {

  it ("does not have default value", function() {
    let o = {
      prop: 1
    };
    let a = o.prop1;
    expect(a).toBe__();   // check that o.prop1 is undefined
  });

  it ("does have a default value", function() {
    let o = {
      prop: 1
    };
    let a = o.prop1 || "a_value";
    expect(a).not.toBeUndefined();
    expect(a).toEqual(__);
  });

  it ("does have a value", function() {
    let o = {
      prop: 1
    };
    let a = o.prop || "a_value";
    expect(a).not.toBeUndefined();
    expect(a).toEqual(__);
  });

});
