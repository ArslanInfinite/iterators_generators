// defining an iterator example

// function nameIterator(namesInArray){
//     let nextIndex = 0

//     return{
//         next: function(){
//             // returning based on a conditional
//             // if nextIndex is less than the length of names, then an object with a value of names index plus 1, with a done value of false (meaning there is more to iterate through) is returned
//             // else an object of done:true is returned meaning the iterator is complete
//             return nextIndex < namesInArray.length ? {value: namesInArray[nextIndex++], done: false} : { done: true}
//         }
//     }
// }

// // creating an array of names 
// const arrayOfNames = ['Jack', 'Jill', 'John']
// // initializing iterator and passing in namesArray into it

// const names = nameIterator(arrayOfNames)

// console.log(names.next())
// console.log(names.next())
// console.log(names.next())
// console.log(names.next())

// generator example, the * tells JS that this is a generator, not just a function

function* sayNames(){
    yield 'Jack', 
    yield 'Jill', 
    yield 'John'
}

const names = sayNames()

console.log(names.next())