function dailyTemperatures(temperatures: number[]): number[] {
    const stack : number[] = []
    const n = temperatures.length;
    const ans: number[] = new Array(n).fill(0);

    for (let idx = 0; idx < n; idx++){
        const crntTemp = temperatures[idx]
        console.log("crntTemp", crntTemp)
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < crntTemp){
            const prevDay = stack.pop()!;
            console.log(prevDay)
            ans[prevDay] = idx - prevDay
            console.log("ans[prevDay]: ", ans[prevDay] )
        }
        console.log("prev:", stack)
        stack.push(idx)
        console.log("after:", stack)
    }
    return ans
};
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
//console.log(dailyTemperatures([1,2,3]))