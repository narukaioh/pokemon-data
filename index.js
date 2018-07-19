let pokemons = require('./pokemons')


const bestAtkSweeper = i => i.alts.atk > 110 && i.alts.spe > 110 && i.format !== 'Uber'
const bestSpaSweeper = i => i.alts.spa > 110 && i.alts.spe > 110 && i.format !== 'Uber'

const bestSpdTanker = i => i.alts.hp > 90 && i.alts.spd > 110 && i.format !== 'Uber'
const bestDefTanker = i => i.alts.hp > 90 && i.alts.def > 110 && i.format !== 'Uber'


let sweepersAtk = pokemons.filter(i => 
    bestAtkSweeper(i)
)

let sweepersSpa = pokemons.filter(i => 
    bestSpaSweeper(i)
)

let tankerSpd = pokemons.filter(i => 
    bestSpdTanker(i)
)

let tankerDef = pokemons.filter(i => 
    bestDefTanker(i)
)

// console.log(sweepersAtk)
// console.log(sweepersSpa)
console.log(tankerDef.length)
console.log(tankerSpd.length)