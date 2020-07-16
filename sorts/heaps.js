// max heapify make the heap(represented with array here) and given index 
// to satisfy heap invariant(max or min) throughout all the children of array[index]
const max_heapify = function(array, index){
        const l = 2*index + 1 // left child
        const r = 2*index + 2 // right child
        if (l <= array.length && array[l] > array[index]){
            var largest = l
        }
        else largest = index
        if (r <= array.length && array[r] > array[largest]){
            largest = r
        }
        if (largest != index){
            let temp = array[index]
            array[index] = array[largest]
            array[largest] = temp
            return max_heapify(array, largest)
        }
        else{
            return array
        }
    }   
//building a heap
const build_max_heap = function(array){
    let i = Math.floor(array.length/2)
    while (i != -1){
        max_heapify(array, i)
        i -= 1
    }
}
//getting all element out of the heap in sorted order(reverse) here
const heapsort = function(array){
    build_max_heap(array)
    const sorted = []
    for(i = array.length - 1; i != 1; i -= 1){
        let temp = array[0]
        array[0] = array[i]
        array[i] = temp
        sorted.push(array.pop())
        max_heapify(array, 0)
    }
    sorted.push(array.pop())
    return sorted
}

// priority queues
// invariant : assumed array is already a heap

//return element with highest priority
const heap_maximum = function(array){
    return array[0]
}

//remove and return max element and re-arrange the heap
const heap_extract_max = function(array){
    if (array.length < 0){
        throw new Error('heap underflow')
    }
    const temp = array[0]
    array[0] = array[array.length-1]
    array[array.length - 1] = temp
    const max = array.pop()
    max_heapify(array, 0)
    return max
}

// increase priority(value or array[i]) in heap
const heap_increase_key = function(array, index, key){
    if (key < array[index]){
        throw new Error('smaller than current key')
    }
    array[index] = key
    while (index != 0 && array[index] > array[Math.floor(((index + 1)/2)-1)]){
        const temp = array[Math.floor(((index + 1)/2)-1)]
        array[Math.floor(((index + 1)/2)-1)] = array[index]
        array[index] = temp
        index = Math.floor(((index + 1)/2)-1)
    }

}

// inserting key by first appending very small value at end node and then calling increase key from above
// for key at position on the end
const max_heap_insert = function(array, key){
    array.push(-999999)
    heap_increase_key(array, array.length - 1, key)
}

var g = [1,8,5,6,9,7,4,2,12,15]
build_max_heap(g)
console.log(max_heap_insert(g, 23))
console.log(g)