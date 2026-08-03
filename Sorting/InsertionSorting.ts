function insertSort(nums:number[]){
    const n: number = nums.length;

    for (let pIdx = 1; pIdx < n; pIdx++ ){
        let tmp = nums[pIdx]
        let idx = pIdx - 1
        while (idx >= 0 && tmp < nums[idx]){
            console.log(nums[idx], tmp)
            nums[idx + 1] = nums[idx]
            console.log(nums[idx + 1])
            idx = idx - 1 
            console.log("idx: ", idx)
        }
        nums[idx+ 1] = tmp
        console.log(nums)
    }
    return nums
}
console.log(insertSort([9 ,3, 5, 7, 1]))