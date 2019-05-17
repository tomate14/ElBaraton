
export class Categoria{

    private _name: string;
    private _id: number;
    private _sublevels: Categoria[];
    
    constructor(id:number, name:string, sublevels:Categoria[]){
        this._id = id;
        this._name = name;
        this._sublevels = sublevels;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get sublevels(): Categoria[] {
        return this._sublevels;
    }
    public set sublevels(value: Categoria[]) {
        this._sublevels = value;
    }




    
    
}