function scuberGreetingForFeet(feet){
  
  if (feet <= 400){
    return "This one is on me!";
    
  }
  
  // else if (feet >  400 && feet > 2000){
  //   return 'I will gladly take your thirty bucks.';
  // }
  else if(feet > 2500){
    return 'No can do.'
  }
  else if(feet > 2000){
    return "I will gladly take your thirty bucks."
  }
  

}

function ternaryCheckCity(city){
  // Write your code here!
  // let city;
  // const checkCity = city === "NYC" ? "Ok, sounds good." : "No go."
  // checkCity;

  return city === "NYC" ? "Ok, sounds good." : "No go."

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case "generous" :
      return "Thank you so much."
    case "not as generous" :
      return "Thank you."
    default:
      return "Bye."
      
  }
}