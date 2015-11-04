

// var quickSort = function(array, right, left){
//   right = right || array.length - 1;
//   left = left || 0;

//   if(array.length > 1){
//     var pivot = array[Math.floor((right + left) / 2)];
//     var first = left;
//     var last = right;

//     while(last <= first){
//       while(array[first] < pivot){
//         first++;
//       }
//       while(array[last] > pivot){
//         last--;
//       }
//       if(first <= last){
//         array[first] = [array[last], array[last] = array[first]][0];
//         first++;
//         last--;
//       }
//     }
//     var index = first;
//     if(left < index - 1){
//       quickSort(array, left, index - 1);
//     }
//     if(index < right){
//       quickSort(array, index, right);
//     }
//   }

//   return array;
// };




function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}

function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            // swap(items, i, j);
            items[i] = [items[j], items[j] = items[i]][0];
            i++;
            j--;
        }
    }
    return i;
}

console.log(quickSort([3,5,6,2,1,4,8,9,10]))