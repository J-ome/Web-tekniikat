let numerot = [3,6,4,7,8]

for (num of numerot) {
    console.log(num);
}

numerot.forEach(tool)
function tool(num){
    console.log(num);
}

numerot.forEach(function(num){console.log(num);});

numerot.forEach(num => console.log(num));