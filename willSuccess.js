/* function willSuccess(input) {
    if (!Array.isArray(input)) {
        return "Invalid";
    }

    let passCount = 0;
    let failCount = 0;

    for (let mark of input) {
        if (mark >= 50) {
            passCount++;
        }
        else {
            failCount++;
        }
    }

    return passCount > failCount;
} */


function willSuccess(input){
    if(!Array.isArray(input)){
        return 'invalid'
    }
    let passMark = 0;
    let failMark = 0;
    for(let mark of input){
        if(mark >= 50){
            passMark++;
        }
        else{
            failMark++;
        }
    }
    return passMark > failMark;
}
// console.log(willSuccess([23,45,67,89,98,76,54,43,21,12,34,25]));
console.log(willSuccess('sharafat rohoman'));