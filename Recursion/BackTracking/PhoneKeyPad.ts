function letterCombination(digits: string): string[] {
    const result : string[] = [];
    const hashMap :{[key: string]: string} = {
        "1":"",
        "2":"abc",
        "3":"def",
        "4":"ghi",
        "5":"jkl",
        "6":"mno",
        "7":"pqrs",
        "8":"tuv",
        "9":"xyz",
    }
    if(digits.length === 0) return[]

    function BT(idx: number, crntLetter: string){
        const digit = digits[idx];
        const letters = hashMap[digit]

        if(idx === digits.length){
            result.push(crntLetter)
            return ;
        }
        for (const char of letters){
            BT(idx +1, crntLetter + char)
        }
    }
    BT(0,"")
    return result;
}
console.log(letterCombination("25"))