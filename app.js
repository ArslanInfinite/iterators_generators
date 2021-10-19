// defining an iterator example

function nameIterator(names){
    let nextIndex = 0

    return{
        next: function(){
            // returning based on a conditional
            // if nextIndex is less than the length of names, then an object with a value of names index plus 1, with a done value of false (meaning there is more to iterate through) is returned
            // else an object of done:true is returned meaning the iterator is complete
            return nextIndex < names.length ? {value: names[nextIndex++], done: false} : { done: true}
        }
    }
}