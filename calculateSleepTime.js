function calculateSleepTime(sleepArray) {

    if (!Array.isArray(sleepArray)) {
      return "Invalid";
    }
 
    let sum = 0;
    for (let time of sleepArray) {
      if (typeof time !== "number") {
        return "Invalid";
      }
      sum = sum + time;
    }

    
    // let totalSeconds = sleepArray.reduce((sum, sec) => sum + sec, 0);
    // let totalSeconds = sum + sleepArray;
    // console.log(totalSeconds);
    // for(let time of sleepArray){
    //     // console.log(time)
         
    // }
    // return totalSeconds
    // const totalSeconds = sum;
    // console.log(totalSeconds)
    // console.log(sum)

    
  
    const hour = Math.floor(sum / 3600);
    const minute = Math.floor((sum % 3600) / 60);
    const second = sum % 60;
  
    return {
      hour,
      minute,
      second
    };
  }

  console.log(calculateSleepTime([399,3400,9000,7650]));
  