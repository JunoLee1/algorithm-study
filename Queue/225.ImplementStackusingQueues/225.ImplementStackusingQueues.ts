class MyStack {
    private enQ : number[]
    private deQ : number[]
    constructor(){
        this.enQ = []
        this.deQ = []
    }
    push(x:number){
        this.enQ.push(x)
    }
    pop(){
        while(this.enQ.length > 1){
            this.deQ.push(this.enQ.shift()!)
        }
        const poppedE = this.enQ.shift()!
        while(this.deQ.length > 0){
            this.enQ.push(this.deQ.shift()!)
        }
        return poppedE
    }
   
    top(){
        while(this.enQ.length > 1) {
            this.deQ.push(this.enQ.shift()!)
        }
        const topE = this.enQ[0]
        this.deQ.push(this.enQ.shift()!)
        while(this.deQ.length > 0){
            this.enQ.push(this.deQ.shift()!)
        }
        return topE   
    }
    isEmpty():boolean{
        return this.enQ.length === 0;
    }
}