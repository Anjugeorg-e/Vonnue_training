
let classObj = {
    "name" : "class A" ,
    "teacherName" : "Mary" ,
    "students" : [ 
        {
            "name" : "Ravi" ,
            "id" : "101" ,
            "marks" : [
                {"subject" : "English" , "mark" : 25}, 
                {"subject" : "Maths", "mark" : 48}, 
                {"subject" : "Physics", "mark" : 40}, 
                {"subject" : "Chemistry", "mark" : 30},
                {"subject" : "Computer", "mark" : 20}
            ]
        },
        {
            "name" : "Aju" ,
            "id" :  "102",
            "marks" : [
                {"subject" : "English" , "mark" : 35}, 
                {"subject" : "Maths", "mark" : 38}, 
                {"subject" : "Physics", "mark" : 33}, 
                {"subject" : "Chemistry", "mark" : 34},
                {"subject" : "Computer", "mark" : 30}
            ]
        },
        {
            "name" : "Mini SS" ,
            "id" : "103" ,
            "marks" : [
                {"subject" : "English" , "mark" : 12}, 
                {"subject" : "Maths", "mark" : 49}, 
                {"subject" : "Physics", "mark" : 18}, 
                {"subject" : "Chemistry", "mark" : 30},
                {"subject" : "Computer", "mark" : 40}
            ]
        },
        {
            "name" : "Binu" ,
            "id" : "104" ,
            "marks" : [
                {"subject" : "English" , "mark" : 49}, 
                {"subject" : "Maths", "mark" : 49}, 
                {"subject" : "Physics", "mark" : 47}, 
                {"subject" : "Chemistry", "mark" : 46},
                {"subject" : "Computer", "mark" : 50}
            ]
        }
    ]
}


// function classTeacher(){
//     classObj.teacherName="annie"
//     return classObj;
// }

// console.log(classTeacher())


function addStudent(id,name){
    let newobj={
        name:name,
        id:id,
        marks:[]
    }
    // console.log(newobj)
    classObj.students.push(newobj)
    console.log(classObj)
}

// let a=addStudent('5', "naan")
// console.log(a)


function changeName(index,name){
    classObj.students[index].name=name
    console.log(classObj)
}

// console.log(changeName(2,"Ravikumar"))

function mark(index){
   let marksValue=classObj.students[index].marks
   console.log(marksValue)
}
// console.log(mark(0))

function englishMark(index){

   
       let Value=classObj.students[index].marks[3]
       console.log(Value)
   
}
// console.log(englishMark(0))

function totalmark(idx){
let sum=0;

    for(let i=0; i<5;i++){

        let p=classObj.students[idx].marks[i].mark
                sum=sum+p
    }
   return sum;
}

console.log( "total mark:" + totalmark(3))


function removeStudent(id){
    classObj.students.pop(id)
    return classObj
}
console.log(removeStudent(2))

function removeSubject(){

}

let q=classObj.students[0].marks[0].subject
console.log(q)