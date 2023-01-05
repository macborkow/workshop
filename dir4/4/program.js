function bubble_sort(unsorted_list) {     
  for (var i = 0; i < unsorted_list.length; i++)
    for (var j = 0; j < unsorted_list.length - 1 - i; j++)
      if (unsorted_list[j] > unsorted_list[j + 1]) {
          


        var temp = unsorted_list[j]
        unsorted_list[j] = unsorted_list[j + 1]
        unsorted_list[j + 1] = temp
      }
  
        
}               
             

var array = [ 5, 8, 4, 0, 4, 8, 1 ]                   
             
console.log("Sorting an array: ", array)



bubble_sort(array)
   




console.log("Array has been sorted: ", array)


     
