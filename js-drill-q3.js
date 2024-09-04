function studentsFromAustralia(arr){
    let studentList = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]['country']==='Australia' && arr[i]['isStudent']){
            studentList.push(arr[i]['name']);
        }
    }
    console.log(studentList);
}