// concept

function bubbleSortingArray(nums:Number[]){
    const n = nums.length
    console.log(n)
    for(let i = 0; i < n - 1; i++){
        for(let j = i + 1; j < n; j++){
            if(nums[i] > nums[j]){
                [nums[i],nums[j]] = [nums[j], nums[i]]
                console.log(nums[i],nums[j])
            }
        }
    }
    return nums
}

console.log(bubbleSortingArray([1, 2, 0, 4, 8]));
function split_text(text: string) {
    let str_num = "";
    let char = "";

    for (let i = 0; i < text.length; i++) {
        let current = text[i];
        
        // 💡 가장 확실한 숫자 판별법: Number(current)가 숫자가 맞다면!
        if (!isNaN(Number(current)) && current !== " ") {
            str_num += current;
        } else {
            char += current;
        }
    }
    
    // 혹시 숫자가 안 뽑혔을 때를 대비해 기본값 "0"을 넣어 안전장치를 합니다.
    return {
        num: str_num, 
        char: char
    };
}
function bubbleSortAlphanumeric(s:string[]){
    const n = s.length
    for(let i = 0; i < n -1; i++){
        for(let j = i + 1 ;j < n; j++){
            const following = split_text(s[i])
            const leading = split_text(s[j])

            if(parseInt(following.num) > parseInt(leading.num)){
                [s[i],s[j]] = [s[j], s[i]]
            }
            else if (parseInt(following.num) === parseInt(leading.num)) {
                // 앞의 문자(following.char)가 뒤의 문자(leading.char)보다 사전순으로 크다면 바꾼다!
                if (following.char > leading.char) {
                    [s[i], s[j]] = [s[j], s[i]];
                }
            }
        }
        console.log("res:",s)
    }
    return s
}
console.log(bubbleSortAlphanumeric(["5a","5b","7a","7b","3c"]))