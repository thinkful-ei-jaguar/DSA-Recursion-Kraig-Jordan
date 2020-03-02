function reverseString(str) {
  if (str === '' ){
    return  '';
  }
  const reverse = str[0];
  // console.log(reverse);

  return (reverseString(str.slice(1)) + reverse);
}
reverseString('reverse');