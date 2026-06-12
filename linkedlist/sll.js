
class Node {
    constructor(data) {
        this.data = data;
        this.Node = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(data) {
        const node = new Node(data);
        if (this.head == null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    add(data) {
        const node = new Node(data);
        if (this.head == null) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    addAt(data, index = 0) {
        if (index == 0) {
            this.add(data);
        } else if (index == this.size) {
            this.append(data);
        } else if (index > 0 && index < this.size) {
            const node = new Node(data);
            let current = this.head;
            let pos = 0;
            while (pos != index - 1) {
                current = current.next;
                pos++;
            }
            node.next = current.next;
            current.next = node;
        } else {
            throw Error(`index ${index} is greater than the size ${this.size} of linked list`);
        }
    }

    removeRear() {
        if (this.head == null || this.head.next == null) {
            this.head = null;
            this.size = 0;
        }
        else {
            let current = this.head;
            while (current.next != null && current.next.next != null) {
                current = current.next;
            }
            current.next = null;
            this.size--;
        }
    }

    removeFront() {
        if (this.head != null) {
            this.head = this.head.next;
            this.size--;
        }
    }

    removeAt(index) {
        if (index == 0) {
            this.removeFront();
        } else if (index == this.size - 1) {
            this.removeRear();
        } else if (index > 0 && index < this.size) {
            let current = this.head;
            let pos = 0;
            while (pos != index - 1) {
                current = current.next;
                pos++;
            }
            current.next = current.next.next;
        } else {
            throw Error(`index ${index} is greater than the size ${this.size} of linked list`);
        }
    }

    print() {
        let current = this.head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }

    find(val) {
        if (this.head == null) {
            throw Error(`list is empty`);
        }
        let current = this.head;
        let pos = 0;
        while (current != null) {
            if (current.data == val) {
                return pos;
            }
            current = current.next;
            pos++;
        }
        return -1;
    }

    get(index) {
        if (this.head == null) {
            throw Error(`list is empty`);
        } else if (index < 0) {
            throw Error(`index should be > 0`);
        } else if (index >= this.size) {
            throw Error(`index should be < size`);
        } else {
            let current = this.head;
            let pos = 0;
            while (pos != index) {
                current = current.next;
                pos++;
            }
            return current.data;
        }

    }

    length() {
        return this.size;
    }

}

let linkedList = new LinkedList();
linkedList.append(20);
linkedList.append(10);
linkedList.append(40);
linkedList.append(30);
linkedList.append(50);

linkedList.print();
console.log('-----------');

//console.log(linkedList.length());

// linkedList.add(100);
// linkedList.add(200);
// linkedList.print();
// console.log('-----------');

//linkedList.addAt(100,0);
// linkedList.addAt(100,6);
// linkedList.print();
// console.log('-----------');

// linkedList.removeFront();
// linkedList.removeFront();
// linkedList.removeFront();
// linkedList.removeFront();
//linkedList.removeFront();
// linkedList.removeRear();
// linkedList.removeRear();
// linkedList.removeRear();
// linkedList.removeRear();
//linkedList.print();
// console.log('-----------');

//linkedList.removeAt(5);
//linkedList.print();
//console.log(linkedList.find(8));
// console.log(linkedList.get(0));
// console.log(linkedList.get(1));
// console.log(linkedList.get(2));
// console.log(linkedList.get(3));
// console.log(linkedList.get(4));
// console.log('-----------');