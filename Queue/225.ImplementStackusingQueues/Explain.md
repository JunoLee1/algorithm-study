*225. Implement Stack using Queues*
**Problem Definition**
- Implement a last-in-first-out (LIFO) stack using only two queues. 
**APPROACHING**
두개의 큐를 써서, 232번 문제와 같이 접근 하는 문제

**실수및 고민**
큐는 LIFO라는 성질을 가진다라는 것을 인지를 하였으나, Java Script는 다른 언어와 달리 shift라는 메소드를 지원한다.
shift라는 매서드는 배열내에 맨앞 요소를 빼는 메서드.

크게 헷갈렸던 부분에 맨위 값을 조회시 값을 따로 저장을 한다는 부분이었음. shift로 이동시 삭제를 하면서 앞으로 가기에 그런듯 