// You are given an array of student objects, where each object contains details such as the student's name and grade. Write a function groupStudentsByGrade that takes this array as input and returns an object where each key is a grade, and the corresponding value is an array of student names who received that grade.

//  For example, given the input:

//  const students = [
//     { name: 'Alice', grade: 'A' },
//     { name: 'Bob', grade: 'B' },
//     { name: 'Charlie', grade: 'A' },
//     { name: 'David', grade: 'C' },
//     { name: 'Eve', grade: 'B' }
// ];

//  The function should return:

//  {
//     A: ['Alice', 'Charlie'],
//     B: ['Bob', 'Eve'],
//     C: ['David']
// }


// without function
// const students = [
//     { name: 'Alice', grade: 'A' },
//     { name: 'Bob', grade: 'B' },
//     { name: 'Charlie', grade: 'A' },
//     { name: 'David', grade: 'C' },
//     { name: 'Eve', grade: 'B' }
// ];

// let groupbygrade={};
// for(let i=0;i<students.length;i++){
//     let grade=students[i].grade;
//     let name=students[i].name;
//     if(groupbygrade[grade]){
//         groupbygrade[grade].push(name);
//     }else{
//         groupbygrade[grade]=[name];

//     }
// }
// console.log(groupbygrade);

  //with function
// function groupStudentsByGrade(studentsArray){
//     let groupbygrade={};
//     for(let i=0;i<studentsArray.length;i++){

//         let grade=studentsArray[i].grade;
//         let name=studentsArray[i].name;
//         if(groupbygrade[grade]){
//             groupbygrade[grade].push(name);
//         }else{
//             groupbygrade[grade]=[name];
//         }
//     }
//     return groupbygrade;
// }
// console.log(groupStudentsByGrade(students));

// with modern JS method
const students = [
    { name: 'Alice', grade: 'A' },
    { name: 'Bob', grade: 'B' },
    { name: 'Charlie', grade: 'A' },
    { name: 'David', grade: 'C' },
    { name: 'Eve', grade: 'B' }
];
function groupStudentsByGradeModern(studentsArray){
    return studentsArray.reduce((acc, student) => {
        const { grade, name } = student;
        if (!acc[grade]) {
            acc[grade] = [];
        }
        acc[grade].push(name);
        return acc;
    }, {});
}
console.log(groupStudentsByGradeModern(students));
