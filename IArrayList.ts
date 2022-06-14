export interface IArrayList<T>{
    size():number;
    add(data:T):void;
    get(index:number):T;
    remove(index:number):void;
}