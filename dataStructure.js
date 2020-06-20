



class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
    fullName(){
        return "Your full name is ${this.firstName} ${this.lastName}";
    }
    markLate(){
        this.tardies +=1;
        if(this.tardies >= 3){
            return 'Your expelled'
        }
    }
    addScore(score){
        this.scores.push(score);
        return this.scores;
    }
    calulateAverage() {
        let sum = this.scores.reduce(function(a,b){return a+b;});
        return sum/this.scores.length;
    }
}


let firstStudent = new Student("Brian","Burnett");
let secondStudent = new Student("Anna","Nubs");

console.log(firstStudent.firstName)


