
//Choose flavor seperated by commas// 
let input = froyo(flChoice);
const flavorInput = prompt(
    'What flavors would you like?',
    'vanilla,vanilla,vanilla,strawberry,coffee,coffee'
    );
const flChoice=vanilla || Strawberry || coffee;



if (input) {
    let flavors = input.split(',').map(flavor=> flavor.trim());

    let flavorCounts = {};
}
flavors.forEach(flChoice) {
    if (flavorCounts[flavor]){
        flavorCounts[flavor]++;
    } else {
        flavorCounts[flavor] += 1;
    }
    return flChoice
}

console.log(flavorCounts);
