
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


function classTeacher(){
    classObj.teacherName="annie"
    return classObj;
}

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

// console.log(removeStudent(2))

function totalMarks(id, students){
    x= students.find((student) => {
        return (student.id === id)
    })
    total =0
    x.marks.forEach(mobj =>{
        total += mobj.mark
    })
    
    console.log(total)
}
// console.log(totalMarks('102', classObj.students))


function removeStudent(students){
    // x=students.find((student) => {
    //     return student.id === id;  
    // console.log(x)
    // })
    students.splice(0,1)
    return classObj
}
//  console.log(removeStudent(classObj.students))



//remove a subject from array

function removeSubject(){
 for(let i=0;i<classObj.students.length;i++){
     x=classObj.students[i].marks;
     console.log(x)
     x.splice(3,1)
    }   
}
console.log(removeSubject())
console.log(classObj.students)

// classObj.students[0].marks.forEach(mark=>{
//     console.log(mark.mark)
    
    
// })
// y= x.splice(3,1)
//  console.log(x)