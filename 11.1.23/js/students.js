const Students=[]

for (let i = 0; i < 5; i++) {
    const student=prompt("Enter your name");
    Students.push(student);  
} 
Students.sort();
//console.log (Students);

var students = Students.join(', ');

alert(students)
