function maxArea(height: number[]): number {
    const n = height.length;
    let maxWater = 0;
    let l = 0;
    let r = n - 1;
    while( l < r){
        const crntW = r - l
        //console.log("crntW",crntW)
        const crntH = Math.min(height[l], height[r])
        const crntCont = crntW * crntH
        //console.log("crntCont",crntCont)

        if(height[l] > height[r]){
            r--
        }else{
            l++
        }
        maxWater = Math.max(maxWater, crntCont)
    }
    return maxWater
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))