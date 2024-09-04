function detailsOfPerson(arr){
    for(let i=0; i<arr.length;i++){
        if(arr[i].age==25){
            console.log(`My name is ${arr[i]['name']}. My email id is ${arr[i]['email']}.`);
        }
    }
}