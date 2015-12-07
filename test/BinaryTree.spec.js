var BinaryTree = require('../js/tree/BinaryTree');
describe('BinaryTree tests', function () {

    it('hasNodes() should work properly', function () {
        var tree = new BinaryTree();
        expect(tree.hasNodes()).toEqual(false);

        tree.add(4);
        expect(tree.hasNodes()).toEqual(true);
    });


    it('add() should work properly', function () {
        var tree = new BinaryTree();

        tree.add(4);
        tree.add(-7);
        tree.add(12);
        tree.add(56);

        expect(tree.root.value).toEqual(4);
        expect(tree.root.getLeft().value).toEqual(-7);
        expect(tree.root.getRight().value).toEqual(12);
        expect(tree.root.getRight().getRight().value).toEqual(56);
    });

    it('remove() should work properly', function () {
        var tree = new BinaryTree();

        tree.add(4);
        tree.add(-7);
        tree.add(12);
        tree.add(56);
        tree.remove(-7);

        expect(tree.root.value).toEqual(4);
        expect(tree.root.getRight().value).toEqual(12);
        expect(tree.root.getRight().getRight().value).toEqual(56);
    });
});