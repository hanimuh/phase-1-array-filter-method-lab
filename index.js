// Code your solution here
const drivers = [
    {name: 'Bobby', hometown: 'Pittsburgh' },
    {name: 'Sammy', hometown: 'New York' } ,
    {name: 'Sally', hometown: 'Cleveland' },
    {name: 'Annette', hometown: 'Los Angeles' },
    {name: 'Bobby', hometown: 'Tampa Bay' }
]; 
// findMatching func 

function findMatching(arr, properties) {
    return arr.filter(function (entry) {
        return Object.keys(properties).every(function (key) {
            return entry[key].toLowerCase() === properties[key].toLowerCase();
        });
    });
}
let results = findMatching(drivers, { name: "bobby" });
console.log (results)

// fuzzyMatch func

function fuzzyMatch (arr, str){
    return arr.filter(function(entry){
        return entry.name.startsWith(str);
    })
}
console.log (fuzzyMatch(drivers, "Sa"))

// matchName func


function matchName(arr, entry) {
    return arr.filter(function (el) {
        return el.name === entry;
    })}

console.log (matchName(drivers, "Bobby"))



