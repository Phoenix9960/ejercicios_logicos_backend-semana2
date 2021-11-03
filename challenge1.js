function twoSums(numbs, target) {
    
    let sum = [];

    numbs.forEach((num, idx) => {
        if( num + numbs[idx+1] === target ){
            sum = [idx, idx+1]
        }
    });

    return sum

}

module.exports = twoSums;