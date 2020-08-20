const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];


 function getSubjects(student) {
    let subjects = [];
    for (let subject in student.subjects) {
      if (subject.includes("_")) subject = subject.replace("_", " ");
      subjects.push(subject[0].toUpperCase() + subject.slice(1));
    }
    return  document.getElementById("output_1").innerHTML = subjects;
  }




  function getAverageMark(student) {
    let marks = [];
    for (let mark in student.subjects) {
      marks.push(student.subjects[mark].join(""));
      marks = marks.join("").split("");
    }
    let sum = marks.reduce((acc, number) => acc + +number, 0);
    let avrg =(Math.round((sum / marks.length) * 100) / 100);
    return document.getElementById("output_1").innerHTML = avrg;
  }

  function getStudentInfo(student) {
    let info = {};
    info.course = student.course;
    info.name = student.name;
    info.mark = getAverageMark(student);
    document.getElementById("output_1").innerHTML = JSON.stringify(info);
  }

  function getStudentsNames(students) {
    let sorted = [];
    students.map((student) => sorted.push(student.name));
    return document.getElementById("output_1").innerHTML = sorted.sort();
  }


  const getBestStudent = students => {
    const bestStudent = students.map(student => {
      student.averageMark = getAverageMark(student);
      return student;
    })
    .sort((studentA, studentB) => studentB.averageMark - studentA.averageMark)[0];
  
    return document.getElementById("output_1").innerHTML = bestStudent.name;
  }
 
  function calculateWordLetters (str) {
    obj = {}
    for (i = 0; i < str.length; i++) {
      chart = str[i]
      count = obj[chart]
      obj[chart] = count ? count +1 : 1
    }
    return obj;
  }
  console.log(calculateWordLetters('test'));