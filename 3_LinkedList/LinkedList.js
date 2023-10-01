class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertNode(data) {
        this.head = new Node(data, this.head);
    }

    printData() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }

    }
}

function addLLData(LL1, LL2) {
    let start1 = LL1.head;
    let start2 = LL2.head;
    let num1 = "";
    let num2 = "";
    while (start1) {
        num1 = num1.concat(start1.data);
        start1 = start1.next;
    }
    num1 = num1.split("").reverse().join("");
    console.log(num1);

    while (start2) {
        num2 = num2.concat(start2.data);
        start2 = start2.next;
    }
    num2 = num2.split("").reverse().join("");
    console.log(num2);

    let sum = parseInt(num1) + parseInt(num2);
    console.log("Total = " + sum);

    let str = sum.toString();
    const llsum = new LinkedList();
    for (let i = 0; i < str.length; i++) {
        llsum.insertNode(str[i]);
    }
    return llsum;
}
const ll1 = new LinkedList();
ll1.insertNode(6);
ll1.insertNode(1);
ll1.insertNode(7)
ll1.printData();

const ll2 = new LinkedList();
ll2.insertNode(2);
ll2.insertNode(9);
ll2.insertNode(5);
ll2.printData();

console.log("Sum of the numbers is ", addLLData(ll1, ll2));