import inquirer from "inquirer";

class Student {
  name : string
  constructor(n : string) {
    this.name = n
  }
}

class Person {
  students : Student[] = []
  addStudent(obj : Student) {
    this.students.push (obj)
  }
}

const persons = new Person () 

const startProgram = async (persons : Person) => {
  
  do {

    console.log("Welcome");

    const ans = await inquirer.prompt([
      {
       name : "select",
       type : "list",
       message :"Whom would yuo like to interact with?",
       choices : ["Staff" , "Student" , "Exit"]
      }
    ])

    if (ans.select == "Staff") {
      console.log("You will aproach the staff room. Please feel free to ask any question");
    } else if (ans.select == "Student") {
     const ans = await inquirer.prompt([
        {
         name : "student",
         type : "input",
         message : "Enter the Student's name you wish to engage with:"
        }
      ])
    
      const student = persons.students.find(val => val.name === ans.student)
    
      if (!student) {
       const name = new Student (ans.student)
       persons.addStudent (name)
       console.log(`Hello i am ${name.name}, Nice to meet you.`);
       console.log("New Student Added");
       console.log("Current Student List :");
       console.log(persons.students);
      } else {
       console.log(`Hello ${Student.name}, Nice to see you again`);
       console.log("Existing Student List");
       console.log(persons.students);
      }

    } else if (ans.select == "Exit") {
      console.log("Existing the program ...");
    }

  } while(true)

}

startProgram(persons)





