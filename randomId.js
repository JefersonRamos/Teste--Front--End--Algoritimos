

function randomHash(){
    var hash = [];

    for(var i=0; i < 4; i++){
        var val = Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g, "").substr(1, 4);

        hash.push(val.toUpperCase());
    }

    var nova = hash.toString().replace(/[,]+/g, "-");

    return nova;
}

var id = randomHash();
console.log(id)