// returns distance of customer in blocks (int) from HQ @ 42nd St.
function distanceFromHqInBlocks(loc) {
  const hQ = 42;
  result = hQ - loc;
  return Math.abs(result);
}

// returns distance of customer in feet (int) from HQ @ 42nd St. - 1 block = 264 ft 
function distanceFromHqInFeet(loc) {
  result = distanceFromHqInBlocks(loc) * 264;
  return result;
}

// returns the distance travelled in feet from two blocks, expressed as integers
function distanceTravelledInFeet(start, destination) {
  distance = Math.abs(start - destination) * 264;
  return distance;
}
