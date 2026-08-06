class MyQueue{
    private inStack : number[]
    private outStack : number[]
    constructor(){
        this.inStack = []
        this.outStack = []
    }

    push(x:number){
        this.inStack.push(x)
    }
    pop(){
        if(this.outStack.length === 0){
            while(this.inStack.length > 0){
                this.outStack.push(this.inStack.pop()!)
            }
        }
        return this.outStack.pop()!
    }
    peek(){
        if(this.outStack.length === 0){
            while(this.inStack.length > 0){
                this.outStack.push(this.inStack.pop()!)
            }
        }
        return this.outStack[this.outStack.length - 1]
    }
    empty():boolean{
        return this.inStack.length ===0 && this.outStack.length === 0 
    }
}