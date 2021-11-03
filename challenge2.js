function divisibleByLeft(n) {

    const nStr = n.toString();
    let arr = [false];

    if( nStr.length > 1 ){
        for (let i = 1; i < nStr.length; i++) {
            let a = Number.parseInt(nStr.charAt(i));
            let b = Number.parseInt(nStr.charAt(i-1));

            if(a%b === 0){
                arr = [...arr, true];
            }else {
                arr = [...arr, false];
            }
            
        }
    }

    return arr;
}

module.exports = divisibleByLeft;