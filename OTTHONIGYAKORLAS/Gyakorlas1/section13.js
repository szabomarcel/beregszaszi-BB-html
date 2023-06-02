class Greeter{
    greeting: String;
    constructor(message: string){
        this.greeting = message;
    }
    greet(): string{
        return this.greeting;
    }
}
let Greeter = new Greeter("Hello, word!")
console.log(greeter.greet())