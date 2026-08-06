/**
    * Problem Definition :
        -   You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

            For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

            Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

            For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

            Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

    * Approach :
        1) Mono Stack and Set:


    * Mistakes:
        logics

        definition of subset
                 

 */
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const nextGreater = new Map<number, number>();
    const stack : number[] = []
    
    for(let num of nums2){
         while(stack.length > 0 && stack[stack.length - 1]){
            const prev = stack.pop()!;
            if(num > prev){
                nextGreater.set(prev, num)
            }
         }
        stack.push(num)
    }
   return nums1.map(num => nextGreater.get(num)?? -1)
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))