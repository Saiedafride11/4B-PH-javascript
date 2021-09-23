// chairWood = 3cft/chair
// tableWood = 10cft/table
// bedWood = 50cft/bed

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    // Wood calculation
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    // Table calculation
    const wood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return wood
}


const totalWood = woodCalculator(1, 1, 1);
console.log(totalWood)