const text = `subtitle | Conjuration cantrip
rule
property | Casting time:| 1 Action
property | Range: | 60 ft
property | Components: | V, S
rule
fill|0.25
text | You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a <b>Dexterity saving throw </b>or take <b>1d6 acid damage</b>
fill
section | At higher levels
text | This spell's damage increases by 1d6 when you reach 5th level, 11th level and 17th level`

let elements = text.split('\n')
let newElements = elements.map(e=>{
    let broken = e.split('|')
    broken = broken.map(e=>{
        return e.trim()
    })
    return {
        type:broken[0],
        content:broken.slice(1)
    }
})
console.log(newElements)