function  validContact( contact ) {
    if(typeof contact !== 'number' && contact.length === 11 && contact.includes !== ' ' && contact.startsWith('01')){
        return true;
    }
    else{
        return 'invalid';
    }
}
console.log(validContact("0161587950"));
/* function validContact(input) {
    // যদি ইনপুট string না হয়
    if (typeof input !== 'string') {
      return "Invalid";
    }
  
    // চেক করবো ইনপুটে কোনো স্পেস আছে কিনা
    if (input.includes(' ')) {
      return false;
    }
  
    // চেক করবো ইনপুটের দৈর্ঘ্য ১১ কিনা এবং "01" দিয়ে শুরু হয়েছে কিনা
    if (input.length === 11 && input.startsWith('01')) {
      return true;
    }
  
    // বাকি সব কেসে false রিটার্ন করবে
    return false;
  }
   */