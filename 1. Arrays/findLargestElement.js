// Find largest element in the given array

function largest(arr){
    let max = -Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=max){
            max=arr[i]
        }
    }
    return max;
}