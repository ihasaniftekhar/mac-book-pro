function updateTotal(){
    const bestCost = document.getElementById('best-cost').innerText;
    const memCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliCost = document.getElementById('delivery-cost').innerText;

    const total = parseInt(bestCost) + parseInt(memCost) + parseInt(storageCost) + parseInt(deliCost);

    const totalObject = document.getElementById('total-cost');
    const totalObjectBottom = document.getElementById('bottom-total');
    totalObject.innerText = total;
    // bottom Total update
    totalObjectBottom.innerText = total;
    
    // This return will fix a bug with Coupon. It'll help not to use the same coupon twice! Isn't it amazing? ding ding ding.....
    return total;
}


// Coupon Code "stevekaku"
function couponApply(){
    const couponInput = document.getElementById('coupon-box');
    if(couponInput.value == "stevekaku"){
        const oldTotal = updateTotal();
        const afterTotal = oldTotal - oldTotal/5;
        const totalObjectBottom = document.getElementById('bottom-total');
        totalObjectBottom.innerText = afterTotal;

    }

    else if(couponInput.value == ''){
        alert('Enter the coupon code if you have any!');
    }

    else{
        alert('Wrong Coupon');
    }
    couponInput.value = '';
};

// Extra Memory buttons
document.getElementById('memory-btn-8').addEventListener('click',function(){
    const memCost = document.getElementById('memory-cost');
    memCost.innerHTML = 0;
    updateTotal();
});
document.getElementById('memory-btn-16').addEventListener('click',function(){
    const memCost = document.getElementById('memory-cost');
    memCost.innerHTML = 180;
    updateTotal();
});


// Extra storage buttons
document.getElementById('storage-btn-256').addEventListener('click',function(){
    const memCost = document.getElementById('storage-cost');
    memCost.innerHTML = 0;
    updateTotal();
});
document.getElementById('storage-btn-512').addEventListener('click',function(){
    const memCost = document.getElementById('storage-cost');
    memCost.innerHTML = 100;
    updateTotal();
});
document.getElementById('storage-btn-1tb').addEventListener('click',function(){
    const memCost = document.getElementById('storage-cost');
    memCost.innerHTML = 180;
    updateTotal();
});

// shipping cost buttons
document.getElementById('delivery-free').addEventListener('click',function(){
    const memCost = document.getElementById('delivery-cost');
    memCost.innerHTML = 0;
    updateTotal();
});
document.getElementById('delivery-fast').addEventListener('click',function(){
    const memCost = document.getElementById('delivery-cost');
    memCost.innerHTML = 20;
    updateTotal();
});

