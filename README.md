# Singly Linked Lists, Doubly Linked Lists, and Circular Linked Lists in JavaScript

## Introduction

In JavaScript, linked lists are a fundamental data structure used for storing collections of data in a sequential manner. There are different types of linked lists, each with its own unique characteristics and use cases. The three main types of linked lists are:

1. **Singly Linked Lists**
2. **Doubly Linked Lists**
3. **Circular Linked Lists**

This README provides an overview of each type and demonstrates their implementation in JavaScript.

## Overview

A linked list is made up of nodes, each containing a data element and a reference (or pointer) to the next node in the sequence. Each type of linked list differs in how these nodes are connected.

### 1. Singly Linked Lists

- **Description**: Singly linked lists consist of nodes where each node has a data element and a reference to the next node.
- **Traversal**: Traversal is possible only in one direction, from the head (the first node) to the end.
- **Termination**: The list is terminated by a null pointer.
- **Implementation**: Implemented using a class for the nodes, with each node having a `next` property.

### 2. Doubly Linked Lists

- **Description**: Doubly linked lists are similar to singly linked lists, but each node contains references to both the next node and the previous node.
- **Traversal**: Traversal is possible in both directions, from the head to the tail and vice versa.
- **Termination**: The list is terminated by null pointers at both ends.
- **Implementation**: Implemented using a class for the nodes, with each node having `prev` and `next` properties.

### 3. Circular Linked Lists

- **Description**: Circular linked lists are linked lists where the last node points back to the first node, forming a circular structure.
- **Traversal**: Traversal is possible from any node to any other node in the sequence.
- **Termination**: The list is circular, so there is no explicit termination.
- **Implementation**: Implemented using a class for the nodes, with each node having a `next` property pointing back to the head for circularity.

## Code Example

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        // For doubly linked list
        this.prev = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    // Methods for singly linked list (e.g., append, prepend, insertAt, removeAt, display)
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Methods for doubly linked list (e.g., append, prepend, insertAt, removeAt, displayForward, displayBackward)
}

class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    // Methods for circular linked list (e.g., append, insertAt, removeAt, display)
}
