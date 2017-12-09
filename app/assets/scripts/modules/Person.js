class Person {
constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
}
    greet() {
        console.log("Ciao gugliù, il mio nome è " + this.name + " e il mio colore preferito è " + this.favoriteColor + ".");
    }
}

module.exports = Person;