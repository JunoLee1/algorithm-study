function isValidParenthesis(arr: string[]) {
    const n:number = arr.length;
    const stack: string[]= [];
    const parenthesis: {[key:string]:string}= {"(":")","[":"]","{":"}"} // 양방향 통행 안됨...... 일방통행

    for(let i = 0; i < n; i++){
        const crnt = arr[i]
        if (parenthesis[crnt]){
            stack.push(crnt)
        }
        else {
            const stack_len = stack.length
            const lastOpen = stack[stack_len - 1]
            if(parenthesis[lastOpen] === crnt) stack.pop()
            else return false
        }
    }
    return stack.length === 0  
}

console.log(isValidParenthesis(["(", ")", "[", "]", "{", "}"]));
console.log(isValidParenthesis(["(", "[", "]", "{", "}"]));
