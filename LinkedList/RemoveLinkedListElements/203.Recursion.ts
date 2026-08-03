function removeElementsRecur(head: ListNode | null, val: number): ListNode | null{
    if(head === null)return null;

    head.next = removeElementsRecur(head.next,val)
    return head.val === val ? head.next : head;
}