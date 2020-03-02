/* eslint-disable eqeqeq */
function splitString(str, separator, newArr=[]) {
  if (str.length == 0) {
    return [...newArr];
  }
	
  let indexSep = str.indexOf(separator);

  if (indexSep < 0) {
    indexSep = str.length; 
  }
	
  const newStr = str.substring(0, indexSep);
	
  newArr.push(newStr);

  str = str.slice(indexSep + 1);

  return splitString(str, separator, [...newArr]);
}

splitString('02/20/2020', '/');
//output: ['02', '20', '2020']