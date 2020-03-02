function powerCalc(base, exponent){
    if (exponent < 0) { return 'exponent should be >= 0' }
     if (exponent == 0) { 
       return 1; } 
       return base * powerCalc(base,exponent-1); }
 
 powerCalc(10, 3);