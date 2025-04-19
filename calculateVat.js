function calculateVAT(vat){
    // console.log(vat);
    if(typeof vat === 'number' && vat>=1){
        const totalVat = vat * 7.5/100;
        return totalVat;
    }
    else{
        return 'invalid';
    }
}
console.log(calculateVAT(1500));