//first we will abstract some of the functionality of quickSort into a function that we will call organizer
//organizer will do the rearanging for us
var organizer = function(array, left, right) {
  //first we select our pivot point in our array
  var pivot   = array[Math.floor((right + left) / 2)];
  //we continue sorting until our left and right pointers point to the same spot
  while (left <= right) {
    //if the left value is less than the pivot we don't need to do anything with it so we increment
    while (array[left] < pivot) {
      left++;
    }
    //we do the same for the end of the array, but instead of incrementing we decrement
    while (array[right] > pivot) {
      right--;
    }
    //after our pointers are pointing to the values that we want to swap, we preform the swap
    if (left <= right) {
      //this is just a way to preform an inline swap
      array[left] = [array[right], array[right] = array[left]][0];
      //and then we increment/decrement the left and right pointers respectively
      left++;
      right--;
    }
  }
  //finally we return the left pointer
  return left;
}


//Once some of the heavy lifting is done by organizer we can create the quickSort function 
var quickSort = function(array, left, right){
  //first we set right to what is passed in or length -1 and left to what is passed in or 0
  //this allows us to initially call the function with one argument, the array
  right = right || array.length - 1;
  left = left || 0;
  //we set our base case
  if(array.length > 1){
    //we then set our index pointer to the result of organizer
    var index = organizer(array, left, right);
    if(left < index - 1){
      //we then recusivly call quickSort until left pointer is equal to the index
      quickSort(array, left, index - 1);
    }
    if(index < right){
      //and we do the same for the other half of the 'split' array
      quickSort(array, index, right);
    }
  }
  //finaly we return the sorted array
  return array;
};
