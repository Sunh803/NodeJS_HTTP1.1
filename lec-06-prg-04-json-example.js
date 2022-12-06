const fs = require('fs')
superHeores = 
{
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
    {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
            "Radiation resistance",
            "Turning tiny",
            "Radiation blast"
            ]},
    { 
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
        ]},
    {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
            "Immortality",
            "Heat Immunity",
            "Inferno",
            "Teleportation",
            "Interdimensional travel"]
        }]
}
console.log(superHeores['homeTown'])
console.log(superHeores['active'])
console.log(superHeores['members'][1]['powers'][2])
fs.writeFile('lec-06-prg-04-json-example.json',JSON.stringify(superHeores,null,'/t'),function(err){
    if(err) return console.log(err)
})