const partition = function(array, p, r){
    let i = p - 1
    let x = array[r - 1]
    for(j = p; j < r; j++){
        if(array[j] <= x){
            i = i + 1
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
    
    return i
}

const quicksort = function(array, p, r){
    if (p < r){
        const q = partition(array, p, r)
        quicksort(array, p, q)
        quicksort(array, q+1, r)
    }
}
const f = [2,8,7,1,3,5,6,4]
quicksort(f, 0, 8)
console.log(f)
