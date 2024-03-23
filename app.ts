#!/usr/bin/env node
import inquirer from "inquirer"; // Used to run CLI programs.
import chalk from "chalk"; // Used to enhance code by adding colors.
//console the tittle of this code.
console.log(chalk.italic.bgGrey.bold("\n\t Percentage Grading System \t\n"));

// Prompt the user for their full name, matric roll number, and matric percentage.
const percentage = await inquirer.prompt([
  {
    name: "userName",
    type: "string",     
    message: "Enter your Full Name:",
    transformer: (input) => {  
        // Use for changing the color of the user input.
        return chalk.italic.blue.bold(input); }
  },
  {
    name:"rollNumber",
    type:"number",
    message:"Enter your Matric Roll Number:",
    transformer: (input) => {  
        return chalk.italic.blue.bold(input); }
  },
  { name: "grade",
    type:"number",
    message:"Enter your Matric Percantage:",
    transformer: (input) => {  
        return chalk.italic.blue.bold(input); }
  },
]);
//Test Conditions.
if(percentage.grade>=80 && percentage.grade<=100){
    console.log(chalk.italic.yellow("Congratulations! Your Grade is A+. you are eligible for the Scholarship.")); 
}
else if (percentage.grade>=70 && percentage.grade<=79){
    console.log(chalk.italic.yellow(" Your Grade is A. you are eligible for the 80% Scholarship. "));
}
else if (percentage.grade>=60 && percentage.grade<=69){
    console.log(chalk.italic.yellow(" Your Grade is B. You are eligible for the Scholarship. but Please wait for the confirmation."));
}
else if (percentage.grade>=50 && percentage.grade<=59){
    console.log(chalk.italic.yellow(" Your Grade is C. Your are not eligible for the Scholarship. "));
}
else{
    console.log(chalk.italic.yellow("You failed. Please try again."));
}