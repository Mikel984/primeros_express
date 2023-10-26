
export interface IDeliverable{
    deliver():void,
    return():void,
    isDelivered():boolean,
    compareTo(objectToCompare: IDeliverable): IDeliverable,  //necesita un objeto para compara del mismo tipo de la clase y devuelve un objeto del mismo tipo

}