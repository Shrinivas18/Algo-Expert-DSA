// Reverse an array

function reverse(arr){
    let i=0;
    let j=arr.length-1;

    if(arr.length<1){
        return arr;
    }

    while(i<=j){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }

    return arr;
}