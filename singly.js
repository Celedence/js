// peice of data - val
// reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class singlyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            currnet = current.next;
        }
        this.tail. newTail;
        this.tail.next = null;
        this.length --;
        return current;
    }
}

var list = new singlyLinkedList()
list.push("Hello")








// var first = new Node("hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")