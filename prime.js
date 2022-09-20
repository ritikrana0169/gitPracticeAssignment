function primeCheck(num){
    if(num<2 || num==undefined){
        return false;
    } else {
    for(let i=2;i<=num**0.5;i++){
        if(num%i==0){
            return false;
        }
        return true;
    }
}
}
let ans=primeCheck(13);
console.log(ans);
