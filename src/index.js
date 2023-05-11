function stepen(num, degree) { 
  if (degree == 0) { 
    return 1; 
  } 
  else if (degree % 2 == 0) { 
    return stepen(num * num, degree / 2); 
  } 
  else { 
    return num * stepen(num * num, Math.floor(degree / 2)); 
  }
  } 
console.log(stepen(4, 3));