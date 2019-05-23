export class ParametrosFiltro{
    private precioMinimo:number;
    private precioMaximo:number;
    private stock:number;

    constructor(_precioMinimo:number, _precioMaximo:number, _stock:number){
        this.precioMinimo = _precioMinimo;
        this.precioMaximo = _precioMaximo;
        this.stock        = _stock;
    }


    public getStock():number{
        return this.stock;
    }
    public getPrecioMinimo():number{
        return this.precioMinimo;
    }

    public getPrecioMaximo():number{
        return this.precioMaximo;
    }


}