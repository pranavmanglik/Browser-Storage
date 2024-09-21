let itemCount={
    Clothes:parseInt(localStorage.getItem('Clothes'))||0,
    Watches:parseInt(localStorage.getItem('Watches'))||0,
    Bags:parseInt(localStorage.getItem('Bags'))||0
};

function updateDisplay(){
    let displayClass=document.querySelector('.clickDis');
    displayClass.innerHTML=`Items: ${itemCount.Clothes} Clothes, ${itemCount.Watches} Watches, and ${itemCount.Bags} Bags`;
}

function btnInc(item){
    itemCount[item]++;
    localStorage.setItem(item,itemCount[item]);
    updateDisplay();
}

function btnDec(item){
    if (itemCount[item]>0){
        itemCount[item]--;
        localStorage.setItem(item,itemCount[item]);
    }
    updateDisplay();
}

updateDisplay();
