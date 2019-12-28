

export class Ingredient {
    // public name: string;
    // public amount: number;

    /*Instead of creating property and assign, what we can do is
    .. place access identifier before property name .
    this will create property and assign value to it.
    */
    constructor(public name: string, public  amount:number) {
        // this.name = name;
        // this.amount = amount;
    }

}