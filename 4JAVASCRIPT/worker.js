onmessage = function(data) {
    // console.log(data); it contains a object where the data exist.
    let sum = data.data.reduce((acc, item) => item + acc, 0);
    
    postMessage(sum);
}