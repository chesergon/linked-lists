class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add a new node to the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head; // Pointing back to itself for circularity
            return;
        }
        let current = this.head;
        while (current.next !== this.head) {
            current = current.next;
        }
        current.next = newNode;
        newNode.next = this.head; // Pointing back to the head for circularity
    }

    // Method to display the list
    display() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        let current = this.head;
        do {
            console.log(current.data);
            current = current.next;
        } while (current !== this.head);
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
        current.next = newNode;
    }

    // Method to remove a node from a specific position
    removeAt(position) {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        if (position === 0) {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = this.head.next;
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
}

// Example usage:
const circularLinkedList = new CircularLinkedList();
circularLinkedList.append(1);
circularLinkedList.append(2);
circularLinkedList.append(3);

console.log("Original circular linked list:");
circularLinkedList.display();

circularLinkedList.insertAt(4, 1);
console.log("\nCircular linked list after inserting 4 at position 1:");
circularLinkedList.display();

circularLinkedList.removeAt(2);
console.log("\nCircular linked list after removing node at position 2:");
circularLinkedList.display();
