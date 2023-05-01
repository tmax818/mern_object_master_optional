const {pokemon} = require('./pokemon')

// console.log(pokemon)

// TODO an array of pokémon objects where the id is evenly divisible by 3
const idDivBy3 = pokemon.filter(x => x.id % 3 === 0)
console.log(idDivBy3)

// TODO an array of pokémon objects that are "fire" type
const fireType = pokemon.filter(x => x.types.includes('fire'))
console.log(fireType)
// TODO an array of pokémon objects that have more than one type

const typeGreaterThanOne = pokemon.filter(x => x.types.length > 1)
console.log(typeGreaterThanOne)

// TODO an array with just the names of the pokémon

const names = pokemon.map(x => x.name)
console.log(names)

// TODO an array with just the names of pokémon with an id greater than 99
const namesWithIdGreaterThan99 = pokemon.filter(x => x.id > 99).map(x => x.name)
console.log(namesWithIdGreaterThan99)

// TODO an array with just the names of the pokémon whose only type is poison

const poisonNames = pokemon.filter(x => x.types[0] === 'poison' && x.types.length === 1).map(x => x.name)
console.log(poisonNames)

// TODO an array containing just the first type of all the pokémon whose second type is "flying"

const firstTypeOfSecondTypeFlying = pokemon.filter(x => x.types[1] === 'flying').map(x => x.types[0])
console.log(firstTypeOfSecondTypeFlying)

// TODO a count of the number of pokémon that are "normal" type

const countNormal = pokemon.filter(x => x.types.includes('normal')).length
console.log(countNormal)