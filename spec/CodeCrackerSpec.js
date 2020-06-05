describe('code cracker', function() {
    var crypt;

    beforeEach(function () {
        crypt = require('../src/CodeCracker.js');
    });

    describe('decrypt', function() {
        it('should return cat when encrypted word is cat the key is abcdefghigklmnopqrstuvwxyz',function() {
            expect(crypt.decrypt("cat", "abcdefghigklmnopqrstuvwxyz")).toBe("cat");
        });
    
        it('should return sat when the encrypted word is spt and the key is pbcdefghigklmnoaqrstuvwxyz',function() {
            expect(crypt.decrypt("sat", "pbcdefghigklmnoaqrstuvwxyz")).toBe("sat");
        });

    });



});