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
    
    grade(student){
        return `${student.name} receives a perfect score on ${subject}`
    }
}//closes Instructor Class

class Student extends Person{
    constructor(STDattrs){
        super(STDattrs);
        this.previousBackground = STDattrs.previousBackground;
        this.favSubject = STDattrs.favSubject;
    }

    listsSubjects(){
        return this.favSubject.forEach(console.log(favSub)) ;
    }
    PRAssignment(studentSubject){
        return `${this.name} has submitted a PR for ${studentSubject}`
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
}