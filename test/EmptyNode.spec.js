var EmptyNode = require('../js/tree/EmptyNode');
describe('EmptyNode tests', function () {

    it('isEmpty() for EmptyNode should return true', function () {
        var node = new EmptyNode();
        expect(node.isEmpty()).toEqual(true);
    });
});