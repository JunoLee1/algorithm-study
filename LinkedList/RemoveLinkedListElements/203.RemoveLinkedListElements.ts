class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
    while(head !== null && head.val === val){
        head = head.next
    }

    let prev = head
    while( prev !== null && prev.next !== null){
        if (prev.next.val === val){
            prev.next =prev.next.next
        }
        else{
            prev = prev.next
        }
    }
    return head
};




