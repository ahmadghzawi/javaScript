//sing a song
function Song(songName, bandName){
    this.SongName = songName;
    this.BandName = bandName;
}
Song["ahmad"] = 4;
Song.prototype.countName = function(){
    return `The total numer of words in ${this.SongName} is ${this.SongName.split(' ').length}`
}
Song.prototype.createElement = function(){
    $('body').append(`<div><b>Song Name: </b>${this.SongName}.<br><b>Band Name: </b>${this.BandName}. <br><br>`)
}

var firstSong = new Song("A day in the life", "The Beatles");
var secondSong = new Song("Impossible", "Shantelle");

console.log(firstSong);
console.log(firstSong.countName());
firstSong.createElement();

console.log(secondSong);
console.log(secondSong.countName());
secondSong.createElement();

console.log("");

// The Cat
function Cat(name, tiredness, hunger, lonliness, happiness){
    this.Name = name;
    this.Tiredness = tiredness;
    this.Hunger = hunger;
    this.Lonliness = lonliness;
    this.Happiness = happiness;
}
Cat.prototype.feed = function(){
    this.Tiredness -= 10;
    this.Hunger = 0;
    this.Happiness += 10;
    return `${this.Name} is being fed.`
}
Cat.prototype.sleep = function(){
    this.Tiredness = 0;
    this.Hunger += 5;
    this.Happiness += 10;
    return `${this.Name} is asleep`
}
Cat.prototype.pet = function(){
    if (this.Happiness < 0) {
        this.Lonliness -= 10;
        this.Happiness += 5;
        return `${this.Name} enjoys petting!`
    } else {
        var rand = Math.floor(Math.random() * Math.floor(10))
        if (rand > 1) {
            this.Lonliness -= 10;
            this.Happiness += 5;
            return `${this.Name} enjoys petting!`
        } else {
            return `${this.Name} DOES NOT want to be petted! LEAVE IT ALONE!`
        }
    }
}
Cat.prototype.hit = function(){
    this.Happiness -= 20;
    return `bad kitten ${this.Name}! bad kitten`
}
Cat.prototype.status = function(){
    var status = "";
    if (this.Tiredness > 0) {
        if (this.Tiredness > 5) {
            status += `${this.Name} is VERY tired! let it get some sleep \n`;
        } else {
            status += `${this.Name} is little bit tired. \n`;
        }
    }
    if (this.Hunger > 0) {
        if (this.Hunger > 5) {
            status += `${this.Name} is VERY hungry! Feed it! \n`;
        } else {
            status += `${this.Name} needs a small cute snack. \n`;
        }
    }
    if (this.Lonliness > 0) {
        if (this.Lonliness > 5) {
            status += `${this.Name} is feeling LONLY! It needs some company! \n`;
        } else {
            status += `${this.Name} wants to play a little. \n`;
        }
    }
    if (this.Happiness > 0) {
        if (this.Happiness > 5) {
            status += `${this.Name} is VERY HAPPY! Keep the good work \n`;
        } else {
            status += `PET ${this.Name} MORE! \n`;
        }
    } else {
        status += `${this.Name} is very UNHAPPY! \n`;
    }
    return status
}

var judi = new Cat("Judi", 18, 20, 25, -10);
console.log(judi);
console.log(judi.status());

console.log(judi.sleep())
console.log(judi.feed())
console.log(judi.pet())
console.log(judi.pet())
console.log(judi.pet())
console.log(judi.pet())
console.log(judi.pet())
console.log(judi.pet())

console.log(judi);
console.log(judi.status());

console.log("");

//The Reading List
//Try to do it using titles not numbers
function Booklist(numOfBooksRead, numOfBooksNotYetRead, refToNextBook, refToCurrentBook, refToLastBookRead){
    this.BooksRead = numOfBooksRead;
    this.BooksNotYetRead = numOfBooksNotYetRead;
    this.RefToNextBook = refToNextBook;
    this.RefToCurrentBook = refToCurrentBook;
    this.RefToLastBookRead = refToLastBookRead;
    this.Books = [];
}
function Book(bookTitle, bookGenre, bookAuthor, isItRead, readDate){
    this.Title = bookTitle;
    this.Genre = bookGenre;
    this.Author = bookAuthor;
    this.IsItRead = isItRead;
    this.ReadDate = readDate;
}
Booklist.prototype.add = function(bookTitle, bookGenre, bookAuthor, isItRead, readDate){
    this.Books.push(new Book(bookTitle, bookGenre, bookAuthor, isItRead, readDate));
}
Booklist.prototype.finishCurrentBook = function(){
    if (this.RefToCurrentBook == 'This is the last book.') {
        return "You have finished this Booklist."
    } else {
        this.BooksRead++;
        this.BooksNotYetRead --;
        this.Books[this.RefToCurrentBook].IsItRead = true;
        this.Books[this.RefToCurrentBook].ReadDate = Date();
        this.RefToLastBookRead = this.RefToCurrentBook;
        this.RefToCurrentBook = this.RefToNextBook;
        for(i in this.Books){
            if (!this.Books[i].IsItRead) {
                this.RefToNextBook = this.Books.indexOf(this.Books[i])
                break;
            }
        }
        if (this.BooksRead == this.Books.length) {
            this.Books[this.RefToCurrentBook].IsItRead = true;
            this.Books[this.RefToCurrentBook].ReadDate = Date();
            this.RefToNextBook = 'There is no more books left to read.';
            this.RefToCurrentBook = 'This is the last book.';
        }
    } 
}

var firstBooklist = new Booklist(1, 4, 3, 1, 0);

// var firstBooklist = new Booklist(0, 5, 3, 1, 0);
// firstBooklist.add("bookny0", "adv", "A", false);

firstBooklist.add("bookcurrent.", "adv", "B", false);
firstBooklist.add("bookny1", "adv", "C", false);
firstBooklist.add("booknext", "adv", "D", false);
firstBooklist.add("bookny2", "adv", "E", false);

console.log(firstBooklist);
firstBooklist.finishCurrentBook();
console.log(firstBooklist);
firstBooklist.finishCurrentBook();
console.log(firstBooklist);
firstBooklist.finishCurrentBook();
console.log(firstBooklist);
firstBooklist.finishCurrentBook();
console.log(firstBooklist);
firstBooklist.finishCurrentBook();
console.log(firstBooklist);

console.log(firstBooklist);

//The Game
// const mario = (numOfSteps) => {
//     let str = "";
//     let lengthOfSpaces = numOfSteps-1;
//     while (lengthOfSpaces > -1) {
//         str += " ".repeat(lengthOfSpaces) + "#".repeat(numOfSteps-lengthOfSpaces) + "\n";
//         lengthOfSpaces--;
//     }
//     return str;
// }
// console.log(mario(8))

//OR
const mario = (numOfSteps) => {
    let str = "*";
    while (numOfSteps > 0) {
        console.log(str)
        str += "*"
        numOfSteps--
    }
}
console.log(mario(8))




