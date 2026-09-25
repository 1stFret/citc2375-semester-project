    // const variables
const projectTitle = "NFL Stadiums";
const numOfStadiums = 16;
const avgCapacity = 71590;
const isIndoor = true;
const hasRetractableRoof = true;


    //totalCapacity calculation
const totalCapacity = numOfStadiums * avgCapacity;


    //Concatonated string example
const summaryMessage = `The ${projectTitle} collection contains ${numOfStadiums} 
    stadiums with an average capacity of ${avgCapacity} seats.`;


    //If/Else statement counting num of stadiums
    if (numOfStadiums >= 16) {
        console.log("You have a large collection of stadiums.");
}   
    else if (numOfStadiums >= 8) {
        console.log('You have gathered a small collection of stadiums.')
}    
    else {
  console.log("You need to add more stadiums to grow your collection.");
}


    // Summary .log()
console.log(summaryMessage);
console.log(`Total Capacity Of All Stadiums: ${totalCapacity}`);