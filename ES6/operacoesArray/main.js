const arr = [1, 3, 4, 5, 8, 10]

const newArr = arr.map(function(item, index){
    return item + index
})
console.log(newArr)

const soma = arr.reduce(function(total, next){
    return next
})
console.log(soma)

const filter = arr.filter(function(item){
    return item % 2 === 0
})
console.log(filter)

const find = arr.find(function(item){
    return item === 1
})
console.log(find);
