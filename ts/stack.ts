export class Stack<T> {
    private items: Array<T>;
    private count: number;

    constructor() {
        this.items = [];
        this.count = 0;
    }

    public push(element: T): number {
        this.items[this.count] = element;
        console.log(`${element} added`);
        this.count++;
        return this.count - 1;
    }

    public pop(): T | undefined {
        if (this.count === 0) {
            return undefined;
        }
        const toPop = this.items[this.count - 1];
        this.count--;
        console.log(`${toPop} removed`);
        return toPop;
    }

    public peek() {
        return this.items[this.count - 1];
    }

    public isEmpty() {
        return this.count === 0;
    }

    public getArray(): Array<T> {
        let arrayToReturn: Array<T> = [];
        for (let i = 0; i < this.count; i++) {
            arrayToReturn[i] = this.items[i];
        }
        return arrayToReturn;
    }

    public print() {
        let arrayToPrint = this.getArray();
        console.log(arrayToPrint);
    }
}
