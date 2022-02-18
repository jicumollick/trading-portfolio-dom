// writing function for deposit 

function deposit(){
    let depositAmount = parseFloat(document.getElementById('deposit-input').value);

    if(isNaN(depositAmount)){
        depositAmount = 0;
        document.getElementById('error1').classList.remove ('d-none');
        document.getElementById('deposit-input').value = '';
    }else {
        document.getElementById('error1').classList.add('d-none');
        let TotalBalance = parseFloat(document.getElementById('balance').innerText);

        TotalBalance += depositAmount;
    
        document.getElementById('balance').innerText = TotalBalance;
        document.getElementById('deposit-input').value = '';

    }
    
   
}

function coinCount(coinInput , coin){
    let coinqty =  parseFloat(document.getElementById(coinInput).value);
    if(isNaN(coinqty)){
        coinqty = 0;
        document.getElementById('error2').classList.remove ('d-none');
        document.getElementById(coinInput).value = '';
    }else {
        document.getElementById('error2').classList.add('d-none');

    let coinPrice;
    if(coin == 'bitcoin'){
     coinPrice = coinqty * 10;
    }
    else {
     coinPrice = coinqty * 5;
    }
    let TotalBalance = parseFloat(document.getElementById('balance').innerText);

    // error handling if totalbalance < coinprice 
    if(TotalBalance < coinPrice){
        coinPrice = 0;
        coinqty = 0;
        document.getElementById('error3').classList.remove ('d-none');
    }else {
        document.getElementById('error3').classList.add('d-none');
    }

    let oldcoinqty = parseFloat(document.getElementById(coin).innerText);
    oldcoinqty += coinqty;
    document.getElementById(coin).innerText = oldcoinqty;

    let newBalance = TotalBalance - coinPrice;
    document.getElementById('balance').innerText = newBalance;

    document.getElementById(coinInput).value = '';
    }

}


