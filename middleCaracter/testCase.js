describe("GetMiddle", function() {
    it("Tests", function() {
      Test.assertEquals(getMiddle("test"),"es");
      Test.assertEquals(getMiddle("testing"),"t");
      Test.assertEquals(getMiddle("middle"),"dd");
      Test.assertEquals(getMiddle("A"),"A");
    });
  });
  
  describe("50 Random tests",function() {
  //----------------
  function randint(a, b) { 
      //return Math.floor(Math.random() * (b - a + 1) + a); 
      return Math.floor(Math.random() * (b - a) + a); //b shouldn't be equal to 52
  }
  function GetMiddleT(s)
  {
      var middle = Math.floor(s.length/2);
      if (s.length % 2 == 0)
          return s[middle-1] + s[middle];
      else
          return s[middle];
  }
  //----------------
      for (var i = 0; i < 50; i++) {
        var alph = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        var rando = randint(1,1000);
        var randStr = "";
        for (var j = 0; j<rando; j++)
        {
          var x = randint(0, alph.length);
          randStr += alph[x]; 
        }
        it("Random Testing", function() {
            Test.assertEquals(getMiddle(randStr), GetMiddleT(randStr));
        }
      )}
    })