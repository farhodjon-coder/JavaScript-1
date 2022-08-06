const myArray = [1,5,8,9,15]

let user = prompt(`Bitta son kiriting!`)

if(user){
    const myNumber = user * 1
    myArray.push(myNumber)
    sortedArray = myArray.sort(function( a, b){
        return a - b
    });
    console.log(sortedArray)
}else{
    console.log('Hato')
}