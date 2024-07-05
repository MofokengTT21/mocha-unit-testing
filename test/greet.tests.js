describe('Test greet function', function() {
    // Define test data array
    var testData = [
      { name: 'Tshepo', expected: 'Hello, Tshepo' },
    ];
  
    // Iterate over test data and create a test case for each entry
    testData.forEach(function(data) {
      it(`should greet ${data.name}`, function() {
        assert.equal(greet(data.name), data.expected);
      });
    });
  });
  