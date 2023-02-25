const students={
    firstName:"david",
    lastname:"jose",
    Strengths:["music", "art"],
    exams:{
        midterm:92,
        final:85,
    }
}


function AvgMark(){
    let avg=students.exams.midterm+students.exams.final
    return avg
}

console.log(AvgMark())


function newSubject(){
    students.Strengths.push("dance")
    return students.Strengths
    return students
}
console.log(newSubject())