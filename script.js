const ListNode = (value = null, nextNode = null) {
    return value, nextNode;
}

const LinkedList = () {
    let head = null;
    let size = 0;


    const append = (value) => {
        //adds a new node containing value to the end of the lis
        const newNode = (ListNode(value))
        
        if (head == null){
            newNode = head;
        } else {
            pointer = head;
            while (pointer.nextNode !== null){
                pointer = pointer.nextNode;
            } pointer.nextNode = newNode;
        }
        size++;

        //make a new node as constant (ListNode(value)
        //if the head is currently null, make this node the head
        //otherwise, let the pointer become the head and
        //if the pointer of the next node is NOT null, let the pointer become the pointer of the nextnode
        //make the pointer of the next node become the new node
        //increase the size value by one outside of any loops
    }

    const prepend = (value) => {
        //adds a new node containing value to the start of the list

        const newNode = (ListNode(value, head));
        head = newNode;
        size++;

        //make a new node as constant, passing in both the value and head arguments
        //make the head equal newnode
        //increment the size variable
    }

    const at = (index) => {
        // returns the node at the given index

        let indexCount = 0;
        let pointer = head;
        while (indexCount < index){
            pointer = pointer.nextNode
            indexCount++;
        }
        size++;

        //declare an indexCount variable
        //let the pointer = head
        //while the indexcount is less than the index argument passed in:
        //let the pointer equal pointer?.nextNode
        //increase the indexcount
        //increment size outside of the loop
    }

    const contains = (value) => {
        //returns true if the passed in value is in the list and otherwise returns false.

        let pointer = head;
        while (pointer !== null){
            if (pointer.value == value) return true;
            else{
                pointer = pointer.nextNode;
            }
            return false;
        }
        //make the pointer equal to the head
        //while the pointer isnt null:
        //if the value on the current pointer equals the value passed in, return true
        //otherwise, the pointer should be made to equal pointer.nextNode and continue loop
        //return false if loop is unsuccessful
    }   

    const find = (value) => {
        //returns the index of the node containing value, or null if not found.


        let indexCounter = 0;
        let pointer = head;
        while (pointer.value !== value){
            pointer = pointer.nextNode;
            indexCounter++;
        } return indexCounter;
        //declare an index counter variable
        //let the pointer = head
        //while the pointer isnt null:
        //if the value of the current node is equal to our value, return the indexcounter
        //continue the loop under this by making pointer = pointer nexnode
        //increment indexcounter
        //return indexcounter outside loop (example code returns -1, not sure why)
    }

    const size = () => {
        // returns the total number of nodes in the list

        let sizeCounter = 0;
        let pointer = head;
        while (pointer.nextNode !== null) {
            pointer = pointer.nextNode;
            sizeCounter++;
        } return sizeCounter;
        //declare counter 
        //let pointer = head
        //if pointer = null, return counter
        //let pointer = pointer.nextnode
        //add one to the counter
        //return counter outside loop
    }

    const head = () => {
        //returns the first node in the list

        let pointer = head;
        return pointer.value;
        //let the pointer equal the head
        //return the pointer value
    }

    const tail = () => {
        // returns the last node in the list

        //let the pointer equal the head
        //while the pointer of the next node is NOT null:
        //make the pointer equal the pointer of the next node
        //exit
        //return the pointer
    }

    const pop = () => {
        //removes the last element from the list

        //declare current pointer as head
        //declare nexxtpointer as the head of the next node
        //while the next pointer of the next note is NOT null:
        //make the current pointer the curr pointer of the next node
        //make the next pointer the next pointer of the next node
        //exit
        //declare a return node constant as the next pointer
        //make the next node from the current pointer null
        //reduce size by one
        //return the return node
    }

    const toString = () => {
        //represents your LinkedList objects as strings, so you can print them out and 
        //preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null

        //let the pointer equal the head
        //declare a new empty string
        //while the pointer is NOT null:
        //the string shoudl be += the $pointer value (leave a space between this and the next item)
        //make the pointer equal the pointer of the next node
        //exit
        //return '${string}null';
    }
    return{
        append,
        prepend,
        get size(){ return size; },
        get head(){ return head; },
        at,
        tail,
        pop,
        contains,
        find,
        toString,
    }
}