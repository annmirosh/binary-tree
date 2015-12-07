var Node = require('../js/tree/Node'),
    EmptyNode = require('../js/tree/EmptyNode');
describe('Node tests', function () {

    it('isEmpty() for Node should return false', function () {
        var node = new Node();
        expect(node.isEmpty()).toEqual(false);
    });

    it('getChildrenCount() should work properly', function () {
        var node = new Node();
        expect(node.getChildrenCount()).toEqual(0);

        node.setLeft(new Node());
        expect(node.getChildrenCount()).toEqual(1);

        node.setRight(new Node());
        expect(node.getChildrenCount()).toEqual(2);
    });

    it('getLeft/setLeft() should work properly', function () {
        var node = new Node(5);
        node.setLeft(new Node(3));

        expect(node.getLeft().value).toEqual(3);
    });

    it('getRight/setRight() should work properly', function () {
        var node = new Node(5);
        node.setRight(new Node(10));

        expect(node.getRight().value).toEqual(10);
    });
});