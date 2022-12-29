/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  if (!l1 && !l2) return null
  const dummy = new ListNode()
  let curr = dummy

  let carry = 0
  while (l1 || l2 || carry) {
    let value = 0
    if (l1) {
      value += l1.val
      l1 = l1.next
    }

    if (l2) {
      value += l2.val
      l2 = l2.next
    }

    value += carry
    const node = new ListNode()
    node.val = value % 10
    curr.next = node
    carry = Math.floor(value / 10)
    curr = node
  }

  return dummy.next
}
