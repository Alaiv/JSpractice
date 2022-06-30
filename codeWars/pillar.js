function pillars(numPill, dist, width) {
  // your code here
if(numPill == 1){
  return 0;
} else{
  let result = (numPill - 2) * width + ((100 * dist) * (numPill - 1))
  return result;
}
}