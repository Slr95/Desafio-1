let Person = new Object([
    ['Homero', 55],
    ['Bart', 12],
    ['Lisa', 13],
    ['Marge', 52]
])

function addPerson(value1) {
    Person.push(value1)
}

addPerson(['Maggie', 2])

Person.pop()

console.log(Person)
