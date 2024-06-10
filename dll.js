class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Method to add a new node to the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    // Method to add a new node to the beginning of the list
    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    // Method to insert a new node at a specific position
    insertAt(data, position) {
        if (position === 0) {
            this.prepend(data);
            return;
        }
        let current = this.head;
        let count = 0;
        while (current && count < position - 1) {
            current = current.next;
            count++;
        }
        if (!current) {
            console.log("Position out of bounds");
            return;
        }
        const newNode = new Node(data);
        newNode.next = current.next;
        if (current.next) {
            current.next.prev = newNode;
        }
        current.next = newNode;
        newNode.prev = current;
    }

    // Method to remove a node from a specific position
    removeAt(position) {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        if (position === 0) {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
            return;
        }
        let current = this.head;
        let count = 0;
        while (current && count < position) {
            current = current.next;
            count++;
        }
        if (!current) {
            console.log("Position out of bounds");
            return;
        }
        current.prev.next = current.next;
        if (current.next) {
            current.next.prev = current.prev;
        } else {
            this.tail = current.prev;
        }
    }

    // Method to display the list in forward direction
    displayForward() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Method to display the list in reverse direction
    displayBackward() {
        let current = this.tail;
        while (current) {
            console.log(current.data);
            current = current.prev;
        }
    }
}

// Example usage:
const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.append(1);
doublyLinkedList.append(2);
doublyLinkedList.append(3);

console.log("Original doubly linked list (forward direction):");
doublyLinkedList.displayForward();

console.log("\nOriginal doubly linked list (reverse direction):");
doublyLinkedList.displayBackward();

doublyLinkedList.insertAt(4, 1);
console.log("\nDoubly linked list after inserting 4 at position 1 (forward direction):");
doublyLinkedList.displayForward();

console.log("\nDoubly linked list after inserting 4 at position 1 (reverse direction):");
doublyLinkedList.displayBackward();

doublyLinkedList.removeAt(2);
console.log("\nDoubly linked list after removing node at position 2 (forward direction):");
doublyLinkedList.displayForward();

console.log("\nDoubly linked list after removing node at position 2 (reverse direction):");
doublyLinkedList.displayBackward();
