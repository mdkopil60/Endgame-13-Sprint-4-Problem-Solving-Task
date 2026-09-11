var reverseList = function(head) {
  let previous = null;
  let current = head;

  while (current !== null) {
    const nextNode = current.next;

    current.next = previous;
    previous = current;
    current = nextNode;
  }

  return previous;
};
console.log(reverseList(1,2,3,4,5));

