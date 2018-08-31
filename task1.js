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
    console.log(total);
}

maxBottle(10);
maxBottle(20);
maxBottle(30);
maxBottle(40);