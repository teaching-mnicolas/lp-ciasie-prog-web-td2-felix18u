describe ("For in", function() {

  it ("enumerate the property of an object", function() {
    let obj = {
      p1: 1,
      p2: 2
    };

    let a = "";
    __ {                // set a for in loop, enumerating all property of obj in let p
      a += p;
    };

    expect(a).toContain("p1");
    expect(a).toContain("p2");
  });

  it ("enumerate even the methods of an object", function() {
    let obj = {
      p1: 1,
      p2: function() { return 1; }
    };

    let a = "";
    __ {                // set a for in loop, enumerating all property of obj in let p
      a += p;
    };

    expect(a).toContain("p1");
    expect(a).toContain("p2");
  });


  it ("enumerate keys of an array", function() {
    let ar = [1, 2];

    let a = "";
    __ {                // set a for in loop, enumerating all property of ar in let p
      __;               // add the CONTENT of ar[p] to a
    };

    expect(a).toContain("1");
    expect(a).toContain("2");
  });

  it ("can be wrong if there is other properties", function() {
    let ar = [1, 2];
    ar.prop = 3;

    let a = "";
    __ {                // set a for in loop, enumerating all property of ar in let p
      __;               // add the CONTENT of ar[p] to a
    };

    expect(a).toContain("1");
    expect(a).toContain("2");
    expect(a).__;       // check that a contains also 3
  });

  it ("is better to use forEach for arrays", function() {
    let ar = [1, 2];
    ar.prop = 3;

    let a = "";
    ar.__(function(val) {    // call the forEach method on ar
      a += val;
    });

    expect(a).toContain("1");
    expect(a).toContain("2");
    expect(a).__;       // check that a DOES NOT contains also 3
  });


});
