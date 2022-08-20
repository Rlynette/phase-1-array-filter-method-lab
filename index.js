// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const drivers2 = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh' },
    {
        name: 'Sammy',
        hometown: 'New York' },
    {
         name: 'Sally',
         hometown: 'Cleveland'},
    {
        name: 'Annette',
        hometown: 'Los Angeles'},
    {
        name: 'Bobby',
        hometown: "Tampa Bay"}
];
function findMatching(names,matchName){
    return names.filter(name =>name.toLowerCase() ===matchName.toLowerCase())
}

function fuzzyMatch(names,matchName){
    return names.filter(name => name.charAt(0)===matchName.charAt(0))
}


function matchName(drivers, matchingName){
    return drivers.filter(elem => elem.name === matchingName)
}
