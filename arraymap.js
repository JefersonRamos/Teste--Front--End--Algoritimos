const array = ["a", 10, "b", "hola", 122, 15]

var text = []
var numeros = []

//Function that separates numbers and text
array.map(function(item){
    if(isNaN(item)){
        text.push(item)
    }else{
        numeros.push(item)
    }
});

//Function that returns the highest number

numeros.sort(function (a,b) {
    return a-b;
});

console.log(text, numeros, numeros[numeros.length - 1]);