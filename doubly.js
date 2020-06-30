
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length --;
        return poppedNode;
    }
    shift(){
        if(!this.head) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return this;
    }
    unshift(val){
        var newHead = new Node(val);
        if(!this.head){
            this.head = newHead;
            this.tail = newHead;
        } else {
            this.head.prev = newHead;
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= index.length) return null;
        if(index <= this.lenght/2){
            var count = 0;
            var counter = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            var count = 0;
            var counter = this.tail;
            while(count !== index){
                currnet = current.prev;
                count--;
        }
        return current;
    }
}