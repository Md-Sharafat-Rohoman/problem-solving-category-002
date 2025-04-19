function validProposal(person1, person2) {
    if (typeof person1 !== 'object' || typeof person2 !== 'object' || person1 === null || person2 === null) {
      return "Invalid";
    }
  
    if (person1.gender === person2.gender) {
      return false;
    }
  
    const ageDifference = Math.abs(person1.age - person2.age);
    if (ageDifference > 7) {
      return false;
    }

    return true;
  }

  console.log(validProposal({name:'sharafat', gender:'male', age:28},{name:'fariha', gender:'female', age:23}));
  
  /* validProposal(
    { name: "Rafi", gender: "male", age: 28 },
    { name: "Nila", gender: "female", age: 25 }
  ); // true
  
  validProposal(
    { name: "Rafi", gender: "male", age: 35 },
    { name: "Nila", gender: "female", age: 25 }
  ); // false (বয়সের পার্থক্য বেশি)
  
  validProposal(
    { name: "Rafi", gender: "male", age: 30 },
    { name: "Shuvo", gender: "male", age: 28 }
  ); // false (একই gender)
  
  validProposal("not an object", { name: "Nila", gender: "female", age: 25 }); // "Invalid"
   */