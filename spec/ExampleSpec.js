describe('example', function(){
    var example;

    beforeEach(function(){
        example = require('../src/Example.js');
    });

    describe('addTwoNumbers', function() {
        it('should calculate 4 when 2 and 2 are passed in', function(){
            expect(example.add(2,2)).toBe(4);
        });
    });
});