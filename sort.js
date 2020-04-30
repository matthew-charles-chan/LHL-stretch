const studentSort = (students) => {
  // if array is 0 or 1 elements, array is sorted -> return
  if (students.length <= 1) return students;

  // create a pivot as last element
  const pivot = students.pop();

  // create left and right sub arrays
  const left = [];
  const right = [];

  // iterate through array with pivot
  for (const student of students) {
    //if name less -> left
    if (student.name < pivot.name) {
      left.push(student);
    //if name greater -> right
    } else if (student.name > pivot.name) {
      right.push(student);
    // if name is same, sort by age
    } else {
      student.age < pivot.age ?
        left.push(student) :
        right.push(student);
    }
  }
  return [...studentSort(left), pivot, ...studentSort(right)];
};

const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

console.log(studentSort(students));