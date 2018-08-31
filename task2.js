function maxBottle(cash){
    var total = cap = bottle = Math.floor(Math.floor(cash) / 2);
    var newPop = 0;
    newPop = total;
    function calBottle(){
        newPop = Math.floor(bottle / 2) + Math.floor(cap / 4);
        cap = newPop + cap % 4;
        bottle = newPop + bottle % 2;
        total += newPop;
        if (bottle < 2 && cap < 4) return 0;
        return total + calBottle()
    }

    calBottle();

    return total;
}

console.log(maxBottle(process.argv[2] || 0)); // add || as fallback in case user did not enter anything from command line
