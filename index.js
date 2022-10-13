// Code your solution in this file!
const scuberHeadquarters = 42; 

function distanceFromHqInBlocks(ending) {
    if (ending < scuberHeadquarters) {
        return scuberHeadquarters - ending 
    } else 
        return ending - scuberHeadquarters;
}
distanceFromHqInBlocks();

function distanceFromHqInFeet (feet) {
    const result= distanceFromHqInBlocks(feet) * 264;
    return result 
}
distanceFromHqInFeet();

function distanceTravelledInFeet(start, destination) {
    if ( start > destination ) {
        const difference = (start - destination) * 264
        return difference;
    
} else if (destination > start) {
    const difference2 = (destination - start) * 264
        return difference2;
} 
}

