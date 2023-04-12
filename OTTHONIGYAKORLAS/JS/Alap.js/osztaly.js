class Person
{
    constructor(name, lname, born)
    {
        this.name = name;
        this.lname = lname;
        this.born = born;
    }
    get FullName(){
        return this.fname + " " + this.lname;
    
    }    
    get Age()
    {
        return(new Date()).getFullYear() - this.born;
    }
    CreateCard()
    {
        var html =  '<h2>${this.FullName}</h2>'
                    '<p><strong>Született:</strong> ${this.born} </p>'
                    '<p><strong>Kora:</strong> ${this.Age} éves</p>'
        return html;
    }
}

var people = []
people.push(new Person("Joe", "Smith", 1995));
people.push(new Person("Sarah", "Connor", 1998));
people.push(new Person("Frank", "Miller", 1995));

var html = '<section>'
for(var person of people) html += person.CreateCard();
html += '</section>'

document.body.innerHtml = html

class Hero extends Person
{
    constructor(name, born, power)
    {
        super(name, "Hero", born);
        this.power = poewr;
    }
    CreateCard()
    {
        var html = super.CreateCard();
        html += '<p><strong>Ereje:</strong> ${this.powe} egység</p>';
        return html;
    }
}

var hero = new Hero("Sanatha", 2000, 123);
document.body.innerHTML += hero.CreateCard();
// console.log(person.FullName);

// console.log(typeof person);
// console.log(person.__proto__);

// person2 = new Person("Joe");
// console.log(person2);
// console.log(typeof person2);
// console.log(person2.__proto__);