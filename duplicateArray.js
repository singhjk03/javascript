let arr=[12,23,34,34,45,56,56];
console.log(arr);

for(var i=0;i<arr.length ;i++){
    // console.log(arr[i]);

    for(var j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            for(var k=j;k<arr.length-1;k++){
                arr[k]=arr[k+1];
            }
            arr.length--;
            j--;
        }
    }
}
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}