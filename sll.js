class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add a new node to the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Method to insert a new node at a specific position
    insertAt(data, position) {
        if (position === 0) {
            const newNode = new Node(data);
            newNode.next = this.head;
            this.head = newNode;
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
        current.next = newNode;
    }

    // Method to remove a node from a specific position
    removeAt(position) {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        if (position === 0) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let count = 0;
        let previous = null;
        while (current && count < position) {
            previous = current;
            current = current.next;
            count++;
        }
        if (!current) {
            console.log("Position out of bounds");
            return;
        }
        previous.next = current.next;
    }

    // Method to display the list
    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);

console.log("Original linked list:");
linkedList.display();

linkedList.insertAt(5, 2);
console.log("\nLinked list after inserting 5 at position 2:");
linkedList.display();

linkedList.removeAt(3);
console.log("\nLinked list after removing node at position 3:");
linkedList.display();
