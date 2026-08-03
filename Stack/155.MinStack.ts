class MinStack {
  private stack: number[];
  private min: number | null;
  constructor() {
    this.stack = [];
    this.min = null;
  }

  push(val: number) {
    if (this.min === null) {
      this.stack.push(0);
      this.min = val;
      console.log(`첫 값 입력 완료!`);
      console.log(this.min, val)
    } else {
      const diff = val - this.min;
      this.stack.push(diff);
      console.log(`계산된 ${val} - ${this.min} = ${diff}가 스택에 푸쉬된다.`);
      if (val < this.min) {
        this.min = val;
        console.log(`최솟값 갱신 기존! min(${this.min}) -> 새 min(${val})`);
      }
    }
  }
  pop() {
    if (this.stack.length === 0 || this.min === null) {
      throw new Error("Stack is empty");
    }
    const diff = this.stack.pop()!;
    console.log(`스택에서 꺼낸 diff: ${diff}`);
    if (diff < 0) {
      this.min -= diff; // recover from past
      console.log(`⚠️ diff가 음수이므로 과거 최솟값 복원!`);
      console.log(
        `공식: 현재 min(${this.min}) - diff(${diff}) = 이전 min(${this.min})`,
      );
    }
    if (this.stack.length === 0) {
      this.min = null;
    }
  }
  top(val: number) {
    if (this.stack.length === 0 || this.min === null) {
      throw new Error("Stack is empty");
    }
    const diff = this.stack[this.stack.length - 1];
    return diff > 0 ? this.min + diff : this.min;
  }
  getMin(val: number) {
    if (this.stack.length === 0 || this.min === null) {
      throw new Error("Stack is empty");
    }
    return this.min;
  }
}

const minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(-1);

minStack.pop();
minStack.pop();
minStack.pop(); 
