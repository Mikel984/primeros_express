import {IDeliverable} from "./IDelivereable"

export class tvShow implements IDeliverable{
    #title: string;
    #seasons: number = 3;
    #delivered: boolean = false;
    #gender: string;
    #author: string;
    constructor(title: string, seasons: number, gender: string, author: string){
        this.#title = title;
        this.#seasons = seasons;
        this.#gender = gender;
        this.#author = author;
    }
    get title(){
        return this.#title;
    }
    set title(newTitle: string){
        this.#title = newTitle;
    }
    get seasons(){
        return this.#seasons;
    }
    set seasons(newSeasons: number){
        this.#seasons = newSeasons;
    }
    get gender(){
        return this.#gender;
    }
    set gender(newGender: string){
        this.#gender = newGender;
    }
    get author(){
        return this.#author;
    }
    set author(newAuthor: string){
        this.#author = newAuthor;
    }

    toString(){
        return `Name: ${this.#title}\n Seasons: ${this.#seasons}\n Gender: ${this.#gender}\n Aitor: ${this.#author}`;
    }
    //implementamos todos los metodos de la interface que implementamos
    deliver():void{
        this.#delivered = true;
    }
    return():void{
        this.#delivered = false;
    }
    isDelivered():boolean{
        return this.#delivered;
    }
    compareTo(objectToCompare: tvShow): tvShow{
        let longestShow: tvShow = this;
        if(this.#seasons < objectToCompare.#seasons) longestShow= objectToCompare;
        return longestShow;
    }
}

const miShow: tvShow = new tvShow("Friends", 7, "Comedy", "Jano");
console.log(miShow.toString());
