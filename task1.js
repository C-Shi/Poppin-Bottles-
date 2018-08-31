function maxBottle(cash){
    var total = cap = bottle = cash / 2;
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

console.log(maxBottle(10));
console.log(maxBottle(20));
console.log(maxBottle(30));
console.log(maxBottle(40));
