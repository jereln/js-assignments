var should = require('chai').should();
var Node = require('../lib/node')
var DoublyLinked = require('../lib/doubly-linked')

describe("DoublyLinked", function() {
    it("should create a new list", function() {
        var list = new DoublyLinked();
        list.counter.should.equal(0);
    });

    it("should insert a new node", function() {
        var list = new DoublyLinked();
        list.insert(new Node("first"));
        list.head.val.should.equal("first");
        list.counter.should.equal(1);
    });

    it("should remove a node", function() {
        var list = new DoublyLinked();
        list.insert(new Node("first"));
        list.insert(new Node("second"));
        list.insert(new Node("third"));
        list.counter.should.equal(3);
        list.remove("third");
        list.counter.should.equal(2);
        list.head.val.should.equal("second");
    });

    it("should display a list of the values", function() {
        var list = new DoublyLinked();
        list.insert(new Node("first"));
        list.insert(new Node("second"));
        list.insert(new Node("third"));
        list.toString().should.equal('third, second, first, ');
    });

    it("should find a value in the list", function() {
        var list = new DoublyLinked();
        list.insert(new Node("first"));
        list.insert(new Node("second"));
        list.insert(new Node("third"));
        list.search("first").should.equal("first");
    });
});