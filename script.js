// Preliminaries
//var nums = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)

//for(var i = 0; i < 10; i++){        //Question 1
//console.log(i)
//}

//for(var i = 9; i > 0; i--){       //Question 2 
//    console.log(i)
//}

//const fruit = ["banana", "orange", "apple", "kiwi"]    // Question 3  

//for(var i = 0; i < fruit.length; i++) {
//   console.log(fruit[i])
//}

//Bronze medal 
//Question 1
//var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//for(var i = 0; i < 10; i++){
//    console.log(numbers[i])
//}

//Question 2 Bronze
//var numbers = []
//for(var i = 0; i <= 100; i++){
//    if(i % 2 === 0){
//        numbers.push(i)
//    }
//}
//for(var i =0; i < numbers.length; i++){
//    console.log(numbers[i])
//} 

//Question 3.
//const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
//for(var i = 0; i < fruit.length; i++){
//    if(!(i % 2 === 0)){
//        console.log(fruit[i])
//    }
//}

//Silver Medal
//Question 1
/*const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

for (var i =0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name)
}

//Question 2
var names = []
var occupations = []
for (var i=0; i < peopleArray.length; i++){
    names.push(peopleArray[i].name)
    occupations.push(peopleArray[i].occupation)
}
console.log(names)
console.log(occupations)


//Question 3
//var evenNames = []
//var oddOccupations = []
//for (var i = 0; i < names.length; i++){
//    if(i % 2 === 0){
//      evenNames.push(names[i])  
//    }
//    else {
//        oddOccupations.push(occupations[i])
//    }
//}
//console.log(evenNames)
//console.log(oddOccupations)

//Gold Medal
//Question 1   Create an array that mimics a grid like the following using nested for loops:


var grid1 = []

for( i = 0; i < 3; i++){ 
    var row = []
    for ( m = 0; m < 3; m++){
        row.push(0)

    }
    grid1.push(row)
}
console.log(grid1)

//Question 2 

var grid2 = []

for( i = 0; i < 3; i++){ 
    var row = []
    for ( m = 0; m < 3; m++){
        row.push(i)

    }
    grid2.push(row)
}
console.log(grid2)

//Question 3
var grid3 = []

for( i = 0; i < 3; i++){ 
    var row = []
    for ( m = 0; m < 3; m++){
        row.push(m)

    }
    grid3.push(row)
}
console.log(grid3)
*/
//Question 4
var grid4 = []

for( i = 0; i < 3; i++){ 
    var row = []
    for ( m = 0; m < 3; m++){
        row.push("x")
    }
    grid4.push(row)
}//how do we define m to x ? 
console.log(grid4)

