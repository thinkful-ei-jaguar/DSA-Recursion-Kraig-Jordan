// #1 : Counting Sheep 
function countingSheep(numOfSheep) {
  if(numOfSheep === 0){
    return 'All sheep jumped over the fence';
  }

  const str = `${numOfSheep}: Another sheep jumps over the fence \n` ;
  return str + countingSheep(numOfSheep - 1);
}

countingSheep(3);
// => 3: Another sheep jumps over the fence
// => 2: Another sheep jumps over the fence
// => 1: Another sheep jumps over the fence
// => All sheep jumped over the fence


