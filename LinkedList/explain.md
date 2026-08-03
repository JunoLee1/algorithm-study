*LinkedList*
**정의**
Linked List란 데이터를 담은 여러 노드들과 다음/이전 노드 위치를 가진 포인터가 연결된 선형 연결 자료


**구성**
노드, poniter, head, 꼬리
예시 
1 -> 2 -> 3 -> 4


**종류**
    1. 단방향 
    2. 양방향

**단방향 연결배열 삭제및 추가**
    1. head에 아무런 값이 없는데 1 노드 를 추가하려는 경우 
        if(head === null || tail === null){
            head = newNode
            tail = newNode
        }else{
            newNode.next = head
            head = newNode
        }


    2. 노드들 (1, 3) 중간에 추가 


        1 -> 3 -> 4

            2

        1 -> 3 -> 4
            ^
            2

        1  3 -> 4
        ^
        2

        1 -> 2 -> 3 -> 4

        if(crnt.next.val === 3){
            newNode.next = crnt.next
            crnt.next = newNode;
        }




    2. 삭제하려는 노드가 head인경우 
        if(head !== null && head.val ===target){
            head = head.next
        }

    3. 삭제하려는 노드가 head === tail인경우

        if(head !== null && head.val ===target){
            head = head.next

            if(head === null){
                tail = null
            }
        }

    3. 삭제하려는 노드가 중간에 있는 경우
        let prev = head
        while(prev!== null && prev.next !== null){
            if(prev.next.val === targetNode){
                 prev.next = prev.next.next
                break
            }
            prev = prev.next
        }

    4. 삭제하려는 노드가 tail 인경우


**양방향 연결배열**

    1. head에 아무런 값이 없는데 1 노드 를 추가하려는 경우

    2. 노드들 중간에 추가

    3. 노드를 tail에 추가

    3. 삭제하려는 노드가 head인경우

    4. 삭제하려는 노드가 중간에 있는 경우

    5. 삭제하려는 노드가 tail 인경우
