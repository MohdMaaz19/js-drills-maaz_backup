function printHobbiesByAge(arr,age){
    for(let i=0; i<arr.length; i++){
     if(arr[i]['age']==age){
        console.log(arr[i]['hobbies']);
     }   
    }
}