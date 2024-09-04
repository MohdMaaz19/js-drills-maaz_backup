function emailList(arr){
    let email = [];
    for(let i=0; i<arr.length;i++){
        email.push(arr[i]['email']);
    }

    return email;
}