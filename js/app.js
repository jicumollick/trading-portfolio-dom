

// writing function for deposit 

function deposit(){
    let depositAmount = parseFloat(document.getElementById('deposit-input').value);
    
    let TotalBalance = parseFloat(document.getElementById('balance').innerText);

    TotalBalance += depositAmount;

    document.getElementById('balance').innerText = TotalBalance;
    document.getElementById('deposit-input').value = '';

}

function coinCount(coinInput , coin){
    let bitcoinqty =  parseFloat(document.getElementById(coinInput).value);

    let oldBitcoinqty = parseFloat(document.getElementById(coin).innerText);
    oldBitcoinqty += bitcoinqty;
    document.getElementById(coin).innerText = oldBitcoinqty;


    if(coin == 'bitcoin'){
     bitcoinPrice = bitcoinqty * 10;
    }
    else {
     bitcoinPrice = bitcoinqty * 5;

    }
    let TotalBalance = parseFloat(document.getElementById('balance').innerText);

    let newBalance = TotalBalance - bitcoinPrice;
    document.getElementById('balance').innerText = newBalance;

    document.getElementById(coinInput).value = '';

}


