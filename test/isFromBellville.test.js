

describe('isFromBellville', function() {
    it('should return true for CY 123', function() {
        assert.equal(isFromBellville('CY 123'), true);
    });

    it('should return false for CJ 123', function() {
        assert.equal(isFromBellville('CJ 123'), false);
    });
});
