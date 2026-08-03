function canPartitionByMemo(nums: number[]): boolean {

    const n = nums.length;
    const total:number = nums.reduce((acc, crntSum) => acc +  crntSum)
    
    if(total % 2 !== 0) return false;

    const target:number = total / 2
    
    const memo: number[][] = Array.from({length:n + 1}, () => Array.from(target + 1).fill(-1))
    function dfs(weight:number, value:number):boolean {
        if( weight !== 0 ) return true;

        if( weight >= target || value > n) return false

        const include = dfs(weight + 1, value + nums[weight])
        const exclude = dfs(weight + 1, value)

        memo[weight][value] = (include || exclude) ? 1: -1

        return include || exclude
    }
    return dfs(0,0)
}

console.log(canPartitionByMemo([1,5,5,11]))



function canPartitionByBottomUp1(nums:number[]):boolean{
    const n = nums.length;
    const total = nums.reduce((acc, crntSum) => acc+ crntSum, 0)

    if(total % 2 !== 0) return false 
    
    const target = total / 2;
    const dp = Array(target + 1).fill(false)
    dp[0] = true
    for(let num of nums){
        for(let value = target; value >= num; value--){
            dp[value] = dp[value] || dp[value - num]
        }
    }
    return dp[target]
}
console.log(canPartitionByBottomUp1([1,5,5,11]))

function canPartitionByBottomUp2(nums:number[]){
    const n = nums.length
    const t = nums.reduce((acc, crntSum) => acc + crntSum, 0)

    if(t % 2 !==0 ) return false

    const dp = Array.from({length: n + 1}, () =>Array.from({length: t + 1}).fill(false))
    const target = t/2
    for(let i = 0; i < n; i++){
        dp[i][0] = true 
    }

    for(let i = 1; i <= n; i ++){
        const num = nums[i - 1]
        for (let j = 1; j <= target; j++){
            dp[i][j] = dp[i-1][j]
            if(j >= num){
                dp[i][j] = dp[i][j] || dp[i - 1][j - num] 
            }
        }
        
    }
    return dp[n][target]
}
console.log(canPartitionByBottomUp2([1,5,5,11]))