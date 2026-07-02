
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.head == null;
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
            this.size++;
        } else {
            throw Error(`index ${index} is greater than the size ${this.size} of linked list`);
        }
    }

    addAfter(ele, data) {
        const pos = this.find(ele);
        if (pos < 0) {
            throw Error(`element ${ele} not found in list`);
        }
        this.addAt(data, pos + 1);
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

    reverseTraverse(){
        this.rt(this.head)
    }

    rt(node){
        if(node===null){
            return
        }
        this.rt(node.next);
        console.log(node.data);
    }   

    removeAt(index) {
        if (index < 0 || index >= this.size) {
            throw Error(`index ${index} is greater than the size ${this.size} of linked list`);
        } else if (index == 0) {
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
            this.size--;
        }
    }

    remove(val) {
        if (this.isEmpty()) {
            throw Error('List empty');
        }
        const pos = this.find(val);
        if (pos < 0) {
            throw Error(`value ${val} not found in list`);
        }
        this.removeAt(pos);
    }

    print() {
        if(this.isEmpty()){
            console.log(`list is empty`);            
        }
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

    middleNode() {
        if (this.isEmpty()) {
            throw Error(`list is empty`);
        }
        let sp = this.head;
        let fp = sp;
        while (fp != null && fp.next != null) {
            sp = sp.next;
            fp = fp.next.next;
        }
        return sp.data;
    }

    reverse() {
        if (this.isEmpty()) {
            throw Error(`list is empty`);
        }
        let prev = null;
        let current = this.head;
        while (current != null) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    deleteAllOccurrencesOf(data) {
        if (this.isEmpty()) {
            throw Error(`list is empty`);
        }
        while (this.head !== null && this.head.data === data) {
            this.head = this.head.next;
            this.size --;
        }
        let current = this.head;
        while(current!==null && current.next!==null){
            if(current.next.data == data){
                current.next = current.next.next;
            }else{
                current = current.next;
            }
        }
    }

}

let linkedList = new LinkedList();
linkedList.append(20);
linkedList.append(10);
linkedList.append(40);
linkedList.append(40);
linkedList.append(30);
linkedList.append(50);
linkedList.append(5);
linkedList.append(40);
linkedList.append(100);

linkedList.print();
console.log('-----------');

//linkedList.reverseTraverse();

//linkedList.deleteAllOccurrencesOf(40);
//linkedList.print();

//  linkedList.reverse();
//  linkedList.print();

//console.log(linkedList.middleNode());


//linkedList.addAfter(50,300);
//linkedList.print();

//linkedList.remove(200);
//linkedList.print();

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