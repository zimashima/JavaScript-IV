// CODE here for your Lambda Classes

class Person {
    constructor(attrs){
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak(){
        return `Hello, my name is ${this.name}, I am from ${this.location}`;
    }
}// closes Person Class

class Instructor extends Person{
    constructor(Iattrs){
        super(Iattrs);
        this.specialty = Iattrs.specialty;
        this.favLanguage = Iattrs.favLanguage;
        this.catchPhrase = Iattrs.catchPhrase;
    }
    
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    }
}//closes Instructor Class

class Student extends Person{
    constructor(STDattrs){
        super(STDattrs);
        this.previousBackground = STDattrs.previousBackground;
        this.favSubject = STDattrs.favSubject;
        this.grade = STDattrs.grade;
    }

    listsSubjects(){
        return this.favSubject.forEach(favSub => console.log(favSub)) ;
    }
    PRAssignment(studentSubject){
        return `${this.name} has submitted a PR for ${studentSubject}`
    }
    sprintChallenge(studentSubject2){
        return `${this.name} has begun a sprint challenge on ${studentSubject2}`
    }

} // closes Student

class ProjectManager extends Instructor{
    constructor(PMattrs){
        super(PMattrs);
        this.gradClassName = PMattrs.gradClassName;
        this.favInstructor = PMattrs.favInstructor;
    }
    standUp(slackChannel){
        return `${this.name} announces to ${slackChannel}, @channel standy times!`
    }
    debugsCode(theStudent, theSubject){
        return `${this.name} debugs ${theStudent.name}'s code on ${theSubject}`
    }
}// closes PM

const instructorOne = new Instructor({
    name: 'Britt',
    age: 'NA',
    location:'Canada',
    specialty: 'Web Fundamental',
    favLanguage: 'CSS',
    catchPhrase: 'I\'m going to send you to breakout groups'
})// closes instructorOne

const studentOne = new Student({
    name: 'Mashima',
    age: 29,
    location:'Florida',
    previousBackground: 'Customer Services',
    favSubject: ['Sleep', 'Eat', 'Music'],
    grade: 50
})// closes studentOne

const pmOne = new ProjectManager({
    name:'Allie',
    age: 'NA',
    location: 'USA',
    specialty: 'JavaScript',
    favLanguage: 'JavaScript',
    catchPhrase: 'Gotta catch\'em all',
    gradClassName:'WEBPTXX',
    favInstructor: 'Josh'
})// closes instructorOne

console.log(instructorOne)
console.log(studentOne)
console.log(pmOne)

console.log(instructorOne.speak())
console.log(instructorOne.demo('JS'))
console.log(instructorOne.grade(studentOne, 'JS'))

console.log(pmOne.standUp('#web25_allie'))
console.log(pmOne.debugsCode(studentOne, 'JavaScript'))

console.log(studentOne.listsSubjects())
console.log(studentOne.PRAssignment('JavaScript'))
console.log(studentOne.sprintChallenge('JavaScript'))