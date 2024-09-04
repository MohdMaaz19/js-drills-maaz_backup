
//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
function emailList(personList){
    let email = [];
    for(let i=0; i<personList.length;i++){
        email.push(personList[i]['email']);
    }
    return email;
}

//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
function printHobbiesByAge(personList,age){
    for(let i=0; i<personList.length; i++){
     if(personList[i]['age']==age){
        console.log(personList[i]['hobbies']);
     }   
    }
}

//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.
function studentsFromAustralia(personList){
    let studentList = [];
    for(let i=0;i<personList.length;i++){
        if(personList[i]['country']==='Australia' && personList[i]['isStudent']){
            studentList.push(personList[i]['name']);
        }
    }
    console.log(studentList);
}

//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.
function detailsAtThree(personList){
    console.log(`My name is ${personList[3]['name']} and I live in ${personList[3]['city']}`);

}

//    Implement a loop to access and print the ages of all individuals in the dataset.
function printAges(personList){
    for(let i=0;i<personList.length;i++){
        console.log(`My age is ${personList[i].age}`);
    }
}

//    Create a function to retrieve and display the first hobby of each individual in the dataset.//    Create a function to retrieve and display the first hobby of each individual in the dataset.
function firstHobby(personList){
    for(let i=0; i<personList.length;i++){
        console.log(`My hobby is ${personList[i]['hobbies'][0]}.`);
    }
}

//    Write a function that accesses and prints the names and email addresses of individuals aged 25.
function detailsOfPerson(personList){
    for(let i=0; i<personList.length;i++){
        if(personList[i].age==25){
            console.log(`My name is ${personList[i]['name']}. My email id is ${personList[i]['email']}.`);
        }
    }
}

//    Implement a loop to access and log the city and country of each individual in the dataset.
function printCountryAndCity(personList){
    for(let i=0;i<personList.length;i++){
        console.log(`I am from ${personList[i].country} and I live in ${personList[i].city}.`);
    }
}

module.exports = {emailList,printHobbiesByAge,studentsFromAustralia,detailsAtThree,printAges,firstHobby,detailsOfPerson,printCountryAndCity}