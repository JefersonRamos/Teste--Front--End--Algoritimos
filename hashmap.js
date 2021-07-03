var values = [1, 22, -33 , 40, 70, -80]

function sum(array){
    var sum = 0;
    array.map(function(val){
        sum +=val;
    });

    return sum;
}

function sub(array){
    var sub = values[0];
    values.shift();

    array.map(function(val){
        sub -= val;
    });

    return sub;
}

function div(a, b){

    var msg = '';

    if(a == 0 || b == 0){
        msg = "Unable to divide by zero";
    }else{
        msg = (a/b);
    }

    return msg;
}

function multi(array){
    var multi = values[0];
    values.shift();

    array.map(function(val){
        sub *= val;
    });

    return multi;
}

console.log(sum(values));
console.log(sub(values));
console.log(div(5, 20));
console.log(multi(values));