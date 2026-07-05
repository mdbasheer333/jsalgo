# Singly Linked List

A singly linked list is a linear data structure made of nodes. Each node stores two things:

```text
data | next
```

- `data` holds the value.
- `next` stores the reference to the next node.
- The first node is called `head`.
- The last node points to `null`.

Example:

```text
head
 |
 v
10 -> 20 -> 30 -> null
```

Unlike an array, a linked list does not store elements in continuous memory. Each node points to the next node, so insertion and deletion can be efficient once the correct position is found.

## Implementation Structure

This repository implements a singly linked list in:

```text
linkedlist/singlelinkedlist.js
```

The implementation has two main classes:

```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
```

Each `Node` contains the value and a pointer to the next node.

```js
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}
```

The `LinkedList` stores:

- `head`: reference to the first node
- `size`: number of nodes in the list

## Core Idea

Most linked list operations are based on pointer movement.

Example traversal:

```js
let current = this.head;

while (current !== null) {
    console.log(current.data);
    current = current.next;
}
```

The pointer starts at `head`, visits each node, and stops at `null`.

## Operations

### `isEmpty()`

Checks whether the list has no nodes.

```js
isEmpty() {
    return this.head == null;
}
```

Complexity:

```text
Time: O(1)
Space: O(1)
```

### `append(data)`

Adds a new node at the end of the list.

Before:

```text
10 -> 20 -> null
```

After `append(30)`:

```text
10 -> 20 -> 30 -> null
```

The method traverses until it finds the last node, then connects the new node.

Complexity:

```text
Time: O(n)
Space: O(1)
```

### `add(data)`

Adds a new node at the front of the list.

Before:

```text
20 -> 30 -> null
```

After `add(10)`:

```text
10 -> 20 -> 30 -> null
```

The new node points to the old head, then `head` moves to the new node.

Complexity:

```text
Time: O(1)
Space: O(1)
```

### `addAt(data, index)`

Adds a new node at a specific index.

Cases handled:

- `index == 0`: add at front
- `index == size`: append at end
- `0 < index < size`: insert in the middle
- invalid index: throw error

Example:

```text
10 -> 20 -> 40 -> null
```

After `addAt(30, 2)`:

```text
10 -> 20 -> 30 -> 40 -> null
```

Complexity:

```text
Time: O(n)
Space: O(1)
```

### `addAfter(ele, data)`

Adds a new node after the first matching element.

Example:

```text
10 -> 20 -> 40 -> null
```

After `addAfter(20, 30)`:

```text
10 -> 20 -> 30 -> 40 -> null
```

This method first finds the position of `ele`, then calls `addAt`.

Complexity:

```text
Time: O(n)
Space: O(1)
```

### `addAtGivenPosFromEnd(pos, data)`

Adds a node at a position counted from the end.

For a list:

```text
10 -> 20 -> 30 -> 40 -> null
```

Position from end:

```text
40 is position 1
30 is position 2
20 is position 3
10 is position 4
```

This method uses two pointers:

- `adv`: advanced pointer
- `slow`: slower pointer

The advanced pointer moves ahead first. Then both pointers move together until `adv` reaches the end. At that point, `slow` is near the insertion location.

Complexity:

```text
Time: O(n)
Space: O(1)
```

### `removeAtGivenPosFromEnd(pos)`

Removes a node from a position counted from the end.

Example:

```text
10 -> 20 -> 30 -> 40 -> null
```

After `removeAtGivenPosFromEnd(2)`:

```text
10 -> 20 -> 40 -> null
```

This also uses the two-pointer technique.

Complexity:

```text
Time: O(n)
Space: O(1)
```

### `removeRear()`

Removes the last node.

Before:

```text
10 -> 20 -> 30 -> null
```

After:

```text
10 -> 20 -> null
```

The method stops at the second-last node and sets its `next` to `null`.

Complexity:

```text
Time: O(n)
Space: O(1)
```

### `removeFront()`

Removes the first node.

Before:

```text
10 -> 20 -> 30 -> null
```

After:

```text
20 -> 30 -> null
```

The head simply moves to `head.next`.

Complexity:

```text
Time: O(1)
Space: O(1)
```

### `removeAt(index)`

Removes a node at a specific index.

Cases handled:

- remove first node
- remove last node
- remove middle node
- invalid index

Example:

```text
10 -> 20 -> 30 -> 40 -> null
```

After `removeAt(2)`:

```text
10 -> 20 -> 40 -> null
```

Complexity:

```text
Time: O(n)
Space: O(1)
```

### `remove(val)`

Removes the first node that matches the given value.

Example:

```text
10 -> 20 -> 30 -> 20 -> null
```

After `remove(20)`:

```text
10 -> 30 -> 20 -> null
```

This method finds the first matching value, then removes it by index.

Complexity:

```text
Time: O(n)
Space: O(1)
```

### `print()`

Prints all values in the list from head to tail.

Example output:

```text
10
20
30
```

Complexity:

```text
Time: O(n)
Space: O(1)
```

### `find(val)`

Returns the index of the first matching value.

Example:

```text
10 -> 20 -> 30 -> null
```

`find(20)` returns:

```text
1
```

If the value is not found, it returns `-1`.

Complexity:

```text
Time: O(n)
Space: O(1)
```

### `get(index)`

Returns the value at a specific index.

Example:

```text
10 -> 20 -> 30 -> null
```

`get(2)` returns:

```text
30
```

Complexity:

```text
Time: O(n)
Space: O(1)
```

### `length()`

Returns the current size of the list.

Because the implementation maintains a `size` variable, this operation is constant time.

Complexity:

```text
Time: O(1)
Space: O(1)
```

### `middleNode()`

Returns the middle node value.

This method uses the slow pointer and fast pointer technique.

- Slow pointer moves one step.
- Fast pointer moves two steps.
- When fast pointer reaches the end, slow pointer is at the middle.

Example:

```text
10 -> 20 -> 30 -> 40 -> 50 -> null
```

Middle:

```text
30
```

For an even length list, this implementation returns the second middle value.

Complexity:

```text
Time: O(n)
Space: O(1)
```

### `reverse()`

Reverses the linked list in place.

Before:

```text
10 -> 20 -> 30 -> null
```

After:

```text
30 -> 20 -> 10 -> null
```

The method uses three pointers:

- `prev`
- `current`
- `next`

At every step, the `next` pointer of the current node is reversed.

Complexity:

```text
Time: O(n)
Space: O(1)
```

### `reverseTraverse()` and `rt(node)`

Prints the linked list in reverse order using recursion.

For:

```text
10 -> 20 -> 30 -> null
```

Output:

```text
30
20
10
```

This does not reverse the actual list. It only prints in reverse order.

Complexity:

```text
Time: O(n)
Space: O(n)
```

Space is `O(n)` because recursive calls use the call stack.

### `deleteAllOccurrencesOf(data)`

Deletes every node that matches the given value.

Example:

```text
10 -> 20 -> 20 -> 30 -> 20 -> null
```

After `deleteAllOccurrencesOf(20)`:

```text
10 -> 30 -> null
```

The method handles matching nodes at the head first, then checks the rest of the list.

Complexity:

```text
Time: O(n)
Space: O(1)
```

### `removeDupsFromSLL()`

Removes duplicates from a sorted singly linked list.

Example:

```text
10 -> 20 -> 20 -> 30 -> 30 -> null
```

After:

```text
10 -> 20 -> 30 -> null
```

Because the list is sorted, duplicate values appear next to each other. The method compares the current node with the next node and removes the next node when both values are equal.

Complexity:

```text
Time: O(n)
Space: O(1)
```

### `removeDupsFromNoSortSLL()`

Removes duplicates from an unsorted singly linked list.

Example:

```text
10 -> 30 -> 20 -> 10 -> 30 -> null
```

After:

```text
10 -> 30 -> 20 -> null
```

This method uses a `Set` to remember values that have already been seen.

Complexity:

```text
Time: O(n)
Space: O(n)
```

### `sortedInsert(data)`

Inserts a value into an already sorted linked list while keeping the list sorted.

Example:

```text
10 -> 20 -> 40 -> null
```

After `sortedInsert(30)`:

```text
10 -> 20 -> 30 -> 40 -> null
```

Cases handled:

- empty list
- insert before head
- insert in the middle
- insert at the end
- insert duplicate values

The implementation uses stable duplicate order. That means if a duplicate value is inserted, the new duplicate is placed after existing duplicate values.

Example:

```text
insert 20A
insert 20B
insert 20C
```

Stable order:

```text
20A -> 20B -> 20C -> null
```

Complexity:

```text
Time: O(n)
Space: O(1)
```

## Method Walkthroughs

This section shows what happens from start to end for each method. Indexes are zero-based.

### `isEmpty()`

Start:

```text
head = null
```

Steps:

```text
1. Check whether head is null.
2. Since head is null, return true.
```

Another example:

```text
head
 |
 v
10 -> null
```

Steps:

```text
1. Check whether head is null.
2. Since head points to node 10, return false.
```

### `append(data)`

Example: `append(40)`

Start:

```text
10 -> 20 -> 30 -> null
```

Steps:

```text
1. Create new node:

   40 -> null

2. List is not empty, so start from head.

   current = 10
```

Loop:

```text
current = 10, current.next = 20, move current to 20
current = 20, current.next = 30, move current to 30
current = 30, current.next = null, stop loop
```

Connect the new node:

```text
current.next = node
```

End:

```text
10 -> 20 -> 30 -> 40 -> null
```

### `add(data)`

Example: `add(5)`

Start:

```text
10 -> 20 -> 30 -> null
```

Steps:

```text
1. Create new node:

   5 -> null

2. Point new node to current head:

   5 -> 10 -> 20 -> 30 -> null

3. Move head to new node.
```

End:

```text
5 -> 10 -> 20 -> 30 -> null
```

There is no loop because insertion at the front does not need traversal.

### `addAt(data, index)`

Example: `addAt(25, 2)`

Start:

```text
index: 0    1    2
       10 -> 20 -> 30 -> null
```

Goal:

```text
10 -> 20 -> 25 -> 30 -> null
```

Steps:

```text
1. index is not 0, so do not call add().
2. index is not size, so do not call append().
3. Create new node:

   25 -> null

4. Start from head:

   current = 10
   pos = 0
```

Loop condition:

```text
while (pos != index - 1)
```

Here:

```text
index - 1 = 1
```

Loop:

```text
pos = 0, current = 10, pos != 1, move current to 20, pos becomes 1
pos = 1, current = 20, pos == 1, stop loop
```

Now `current` is the node before the insert position.

Reconnect:

```text
node.next = current.next
25.next = 30

current.next = node
20.next = 25
```

End:

```text
10 -> 20 -> 25 -> 30 -> null
```

### `addAfter(ele, data)`

Example: `addAfter(20, 25)`

Start:

```text
10 -> 20 -> 30 -> null
```

Steps:

```text
1. Call find(20).
2. find(20) returns index 1.
3. Call addAt(25, 2).
4. addAt inserts 25 after index 1.
```

End:

```text
10 -> 20 -> 25 -> 30 -> null
```

The loop work happens inside `find()` and then inside `addAt()`.

### `addAtGivenPosFromEnd(pos, data)`

Example: `addAtGivenPosFromEnd(2, 25)`

Start:

```text
10 -> 20 -> 30 -> 40 -> null
```

Position from end:

```text
40 is position 1
30 is position 2
20 is position 3
10 is position 4
```

The method inserts after the node found by the two-pointer position logic.

Steps:

```text
1. pos is valid.
2. List is not empty.
3. pos is not greater than size + 1.
4. pos is not size + 1, so use two pointers.

adv = 10
slow = 10
ind = 0
```

First loop moves `adv` ahead by `pos` nodes:

```text
ind = 0, adv = 10, move adv to 20, ind becomes 1
ind = 1, adv = 20, move adv to 30, ind becomes 2
ind = 2, stop because ind is no longer less than pos
```

Now:

```text
adv = 30
slow = 10
```

Second loop moves both pointers until `adv` reaches `null`:

```text
adv = 30, slow = 10, move adv to 40, move slow to 20
adv = 40, slow = 20, move adv to null, move slow to 30
adv = null, stop loop
```

Create and connect the new node:

```text
node = 25
node.next = slow.next
25.next = 40

slow.next = node
30.next = 25
```

End:

```text
10 -> 20 -> 30 -> 25 -> 40 -> null
```

### `removeAtGivenPosFromEnd(pos)`

Example: `removeAtGivenPosFromEnd(2)`

Start:

```text
10 -> 20 -> 30 -> 40 -> null
```

Position from end:

```text
40 is position 1
30 is position 2
20 is position 3
10 is position 4
```

Goal:

```text
10 -> 20 -> 40 -> null
```

Steps:

```text
1. pos is valid.
2. List is not empty.
3. pos is not greater than size.
4. pos is not equal to size, so use two pointers.

adv = 10
slow = 10
ind = 0
```

First loop moves `adv` ahead:

```text
ind = 0, adv = 10, adv.next = 20, move adv to 20, ind becomes 1
ind = 1, adv = 20, adv.next = 30, move adv to 30, ind becomes 2
ind = 2, stop because ind is no longer less than pos
```

Second loop moves both pointers until `adv.next` reaches `null`:

```text
adv = 30, slow = 10, adv.next = 40, move adv to 40, move slow to 20
adv = 40, slow = 20, adv.next = null, stop loop
```

Now `slow.next` is the node to remove:

```text
slow = 20
slow.next = 30
```

Bypass the node:

```text
slow.next = slow.next.next
20.next = 40
```

End:

```text
10 -> 20 -> 40 -> null
```

### `removeRear()`

Example: `removeRear()`

Start:

```text
10 -> 20 -> 30 -> null
```

Steps:

```text
1. List is not empty.
2. List has more than one node.
3. Start from head:

   current = 10
```

Loop condition:

```text
while (current.next != null && current.next.next != null)
```

Loop:

```text
current = 10, current.next = 20, current.next.next = 30, move current to 20
current = 20, current.next = 30, current.next.next = null, stop loop
```

Now `current` is the second-last node.

Remove last node:

```text
current.next = null
20.next = null
```

End:

```text
10 -> 20 -> null
```

### `removeFront()`

Example: `removeFront()`

Start:

```text
10 -> 20 -> 30 -> null
```

Steps:

```text
1. Check that head is not null.
2. Move head to head.next.
3. Decrease size.
```

End:

```text
20 -> 30 -> null
```

There is no loop because only the head pointer changes.

### `reverseTraverse()` and `rt(node)`

Example: `reverseTraverse()`

Start:

```text
10 -> 20 -> 30 -> null
```

`reverseTraverse()` calls:

```text
rt(head)
```

Recursive calls:

```text
rt(10)
  rt(20)
    rt(30)
      rt(null)
```

When `node === null`, recursion returns. Then each paused call prints after its recursive call finishes.

Return and print order:

```text
rt(null) returns
print 30
print 20
print 10
```

Output:

```text
30
20
10
```

End:

```text
10 -> 20 -> 30 -> null
```

The list is not modified.

### `removeAt(index)`

Example: `removeAt(2)`

Start:

```text
index: 0    1    2    3
       10 -> 20 -> 30 -> 40 -> null
```

Goal:

```text
10 -> 20 -> 40 -> null
```

Steps:

```text
1. index is valid.
2. index is not 0, so do not call removeFront().
3. index is not size - 1, so do not call removeRear().
4. Start from head:

   current = 10
   pos = 0
```

Loop condition:

```text
while (pos != index - 1)
```

Here:

```text
index - 1 = 1
```

Loop:

```text
pos = 0, current = 10, pos != 1, move current to 20, pos becomes 1
pos = 1, current = 20, pos == 1, stop loop
```

Now `current.next` is the node to remove:

```text
current = 20
current.next = 30
```

Bypass the node:

```text
current.next = current.next.next
20.next = 40
```

End:

```text
10 -> 20 -> 40 -> null
```

### `remove(val)`

Example: `remove(30)`

Start:

```text
10 -> 20 -> 30 -> 40 -> null
```

Steps:

```text
1. Check list is not empty.
2. Call find(30).
3. find(30) returns index 2.
4. Call removeAt(2).
5. removeAt removes the node at index 2.
```

End:

```text
10 -> 20 -> 40 -> null
```

The loop work happens inside `find()` and `removeAt()`.

### `print()`

Example: `print()`

Start:

```text
10 -> 20 -> 30 -> null
```

Steps:

```text
1. List is not empty.
2. Start from head:

   current = 10
```

Loop:

```text
current = 10, print 10, move current to 20
current = 20, print 20, move current to 30
current = 30, print 30, move current to null
current = null, stop loop
```

Output:

```text
10
20
30
```

The list is not modified.

### `find(val)`

Example: `find(30)`

Start:

```text
index: 0    1    2    3
       10 -> 20 -> 30 -> 40 -> null
```

Steps:

```text
current = 10
pos = 0
```

Loop:

```text
pos = 0, current.data = 10, not 30, move current to 20, pos becomes 1
pos = 1, current.data = 20, not 30, move current to 30, pos becomes 2
pos = 2, current.data = 30, match found, return 2
```

Result:

```text
2
```

If the loop reaches `null`, the value was not found and the method returns `-1`.

### `get(index)`

Example: `get(2)`

Start:

```text
index: 0    1    2
       10 -> 20 -> 30 -> null
```

Steps:

```text
1. Check list is not empty.
2. Check index is not negative.
3. Check index is less than size.
4. Start from head:

   current = 10
   pos = 0
```

Loop:

```text
pos = 0, current = 10, pos != 2, move current to 20, pos becomes 1
pos = 1, current = 20, pos != 2, move current to 30, pos becomes 2
pos = 2, current = 30, pos == 2, stop loop
```

Return:

```text
30
```

### `length()`

Example: `length()`

Start:

```text
10 -> 20 -> 30 -> null
size = 3
```

Steps:

```text
1. Return this.size.
```

Result:

```text
3
```

There is no loop because `size` is updated during insert and delete operations.

### `middleNode()`

Example: `middleNode()`

Start:

```text
10 -> 20 -> 30 -> 40 -> 50 -> null
```

Steps:

```text
sp = 10
fp = 10
```

Loop condition:

```text
while (fp != null && fp.next != null)
```

Loop:

```text
sp = 10, fp = 10, move sp to 20, move fp to 30
sp = 20, fp = 30, move sp to 30, move fp to 50
fp = 50, fp.next = null, stop loop
```

Return:

```text
30
```

For an even-length list, this implementation returns the second middle value.

### `reverse()`

Example: `reverse()`

Start:

```text
10 -> 20 -> 30 -> null
```

Initial pointers:

```text
prev = null
current = 10
```

Loop:

```text
Iteration 1:
next = 20
current.next = prev
10 -> null
prev = 10
current = 20

Remaining list still reachable through current:
20 -> 30 -> null

Iteration 2:
next = 30
current.next = prev
20 -> 10 -> null
prev = 20
current = 30

Iteration 3:
next = null
current.next = prev
30 -> 20 -> 10 -> null
prev = 30
current = null
```

Loop stops because `current` is `null`.

Move head:

```text
head = prev
```

End:

```text
30 -> 20 -> 10 -> null
```

### `deleteAllOccurrencesOf(data)`

Example: `deleteAllOccurrencesOf(20)`

Start:

```text
20 -> 20 -> 10 -> 20 -> 30 -> 20 -> null
```

First loop removes matching nodes from the head:

```text
head = 20, match, move head to next
20 -> 10 -> 20 -> 30 -> 20 -> null

head = 20, match, move head to next
10 -> 20 -> 30 -> 20 -> null

head = 10, not match, stop first loop
```

Second loop checks `current.next`:

```text
current = 10
current.next = 20, match, bypass 20
10 -> 30 -> 20 -> null

current is still 10
current.next = 30, not match, move current to 30

current = 30
current.next = 20, match, bypass 20
10 -> 30 -> null

current = 30
current.next = null, stop loop
```

End:

```text
10 -> 30 -> null
```

### `removeDupsFromSLL()`

Example: `removeDupsFromSLL()`

This method expects a sorted list.

Start:

```text
10 -> 20 -> 20 -> 30 -> 30 -> 30 -> null
```

Initial pointers:

```text
current = 10
next = 20
```

Loop:

```text
current = 10, next = 20, values different, move current to 20
next = current.next = 20

current = 20, next = 20, values same, bypass next
10 -> 20 -> 30 -> 30 -> 30 -> null
next = current.next = 30

current = 20, next = 30, values different, move current to 30
next = current.next = 30

current = 30, next = 30, values same, bypass next
10 -> 20 -> 30 -> 30 -> null
next = current.next = 30

current = 30, next = 30, values same, bypass next
10 -> 20 -> 30 -> null
next = current.next = null
```

End:

```text
10 -> 20 -> 30 -> null
```

### `removeDupsFromNoSortSLL()`

Example: `removeDupsFromNoSortSLL()`

Start:

```text
10 -> 30 -> 20 -> 10 -> 30 -> null
```

Initial values:

```text
prev = null
current = 10
hasValue = {}
```

Loop:

```text
current = 10, not in Set, add 10, prev = 10, move current to 30
Set = {10}

current = 30, not in Set, add 30, prev = 30, move current to 20
Set = {10, 30}

current = 20, not in Set, add 20, prev = 20, move current to 10
Set = {10, 30, 20}

current = 10, already in Set, bypass current
prev.next = current.next
20.next = 30
List becomes:
10 -> 30 -> 20 -> 30 -> null
move current to 30

current = 30, already in Set, bypass current
prev.next = current.next
20.next = null
List becomes:
10 -> 30 -> 20 -> null
move current to null
```

End:

```text
10 -> 30 -> 20 -> null
```

### `sortedInsert(data)`

Example: `sortedInsert(30)`

Start:

```text
10 -> 20 -> 40 -> 50 -> null
```

Steps:

```text
1. Create new node:

   30 -> null

2. List is not empty.
3. data is not less than head data.
4. Use prev and curr to find the insert location.

prev = null
curr = 10
```

Loop condition:

```text
while (curr != null && curr.data <= data)
```

Loop:

```text
curr = 10, 10 <= 30, prev = 10, curr = 20
curr = 20, 20 <= 30, prev = 20, curr = 40
curr = 40, 40 <= 30 is false, stop loop
```

Now:

```text
prev = 20
curr = 40
```

Connect the new node:

```text
node.next = curr
30.next = 40

prev.next = node
20.next = 30
```

End:

```text
10 -> 20 -> 30 -> 40 -> 50 -> null
```

Duplicate example:

```text
Start:
10 -> 20A -> 20B -> 30 -> null

Call:
sortedInsert(20C)
```

Loop:

```text
curr = 10, 10 <= 20, prev = 10, curr = 20A
curr = 20A, 20 <= 20, prev = 20A, curr = 20B
curr = 20B, 20 <= 20, prev = 20B, curr = 30
curr = 30, 30 <= 20 is false, stop loop
```

End:

```text
10 -> 20A -> 20B -> 20C -> 30 -> null
```

This keeps stable duplicate order.

## Complexity Summary

| Operation | Time | Space |
| --- | --- | --- |
| `isEmpty()` | O(1) | O(1) |
| `add(data)` | O(1) | O(1) |
| `append(data)` | O(n) | O(1) |
| `addAt(data, index)` | O(n) | O(1) |
| `addAfter(ele, data)` | O(n) | O(1) |
| `addAtGivenPosFromEnd(pos, data)` | O(n) | O(1) |
| `removeFront()` | O(1) | O(1) |
| `removeRear()` | O(n) | O(1) |
| `removeAt(index)` | O(n) | O(1) |
| `remove(val)` | O(n) | O(1) |
| `removeAtGivenPosFromEnd(pos)` | O(n) | O(1) |
| `find(val)` | O(n) | O(1) |
| `get(index)` | O(n) | O(1) |
| `length()` | O(1) | O(1) |
| `middleNode()` | O(n) | O(1) |
| `reverse()` | O(n) | O(1) |
| `reverseTraverse()` | O(n) | O(n) |
| `deleteAllOccurrencesOf(data)` | O(n) | O(1) |
| `removeDupsFromSLL()` | O(n) | O(1) |
| `removeDupsFromNoSortSLL()` | O(n) | O(n) |
| `sortedInsert(data)` | O(n) | O(1) |

## Common Linked List Patterns Covered

### 1. Basic traversal

Used in:

- `append`
- `print`
- `find`
- `get`

Pattern:

```js
let current = this.head;

while (current !== null) {
    current = current.next;
}
```

### 2. Previous and current pointer

Used in:

- `addAt`
- `removeAt`
- `deleteAllOccurrencesOf`
- `sortedInsert`

This is useful when the current node needs to be connected or removed.

### 3. Slow and fast pointer

Used in:

- `middleNode`
- `addAtGivenPosFromEnd`
- `removeAtGivenPosFromEnd`

This pattern helps solve problems in one pass.

### 4. In-place pointer reversal

Used in:

- `reverse`

This is one of the most important linked list interview patterns.

### 5. Hash set for duplicate detection

Used in:

- `removeDupsFromNoSortSLL`

This trades extra memory for faster duplicate lookup.

## Edge Cases To Remember

When solving linked list problems, always check:

- list is empty
- list has one node
- operation affects the head
- operation affects the tail
- index or position is invalid
- duplicate values exist
- all nodes match the delete value

## LeetCode Level

This implementation covers several common LeetCode Easy and Medium linked list ideas:

- insert at head or tail
- delete a node by index or value
- find middle of linked list
- reverse a linked list
- remove duplicates
- remove from end using two pointers
- insert into a sorted list

The key skill is not memorizing the code. The key skill is understanding how `next` links are changed safely without losing access to the rest of the list.
