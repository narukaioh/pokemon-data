let dex = require('./dex')
const { isEmpty } = require('lodash')

let mega = dex.pokemons.filter(i => i.alts.length > 1 && i.alts[1].suffix === 'Mega')
let bmega = mega.filter(i => i.alts[0].suffix === '')
let normal = dex.pokemons.filter(i => i.alts.length === 1)
let exception = dex.pokemons.filter(i => i.alts.length > 2)

const format = (i, index) => {
    return {
        name: `${i.name} ${i.alts[index].suffix}`,
        alts: i.alts[index],
        types: i.alts[index].types,
        format: i.alts[index].formats[0]
    }
}

mega = mega.map(i => format(i, 1))
bmega = bmega.map(i => format(i, 0))
normal = normal.map(i => format(i, 0))
let exceptionX = exception.map(i => format(i, 1))
let exceptionY = exception.map(i => format(i, 2))

let pokemons = []
pokemons.push(...mega, ...bmega, ...normal, ...exceptionX, ...exceptionY)

module.exports = pokemons
