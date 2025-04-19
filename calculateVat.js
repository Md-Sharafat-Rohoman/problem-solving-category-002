function calculateVAT(price){
    // console.log(vat);
    if(typeof price === 'number' && price>=1){
        const totalVat = price * 7.5/100;
        return totalVat;
    }
    else{
        return 'invalid';
    }
}
console.log(calculateVAT(200));