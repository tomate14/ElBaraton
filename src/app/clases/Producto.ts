export class Producto{
    private _quantity: number;   
    private _price: string;   
    private _available: boolean;
    private _sublevel_id: number;    
    private _name: string;    
    private _id: string;    
    
    constructor(quantity : number, price : string,    available: boolean,    sublevel_id: number,    name:string,    id : string){
        this._quantity = quantity;
        this._price = price;
        this._available = available;
        this._sublevel_id = sublevel_id;
        this._name = name;
        this._id = id;
    }
    
    public get quantity(): number {
        return this._quantity;
    }
    public set quantity(value: number) {
        this._quantity = value;
    }
    public get available(): boolean {
        return this._available;
    }
    public set available(value: boolean) {
        this._available = value;
    }

    public get price(): string {
        return this._price;
    }
    public set price(value: string) {
        this._price = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get sublevel_id(): number {
        return this._sublevel_id;
    }
    public set sublevel_id(value: number) {
        this._sublevel_id = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

}