function splitString(str, separator, newArr=[]) {
  console.log(str, 'string');
  if (str.length == 0) {
    return [...newArr];
  }
	
  let indexSep = str.indexOf(separator);
  console.log(indexSep, 'indexSep');

  if (indexSep < 0) {
    indexSep = str.length; 
    console.log(indexSep, 'indexSep in if');
  }
	
  const newStr = str.substring(0, indexSep);
  console.log(newStr, 'newStr');
	
	
  newArr.push(newStr);
  console.log(newArr, 'newArr');

  str = str.slice(indexSep + 1);
  console.log(str, 'remainingStr');

  return splitString(str, separator, [...newArr]);
}

splitString('02/20/2020', '/');
//output: ['02', '20', '2020']