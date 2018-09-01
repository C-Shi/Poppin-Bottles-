function maxBottle(cash){
    var total = cap = bottle = Math.floor(Math.floor(cash) / 2);
    var newPop = 0;
    var earnedFromBottle = 0;
    var earnedFromCap = 0;
    newPop = total;
    function calBottle(){
        // new pop bottle that is redeemd from cap and bottle
        newPop = Math.floor(bottle / 2) + Math.floor(cap / 4);
        total += newPop;
        //
        earnedFromBottle += Math.floor(bottle / 2);
        earnedFromCap += Math.floor(cap / 4);
        // earnedFrom at each function call should be the amount until last call
        // therefore, earnFrom should be calcualte before bottle & cap changed

        // new cap and bottle collected after this round of redeem
        cap = newPop + cap % 4;
        bottle = newPop + bottle % 2;
 
        if (bottle < 2 && cap < 4) return 0;
        return total + calBottle()
    }

    calBottle();

    return {
        'TOTAL BOTTLE': total,
        'REMAINING BOTTLE': total % 2,
        'REMAINING CAP': total % 4,
        'TOTAL EARNED': {
            'BOTTLES': earnedFromBottle,
            'CAPS': earnedFromCap
        }
    };
}

console.log(maxBottle(process.argv[2]) || 0); // add || 0 as fallback in case user did not enter anything from command line