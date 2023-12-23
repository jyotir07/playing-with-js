function factorial(n) {
    let result;
    let multiple;
    if(n == 0){
        return 1;
    }
    if(n == 1){
        return 0;
    }
    else{
        for(let i = 0; i<n; i++){
            if((n-1) != 0){
            multiple = n*(n-1);
        }
        if (n == 0){
          return multiple;
        }
        }
        return multiple;
    }
}

let n = 5;
factorial (n)
module.exports = factorial;
