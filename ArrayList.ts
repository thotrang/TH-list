import { IArrayList } from "./IArrayList";

export class ArrayList<T> implements IArrayList<T>{
    container: Array<T>;
    constructor(){
        this.container=[];
    }
    size(): number {
        return this.container.length;
    }
    add(data: T): void {
        this.container.push(data);
    }
    get(index: number): T {
        return this.container[index]
    }
    remove(index:number): void {
        this.container.splice(index,1);
    }

}