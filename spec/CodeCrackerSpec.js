describe('code cracker', function() {
    var crypt;

    beforeEach(function () {
        crypt = require('../src/CodeCracker.js');
    });

    describe('decrypt', function() {
        it('should return cat when encrypted word is cat the key is abcdefghigklmnopqrstuvwxyz',function() {
            expect(crypt.decrypt("cat", "abcdefghigklmnopqrstuvwxyz")).toBe("cat");
        });
    });

});